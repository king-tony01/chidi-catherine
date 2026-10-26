import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chidi-catherine.vercel.app"),
  title: {
    default: "Chidi Catherine Obi-Hezekiah, RPN | Electronic Professional Nursing Portfolio",
    template: "%s | Chidi Catherine Obi-Hezekiah, RPN",
  },
  description:
    "Electronic Professional Nursing Portfolio for Chidi Catherine Obi-Hezekiah, Registered Practical Nurse (RPN with CNO since 2021) and Honours BSN Candidate at Seneca Polytechnic (President's Honour List Winter 2026). Acute care, med-surg, mental health, and LTC practice.",
  applicationName: "Chidi Catherine Obi-Hezekiah Nursing Portfolio",
  authors: [{ name: "Chidi Catherine Obi-Hezekiah", url: "https://chidi-catherine.vercel.app" }],
  creator: "Chidi Catherine Obi-Hezekiah",
  publisher: "Seneca Polytechnic School of Nursing",
  keywords: [
    "Nursing Portfolio",
    "Chidi Catherine Obi-Hezekiah",
    "Chidi Obi-Hezekiah",
    "RPN Ontario",
    "Seneca Polytechnic BSN",
    "Seneca President's Honour List",
    "Mackenzie Health Hospital 3 Aqua",
    "Brampton Civic Hospital General Medicine",
    "College of Nurses of Ontario",
    "CNO Entry to Practice",
    "Registered Nurse Candidate",
    "Clinical Rigour Compassionate Care",
    "Epic EHR",
    "Meditech",
    "PointClickCare",
  ],
  openGraph: {
    title: "Chidi Catherine Obi-Hezekiah, RPN | Electronic Nursing Portfolio",
    description:
      "Clinical Rigour. Compassionate Care. Honours BSN Candidate '27 at Seneca Polytechnic, Seneca President's Honour List (Winter 2026), CNO RPN licensed since 2021 with 4+ years acute and complex care practice.",
    url: "/",
    siteName: "Chidi Catherine Obi-Hezekiah Nursing Portfolio",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Chidi Catherine Obi-Hezekiah, RPN — Electronic Professional Nursing Portfolio Banner",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chidi Catherine Obi-Hezekiah, RPN | Electronic Nursing Portfolio",
    description:
      "Clinical Rigour. Compassionate Care. Honours BSN Candidate '27 at Seneca Polytechnic, Seneca President's Honour List (Winter 2026), CNO RPN licensed since 2021.",
    images: ["/images/og-banner.png"],
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
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
