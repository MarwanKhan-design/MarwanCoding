import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marwankhan.com"),

  title: {
    default: "Marwan Khan | Full-Stack Developer & AI/ML Builder",
    template: "%s | Marwan Khan",
  },

  description:
    "Marwan Khan is a full-stack developer and AI/ML builder shipping production-grade web applications with React, Next.js, TypeScript, PostgreSQL, Prisma, and Python. Creator of BarhtaFit and Freelancer CRM.",

  keywords: [
    "Marwan Khan",
    "Full-Stack Developer",
    "AI Developer",
    "Machine Learning",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Python",
    "Web Developer Portfolio",
    "BarhtaFit",
    "Freelancer CRM",
    "AI/ML Builder",
  ],

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
    title: "Marwan Khan | Full-Stack Developer & AI/ML Builder",
    description:
      "Portfolio of Marwan Khan — a full-stack developer and AI/ML builder shipping production-grade web apps. Creator of BarhtaFit and Freelancer CRM.",
    url: "https://marwankhan.com",
    siteName: "Marwan Khan",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Marwan Khan | Full-Stack Developer & AI/ML Builder",
    description:
      "Full-stack developer and AI/ML builder shipping production-grade web applications.",
    creator: "@marwankhan_dev",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    jobTitle: "Full-Stack Developer & AI/ML Builder",
    description:
      "Marwan Khan is a full-stack developer and AI/ML builder shipping production-grade web applications and AI-powered projects.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Python",
      "Machine Learning",
      "Node.js",
      "Tailwind CSS",
    ],
    sameAs: [
      "https://github.com/MarwanKhan-design",
      "https://www.linkedin.com/in/marwan-coding/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Marwan Khan Portfolio",
    url: "https://marwankhan.com",
    description:
      "Portfolio of Marwan Khan — full-stack developer and AI/ML builder.",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <meta name="theme-color" content="#07080b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
