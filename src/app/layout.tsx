import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Rajesh Kannan A | Frontend Engineer | React, Next.js & TypeScript",
  description:
    "Portfolio of Rajesh Kannan A, a Senior Frontend Engineer specializing in React.js, Next.js, TypeScript, real-time dashboards, enterprise applications, and scalable UI systems.",
  keywords: [
    "Rajesh Kannan A",
    "Frontend Engineer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Real-time Dashboards",
    "GPS Telematics UI",
    "Coimbatore Frontend Developer",
    "LTM Senior Software Engineer",
  ],
  authors: [{ name: "Rajesh Kannan A" }],
  metadataBase: new URL("https://rajesh-dev.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rajesh Kannan A | Frontend Engineer",
    description:
      "Frontend Engineer with 4+ years of experience building scalable, high-performance web applications using React.js, Next.js, and TypeScript.",
    url: "https://rajesh-dev.vercel.app",
    siteName: "Rajesh Kannan A Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Kannan A | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React.js, Next.js, TypeScript, and real-time enterprise dashboards.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.role,
    worksFor: {
      "@type": "Organization",
      name: PERSONAL_INFO.company,
    },
    url: "https://rajesh-dev.vercel.app",
    sameAs: [PERSONAL_INFO.linkedIn, PERSONAL_INFO.github],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: PERSONAL_INFO.education.institution,
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Frontend Engineering",
      "Real-time Telematics UI",
      "WebSockets",
      "Tailwind CSS",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rajesh Kannan A Portfolio",
    url: "https://rajesh-dev.vercel.app",
  };

  return (
    <html lang="en" className={`${geist.variable}`} style={{ colorScheme: "light" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-[#0a0a0f] text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
