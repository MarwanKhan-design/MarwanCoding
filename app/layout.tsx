import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://marwankhan.com"),

  title: {
    default: "Marwan Khan | Full-Stack & AI Developer",
    template: "%s | Marwan Khan",
  },

  description:
    "Marwan Khan is a full-stack and AI developer building modern web applications with React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, and AI technologies.",

  authors: [
    {
      name: "Marwan Khan",
      url: "https://marwankhan.com",
    },
  ],

  creator: "Marwan Khan",
  publisher: "Marwan Khan",

  alternates: {
    canonical: "https://marwankhan.com",
  },

  openGraph: {
    title: "Marwan Khan | Full-Stack & AI Developer",
    description:
      "Portfolio of Marwan Khan — a full-stack and AI developer building modern web applications and AI-powered projects.",
    url: "https://marwankhan.com",
    siteName: "Marwan Khan",
    type: "website",
    locale: "en_US",
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marwan Khan",
    url: "https://marwankhan.com",
    image: "https://marwankhan.com/images/me.png",
    jobTitle: "Full-Stack & AI Developer",
    description:
      "Marwan Khan is a full-stack and AI developer building modern web applications and AI-powered projects.",
    sameAs: [
      "https://github.com/MarwanKhan-design",
      "https://www.linkedin.com/in/marwan-coding/",
    ],
  };

  return (
    <html lang="en" className={`${inter.className} h-full antialiased dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
