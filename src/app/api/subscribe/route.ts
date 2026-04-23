import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let cachedAudienceId: string | null = null;

async function resolveAudienceId(resend: Resend): Promise<string | null> {
  if (process.env.RESEND_AUDIENCE_ID) return process.env.RESEND_AUDIENCE_ID;
  if (cachedAudienceId) return cachedAudienceId;

  const list = await resend.audiences.list();
  const existing = list.data?.data?.[0]?.id;
  if (existing) {
    cachedAudienceId = existing;
    return existing;
  }

  const created = await resend.audiences.create({ name: "Xyra Chat Waitlist" });
  if (created.data?.id) {
    cachedAudienceId = created.data.id;
    return created.data.id;
  }
  return null;
}

export async function POST(request: Request) {
  let email: string;
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[subscribe] RESEND_API_KEY not set — logging email only:", email);
    return Response.json({ ok: true, storage: "log" });
  }

  const resend = new Resend(apiKey);

  const audienceId = await resolveAudienceId(resend);
  if (!audienceId) {
    console.error("[subscribe] Could not resolve a Resend audience");
    return Response.json({ error: "Subscription temporarily unavailable." }, { status: 500 });
  }

  const result = await resend.contacts.create({ email, audienceId, unsubscribed: false });

  if (result.error) {
    const msg = result.error.message ?? "";
    if (/already exists/i.test(msg)) {
      return Response.json({ ok: true, storage: "resend", alreadySubscribed: true });
    }
    console.error("[subscribe] Resend error:", result.error);
    return Response.json({ error: "Could not save your email. Try again." }, { status: 500 });
  }

  return Response.json({ ok: true, storage: "resend" });
}
