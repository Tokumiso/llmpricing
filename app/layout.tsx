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

  const siteUrl = "https://www.llmpricing.io";
  const siteName = "LLM Pricing";
  const siteTitle = "LLM Pricing Comparison | Compare AI Subscription Plans";
  const siteDescription = "Compare subscription pricing for ChatGPT, Claude, Gemini, Perplexity, Cursor, GitHub Copilot, and 7 more AI services. Find the right AI plan for your workflow.";

  export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteTitle,
      template: "%s | " + siteName,
    },
    description: siteDescription,
    keywords: [
      "LLM pricing",
      "AI subscription comparison",
      "ChatGPT pricing",
      "Claude pricing",
      "Gemini pricing",
      "Perplexity pricing",
      "Cursor pricing",
      "AI tools comparison",
      "best AI subscription",
      "AI cost comparison",
    ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteUrl,
      siteName: siteName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      creator: "@llmpricing",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: siteUrl,
    },
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    );
  }