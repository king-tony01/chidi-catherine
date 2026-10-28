import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { nurseProfile, academicHonourAward } from "@/data/portfolioData";
import {
  Award,
  CheckCircle2,
  FileCheck2,
  Sparkles,
  GraduationCap,
  Building2,
  Calendar,
  ShieldCheck,
  ArrowUpRight,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Awards & Honours | Chidi Catherine Obi-Hezekiah, RPN",
  description:
    "Official institutional academic honours and awards conferred to Chidi Catherine Obi-Hezekiah, including the Seneca Polytechnic President's Honour List for Winter 2026.",
  alternates: {
    canonical: "https://chidi-catherine.vercel.app/awards",
  },
  openGraph: {
    title: "Awards & Honours | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "Official institutional academic honours conferred by Seneca Polytechnic President David Agnew in recognition of academic excellence in the Honours Bachelor of Science in Nursing program.",
    url: "https://chidi-catherine.vercel.app/awards",
    siteName: "Chidi Catherine Obi-Hezekiah Nursing Portfolio",
    images: [
      {
        url: "https://chidi-catherine.vercel.app/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Awards & Honours - Chidi Catherine Obi-Hezekiah",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards & Honours | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "Official institutional academic distinction awarded by Seneca Polytechnic President David Agnew for the Winter 2026 academic term.",
    images: ["https://chidi-catherine.vercel.app/images/og-banner.png"],
  },
};

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        title="Academic Honours &amp; Awards"
        subtitle="Official institutional recognition of superior academic scholarship, disciplined clinical inquiry, and nursing excellence conferred by Seneca Polytechnic."
        badgeText="Institutional Distinction"
      />

      <div className={`container ${styles.container}`}>
        {/* =================================================================
            1. STANDALONE PRESIDENT'S HONOUR LIST SHOWCASE
            ================================================================= */}
        <section className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            {/* Frame Top Header */}
            <div className={styles.frameHeader}>
              <div>
                <div className="sectionEyebrow">INSTITUTIONAL MERIT</div>
                <h2 className={styles.sectionTitle}>Official Academic Honours</h2>
                <p className={styles.sectionLead}>
                  Formal recognition conferred by university leadership honoring sustained scholarship, evidence-based inquiry, and clinical excellence within the Honours Bachelor of Science in Nursing program.
                </p>
              </div>

              <div className="no-print">
                <span className="specTag" style={{ borderColor: "var(--accent-border)", color: "var(--accent-text)" }}>
                  Verified Academic Record
                </span>
              </div>
            </div>

            {/* Presidential Award Hero Block */}
            <div className={styles.awardMain}>
              <div className={styles.awardHeaderRow}>
                <div>
                  <div className={styles.awardBadgeStrip}>
                    <span className="monoLabel" style={{ color: "var(--accent-text)" }}>
                      PRESIDENTIAL RECOGNITION
                    </span>
                    <span style={{ opacity: 0.3 }}>/</span>
                    <span className="specTag">Term: Winter 2026</span>
                    <span style={{ opacity: 0.3 }}>/</span>
                    <span className="specTag">GPA Distinction &ge; 3.8</span>
                  </div>

                  <h3 className={styles.awardTitle}>{academicHonourAward.award}</h3>
                  <div className={styles.awardSubtitle}>
                    {academicHonourAward.institution} &bull; {academicHonourAward.program}
                  </div>
                </div>

                <div className={styles.awardIssuerTag}>
                  <Building2 size={16} color="var(--accent-text)" />
                  <span>Conferred by: <strong>{academicHonourAward.issuer}</strong></span>
                </div>
              </div>

              <p className={styles.awardNarrative}>
                The <strong>President&apos;s Honour List</strong> is Seneca Polytechnic&apos;s premier academic recognition, conferred upon full-time students who attain a Grade Point Average of 3.8 or higher. This distinction acknowledges outstanding theoretical mastery, analytical rigor, and sustained dedication to nursing science, achieved while concurrently balancing intensive acute inpatient clinical rotations and professional frontline practice as a licensed Registered Practical Nurse (RPN).
              </p>

              {/* Spec Strip: Touching Hairline Stroke Cell Grid */}
              <div className={styles.specStrip}>
                <div className={styles.specCell}>
                  <span className={styles.specLabel}>AWARD CONFERRED</span>
                  <span className={styles.specValue}>President&apos;s Honour List</span>
                  <span className={styles.specDetail}>Highest Academic Tier</span>
                </div>

                <div className={styles.specCell}>
                  <span className={styles.specLabel}>ACADEMIC TERM</span>
                  <span className={styles.specValue}>Winter 2026</span>
                  <span className={styles.specDetail}>Seneca Polytechnic</span>
                </div>

                <div className={styles.specCell}>
                  <span className={styles.specLabel}>DEGREE PROGRAM</span>
                  <span className={styles.specValue}>Honours BSN</span>
                  <span className={styles.specDetail}>School of Nursing</span>
                </div>

                <div className={styles.specCell}>
                  <span className={styles.specLabel}>CONFERRING AUTHORITY</span>
                  <span className={styles.specValue}>David Agnew</span>
                  <span className={styles.specDetail}>President, Seneca Polytechnic</span>
                </div>
              </div>
            </div>

            {/* Two-Column Grid: Distinction Criteria & Scholar Profile */}
            <div className={styles.pillarsGrid}>
              {/* Column 1: Criteria & Rigour */}
              <div className={styles.pillarCol}>
                <div className={styles.pillarHeader}>
                  <div className={styles.pillarIconBox}>
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className={styles.pillarTitle}>Academic Distinction Criteria</h4>
                    <span className="monoLabel">STANDARDS OF EXCELLENCE</span>
                  </div>
                </div>

                <p className={styles.pillarLead}>
                  Admission to the Seneca President&apos;s Honour List represents exemplary performance across core nursing competencies, advanced pathophysiology, pharmacology, and clinical judgment:
                </p>

                <ul className={styles.criteriaList}>
                  <li className={styles.criteriaItem}>
                    <CheckCircle2 size={16} className={styles.criteriaIcon} />
                    <div>
                      <strong>Superior GPA Threshold (&ge;3.8):</strong> Maintained top-tier academic standing across all theoretical, scientific, and empirical nursing coursework.
                    </div>
                  </li>

                  <li className={styles.criteriaItem}>
                    <CheckCircle2 size={16} className={styles.criteriaIcon} />
                    <div>
                      <strong>Evidence-Based Inquiry:</strong> Demonstrated advanced scholarly synthesis in acute disease management, case presentation development, and pharmacological appraisal.
                    </div>
                  </li>

                  <li className={styles.criteriaItem}>
                    <CheckCircle2 size={16} className={styles.criteriaIcon} />
                    <div>
                      <strong>Full-Time Academic Load:</strong> Completed full-term Honours BSN credit sequencing without compromise to clinical practice or scholarly output.
                    </div>
                  </li>

                  <li className={styles.criteriaItem}>
                    <CheckCircle2 size={16} className={styles.criteriaIcon} />
                    <div>
                      <strong>CNO Ethical Integration:</strong> Exemplified professional standards of accountability, integrity, and ethical conduct within academic and peer environments.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Column 2: Dual Practice Synergy */}
              <div className={styles.pillarCol}>
                <div className={styles.pillarHeader}>
                  <div className={styles.pillarIconBox}>
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className={styles.pillarTitle}>Clinical &amp; Scholarly Synergy</h4>
                    <span className="monoLabel">THEORETICAL RIGOUR IN ACTION</span>
                  </div>
                </div>

                <p className={styles.pillarLead}>
                  Achieving presidential honours while actively working as a licensed frontline nurse highlights a distinctive commitment to translational nursing excellence:
                </p>

                <ul className={styles.criteriaList}>
                  {academicHonourAward.highlights.map((highlight, idx) => (
                    <li key={idx} className={styles.criteriaItem}>
                      <ChevronRight size={16} className={styles.criteriaIcon} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-hairline)" }}>
                  <div className="monoLabel" style={{ marginBottom: "0.5rem" }}>RELATED ACADEMIC EVIDENCE</div>
                  <Link
                    href="/artifacts"
                    className="btn btn-secondary"
                    style={{ width: "100%", justifyContent: "space-between", padding: "0.6rem 1rem", fontSize: "0.85rem" }}
                  >
                    <span>View Clinical Case Study Presentations</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Institutional Verification Footer */}
            <div className={styles.verificationFooter}>
              <div className={styles.verificationNotice}>
                <ShieldCheck size={20} color="var(--accent-text)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                <div className={styles.verificationText}>
                  <strong>Official Institutional Record:</strong> Academic standings, term GPA, and President&apos;s Honour List status are maintained on file with the <strong>Seneca Polytechnic Office of the Registrar</strong>. Official transcripts are available upon authorized institutional or clinical employer verification.
                </div>
              </div>

              <div className={styles.verificationActions}>
                <Link href="/artifacts" className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.82rem" }}>
                  <BookOpen size={14} />
                  <span>Curriculum Vitae</span>
                </Link>

                <Link href="/forward-planning" className="btn btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.82rem" }}>
                  <span>Forward Planning &amp; Goals</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
