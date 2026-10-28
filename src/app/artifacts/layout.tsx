import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae, Clinical Presentations & References",
  description:
    "Comprehensive professional portfolio record compiling verified clinical presentations (Hemodialysis and COPD case studies), curriculum vitae, and preceptor references.",
  keywords: [
    "Nursing Portfolio Artifacts",
    "Curriculum Vitae",
    "Hemodialysis Clinical Presentation",
    "COPD Clinical Case Presentation",
    "Nursing References",
    "Verified Clinical Case Studies",
    "Chidi Catherine Obi-Hezekiah",
  ],
  alternates: {
    canonical: "/artifacts",
  },
  openGraph: {
    title: "Curriculum Vitae, Clinical Presentations & References | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "A comprehensive professional portfolio record compiling verified clinical presentations, curriculum vitae, and clinical references.",
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
    title: "Curriculum Vitae, Clinical Presentations & References | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "A comprehensive professional portfolio record compiling verified clinical presentations, curriculum vitae, and clinical references.",
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
