import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Competencies & CNO Standards",
  description:
    "Comprehensive inventory of clinical psychomotor skills, medication administration safety, CNO Mental Health Practice Standard integration, and clinical evidence mapped to Entry-to-Practice benchmarks.",
  keywords: [
    "Nursing Competencies",
    "CNO Entry to Practice",
    "Clinical Skills Tracking",
    "CNO Mental Health Standard",
    "Medication Administration Rights",
    "Head to Toe Assessment",
    "Aseptic Technique",
    "Chidi Catherine Obi-Hezekiah",
  ],
  alternates: {
    canonical: "/competencies-standards",
  },
  openGraph: {
    title: "Clinical Competencies & CNO Standards | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "Comprehensive inventory of clinical psychomotor skills, CNO Mental Health Practice Standard integration, and verified clinical benchmarks.",
    url: "/competencies-standards",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Clinical Competencies & CNO Standards — Chidi Catherine Obi-Hezekiah, RPN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Competencies & CNO Standards | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "Comprehensive inventory of clinical psychomotor skills, CNO Mental Health Practice Standard integration, and verified clinical benchmarks.",
    images: ["/images/og-banner.png"],
  },
};

export default function CompetenciesStandardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
