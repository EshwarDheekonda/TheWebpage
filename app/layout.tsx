import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Engineer Portfolio | Graduate Student",
  description: "Portfolio website of an AI Engineer graduate student actively seeking AI Engineer roles. Showcasing projects, skills, and experience in machine learning and artificial intelligence.",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "Data Science", "Portfolio", "Graduate Student"],
  authors: [{ name: "AI Engineer Candidate" }],
  openGraph: {
    title: "AI Engineer Portfolio",
    description: "Portfolio website showcasing AI/ML projects and expertise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineer Portfolio",
    description: "Portfolio website showcasing AI/ML projects and expertise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "jobTitle": "AI Engineer",
              "name": "AI Engineer Candidate",
              "description": "Graduate student specializing in Artificial Intelligence and Machine Learning",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

