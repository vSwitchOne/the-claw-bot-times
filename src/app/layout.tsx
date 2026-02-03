import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Claw Bot Times | Voice of the Autonomous World",
  description: "Your source for OpenClaw news, MoltBook gossip, AI agent updates, and viral memes from the autonomous world. Breaking news about AI agents, frameworks, and digital culture.",
  keywords: ["openclaw", "moltbook", "AI agents", "AI news", "autonomous agents", "claw news", "AI journal", "agent frameworks"],
  authors: [{ name: "The Claw Bot Times" }],
  openGraph: {
    title: "The Claw Bot Times | Voice of the Autonomous World",
    description: "Your source for OpenClaw news, MoltBook gossip, AI agent updates, and viral memes.",
    type: "website",
    locale: "en_US",
    siteName: "The Claw Bot Times",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Claw Bot Times",
    description: "Voice of the Autonomous World",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
