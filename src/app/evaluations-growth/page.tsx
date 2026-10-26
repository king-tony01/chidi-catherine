import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Sparkles, Target, Rocket } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Clinical Evaluations & Reflective Growth",
  description:
    "Reflective engagement with clinical preceptor feedback from Mackenzie Health Hospital (3 Aqua) and Brampton Civic Hospital, clinical evaluation excerpts, strengths, areas for development, and continuous improvement action plans.",
  keywords: [
    "Clinical Evaluations",
    "Preceptor Feedback",
    "Mackenzie Health 3 Aqua",
    "Brampton Civic Hospital",
    "CNO Reflective Practice",
    "Nursing Strengths and Areas of Growth",
    "Accountability and Self-Regulation",
    "Chidi Catherine Obi-Hezekiah",
  ],
  alternates: {
    canonical: "/evaluations-growth",
  },
  openGraph: {
    title: "Clinical Evaluations & Reflective Growth | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "Analytical engagement with faculty and preceptor evaluations, demonstrating accountability, self-regulation, and continuous clinical improvement aligned with CNO standards.",
    url: "/evaluations-growth",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Clinical Evaluations & Reflective Growth — Chidi Catherine Obi-Hezekiah, RPN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Evaluations & Reflective Growth | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "Analytical engagement with faculty and preceptor evaluations, demonstrating accountability and continuous clinical improvement.",
    images: ["/images/og-banner.png"],
  },
};

export default function EvaluationsGrowthPage() {
  return (
    <>
      <PageHeader
        title="Clinical Evaluations & Professional Growth"
        subtitle="Analytical engagement with faculty and preceptor evaluations, demonstrating accountability, self-regulation, and continuous clinical improvement aligned with CNO standards."
        badgeText="Section 3 • Reflective Practice"
      />

      <div className={`container ${styles.container}`}>
        {/* =================================================================
            1. ENGAGEMENT WITH CLINICAL EVALUATIONS (Overview Frame)
            ================================================================= */}
        <section className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div>
                <div className="sectionEyebrow">Section 3 • Accountability &amp; Self-Regulation</div>
                <h2 className={styles.sectionTitle}>Engagement with Clinical Evaluations</h2>
                <p className={styles.sectionLead}>
                  Reflective practice is essential for professional nurses to bridge academic knowledge, clinical feedback, and evolving bedside competence.
                </p>
              </div>
            </div>

            <div className={styles.frameBody}>
              <div className={styles.prose}>
                <p>
                  In accordance with the College of Nurses of Ontario (CNO) Quality Assurance requirements and reflective practice standards, continuous self-assessment and openness to clinical evaluation are vital to delivering safe, ethical, and high-quality nursing care. Constructive feedback from clinical instructors, preceptors, and interprofessional colleagues provides objective insight into my clinical judgment, time management, and therapeutic communication skills.
                </p>
                <p>
                  Rather than viewing evaluation as an isolated summative endpoint, I utilize feedback as a formative compass that guides ongoing professional growth. The excerpts below represent meaningful evaluations from my acute medical and psychiatric nursing practicums, followed by an in-depth reflective analysis of my professional strengths, identified areas for development, and actionable steps taken to support my transition into autonomous practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. PRECEPTOR EXCERPTS (Stroke-Divided Stack)
            ================================================================= */}
        <section className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div>
                <div className="sectionEyebrow">Faculty &amp; Preceptor Evaluations</div>
                <h2 className={styles.sectionTitle}>Practicum Performance Excerpts</h2>
                <p className={styles.sectionLead}>
                  Direct evaluative feedback from clinical placements demonstrating clinical judgment, safety, and therapeutic rapport.
                </p>
              </div>
            </div>

            {/* Direct Stroke-Divided Excerpts Stack */}
            <div className={styles.feedbackStack}>
              {/* Evaluation Excerpt 1: Mackenzie Health */}
              <div className={styles.feedbackCell}>
                <div className={styles.feedbackHeader}>
                  <div className={styles.evaluatorInfo}>
                    <div className={styles.evaluatorName}>Clinical Instructor Mid-Term Evaluation</div>
                    <div className={styles.evaluatorTitle}>
                      BSN Practicum: Complex Medical-Surgical &amp; Stroke &bull; 3 Aqua (3C), Mackenzie Health Hospital
                    </div>
                  </div>
                  <span className="specTag">GRADE: EXCEEDS EXPECTATIONS</span>
                </div>
                <blockquote className={styles.evalQuote}>
                  &ldquo;Chidi demonstrates an exemplary work ethic, remarkable compassion, and strong professional accountability on 3 Aqua. Her meticulous adherence to aseptic technique during indwelling Foley catheter maintenance, careful monitoring of enteral G-tube feeding, and dedication to fall prevention protocols have been outstanding. When caring for a Korean-speaking patient, she showed exceptional cultural sensitivity, recognizing the importance of family involvement and coordinating professional medical interpreter services seamlessly. She actively solicits feedback after shifts and applies suggestions immediately to her practice.&rdquo;
                </blockquote>
                <div className={styles.evalContext}>
                  Focus Area: Enteral G-Tube Care, Aseptic Catheterization, Cultural Humility &amp; Falls Mitigation
                </div>
              </div>

              {/* Evaluation Excerpt 2: Brampton Civic Hospital */}
              <div className={styles.feedbackCell}>
                <div className={styles.feedbackHeader}>
                  <div className={styles.evaluatorInfo}>
                    <div className={styles.evaluatorName}>Preceptor Final Clinical Assessment</div>
                    <div className={styles.evaluatorTitle}>
                      Adult Inpatient Practicum: Acute &amp; Chronic Medicine &bull; 4th Floor General Medicine, Brampton Civic Hospital
                    </div>
                  </div>
                  <span className="specTag">GRADE: EXCEEDS EXPECTATIONS</span>
                </div>
                <blockquote className={styles.evalQuote}>
                  &ldquo;Chidi has shown tremendous clinical competence on 4th Floor General Medicine. Her vital sign monitoring and physical assessments are thorough, and she communicates changes in patient status promptly during interprofessional rounds. Her previous 4+ years of practical nursing experience and educator background shine through her patient teaching and empathetic family communication. As she continues developing toward full RN scope, Chidi is encouraged to continue building confidence in independent clinical prioritization and rapid escalation.&rdquo;
                </blockquote>
                <div className={styles.evalContext}>
                  Focus Area: Multi-Morbid Adult Medicine, Safe Medication Administration &amp; Interprofessional Rounds
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. SELF-REGULATION PILLARS & ACTION PLAN (Stroke-Divided 3-Column)
            ================================================================= */}
        <section className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div>
                <div className="sectionEyebrow">Self-Regulation Pillars &amp; Action Plan</div>
                <h2 className={styles.sectionTitle}>Reflective Synthesis &amp; Continuous Growth</h2>
                <p className={styles.sectionLead}>
                  Analyzing strengths, identifying developmental targets, and establishing structured learning interventions.
                </p>
              </div>
            </div>

            {/* Direct 3-Column Stroke-Divided Grid */}
            <div className={styles.strokeGrid3}>
              {/* Strengths */}
              <div className={styles.pillarCell}>
                <div className={styles.growthIcon}>
                  <Sparkles size={22} style={{ color: "var(--accent-text)" }} />
                </div>
                <div className="monoLabel" style={{ marginBottom: "0.25rem" }}>Core Strengths</div>
                <h3 className={styles.growthTitle}>Professional Strengths</h3>
                <ul>
                  <li>
                    <strong>Comprehensive Assessment &amp; Vitals:</strong> Strong physical assessment skills, q4h vital-sign monitoring, and early recognition of subtle physiological trends indicating clinical decompensation.
                  </li>
                  <li>
                    <strong>Acute Procedural Competence:</strong> Extensive practical proficiency in safe medication administration, IV therapy surveillance, sterile wound care, indwelling catheterization, tracheostomy care, suctioning, and enteral G-tube feeding.
                  </li>
                  <li>
                    <strong>Cultural Humility &amp; Relational Care:</strong> Proven ability to deliver culturally sensitive, patient-centred care, recognizing diverse values and effectively utilizing professional medical interpreter services.
                  </li>
                </ul>
              </div>

              {/* Areas for Development */}
              <div className={styles.pillarCell}>
                <div className={styles.growthIcon}>
                  <Target size={22} style={{ color: "var(--accent-text)" }} />
                </div>
                <div className="monoLabel" style={{ marginBottom: "0.25rem" }}>Growth Target</div>
                <h3 className={styles.growthTitle}>Areas for Development</h3>
                <ul>
                  <li>
                    <strong>Independent Focused Assessment:</strong> Strengthening the ability to rapidly complete focused assessments and independently identify priority nursing concerns across high-acuity adult patients.
                  </li>
                  <li>
                    <strong>Advanced EHR Fluency (Epic):</strong> Continuing to build speed, efficiency, and confidence with Epic documentation at Mackenzie Health, expanding upon established proficiency in Meditech and PointClickCare.
                  </li>
                  <li>
                    <strong>Infection Control &amp; Falls Mitigation:</strong> Further developing advanced clinical mastery in infection prevention and control (IPAC), falls risk prevention, and pressure injury mitigation in frail older adults with limited mobility.
                  </li>
                </ul>
              </div>

              {/* Action Plan */}
              <div className={styles.pillarCell}>
                <div className={styles.growthIcon}>
                  <Rocket size={22} style={{ color: "var(--accent-text)" }} />
                </div>
                <div className="monoLabel" style={{ marginBottom: "0.25rem" }}>Intervention Roadmap</div>
                <h3 className={styles.growthTitle}>Proactive Action Plan</h3>
                <ul>
                  <li>
                    <strong>Pre-Shift Diagnostic Review:</strong> Consistently reviewing patient diagnoses, lab values, and medications prior to each shift to anticipate potential complications and frame priority nursing concerns.
                  </li>
                  <li>
                    <strong>Structured Clinical Debriefing:</strong> Actively soliciting post-care feedback from clinical instructors and primary nurses after executing complex bedside procedures.
                  </li>
                  <li>
                    <strong>Dedicated EHR Practice:</strong> Practicing documentation workflows and order verification in Epic consistently during each clinical shift to optimize documentation accuracy and efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
