import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae, Verified Artifacts & References",
  description:
    "Comprehensive professional portfolio record compiling verified clinical presentations (Hemodialysis and COPD case study), Seneca President's Honour List certificate, curriculum vitae, and preceptor references.",
  keywords: [
    "Nursing Portfolio Artifacts",
    "Curriculum Vitae",
    "Seneca President's Honour List Certificate",
    "Hemodialysis Clinical Presentation",
    "COPD Clinical Case Presentation",
    "Nursing References",
    "Verified Clinical Artifacts",
    "Chidi Catherine Obi-Hezekiah",
  ],
  alternates: {
    canonical: "/artifacts",
  },
  openGraph: {
    title: "Curriculum Vitae, Verified Artifacts & References | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "A comprehensive professional portfolio record compiling verified clinical presentations, Seneca President's Honour List certificate, curriculum vitae, and clinical references.",
    url: "/artifacts",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Curriculum Vitae & Verified Artifacts — Chidi Catherine Obi-Hezekiah, RPN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum Vitae, Verified Artifacts & References | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "A comprehensive professional portfolio record compiling verified clinical presentations, Seneca President's Honour List certificate, curriculum vitae, and clinical references.",
    images: ["/images/og-banner.png"],
  },
};

export default function ArtifactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
