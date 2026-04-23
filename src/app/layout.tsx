import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xyra Chat — Coming Soon",
  description: "The next-generation chat automation platform. Automate conversations, boost engagement, and scale your business. Coming soon.",
  keywords: ["chat automation", "chatbot", "messaging platform", "xyra chat", "customer engagement"],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Xyra Chat — Coming Soon",
    description: "The next-generation chat automation platform. Coming soon.",
    url: "https://www.xyrachat.com",
    siteName: "Xyra Chat",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
