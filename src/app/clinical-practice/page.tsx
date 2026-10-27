import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Clinical Practice Overview & Settings",
  description:
    "Comprehensive overview of clinical practice settings, lifespan populations, practicum progression at Mackenzie Health Hospital (3 Aqua) and Brampton Civic Hospital, and 4+ years licensed RPN experience aligned with CNO standards.",
  keywords: [
    "Clinical Practice Nursing",
    "Mackenzie Health Hospital",
    "3 Aqua Med-Surg",
    "Brampton Civic Hospital",
    "General Medicine Practicum",
    "RPN Clinical Experience",
    "Honours BSN Practicum",
    "Seneca Polytechnic Nursing",
    "Chidi Catherine Obi-Hezekiah",
  ],
  alternates: {
    canonical: "/clinical-practice",
  },
  openGraph: {
    title: "Clinical Practice Overview & Settings | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "Synthesized, evidence-based record of clinical exposure, lifespan populations, acute med-surg progression at Mackenzie Health Hospital and Brampton Civic Hospital.",
    url: "/clinical-practice",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Clinical Practice Settings — Chidi Catherine Obi-Hezekiah, RPN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Practice Overview & Settings | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "Synthesized, evidence-based record of clinical exposure, lifespan populations, acute med-surg progression at Mackenzie Health and Brampton Civic Hospital.",
    images: ["/images/og-banner.png"],
  },
};

export default function ClinicalPracticePage() {
  return (
    <>
      <PageHeader
        title="Clinical Practice Overview & Settings"
        subtitle="A synthesized, evidence-based record of clinical exposure, lifespan populations, increasing responsibility, and reflective development across Ontario healthcare environments."
        badgeText="Clinical Settings &amp; Patient Populations"
      />

      <div className={`container ${styles.container}`}>
        {/* Sticky Anchor Bar */}
        <nav className={styles.anchorBar} aria-label="Clinical shortcuts">
          <span className={styles.anchorLabel}>Jump to:</span>
          <a href="#overview" className={styles.anchorLink}>Clinical Overview &amp; Progression</a>
          <a href="#populations" className={styles.anchorLink}>Practice Settings &amp; Populations</a>
        </nav>

        {/* =================================================================
            1. Synthesized Clinical Practice Overview
            ================================================================= */}
        <section id="overview" className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div className="sectionEyebrow">Clinical Progression &amp; Scope</div>
              <h2 className={styles.sectionTitle}>Clinical Practice Overview &amp; Progression</h2>
              <p className={styles.sectionLead}>
                Demonstrating intentional progression in clinical responsibility, complexity, and role development from Registered Practical Nurse to Registered Nurse scope.
              </p>
            </div>

            <div className={styles.frameBody}>
              <div className={styles.prose}>
                <p>
                  My clinical trajectory represents a continuous, reflective transition from providing direct bedside care as a licensed Registered Practical Nurse (RPN) toward mastering the advanced assessment, complex critical thinking, and leadership required of an Honours Bachelor of Science in Nursing graduate. Across inpatient acute medicine, rehabilitation, community outreach, and mental health settings, my clinical learning has evolved from procedural task completion to comprehensive clinical judgment, systemic patient advocacy, and interprofessional coordination.
                </p>
                <p>
                  Throughout my clinical rotations, I have cared for client populations across the full continuum of the human lifespan—ranging from pediatric clients experiencing acute illness, to diverse adults managing acute and chronic medical-surgical conditions, to frail elderly individuals in restorative care, and individuals experiencing acute psychiatric and psychosocial crises. Each practice environment has expanded my capacity to anticipate clinical deterioration, prioritize interventions under pressure, and navigate complex ethical decisions.
                </p>
                <p>
                  Three core themes anchor my clinical practice: <strong>patient safety</strong>, achieved through meticulous medication administration, infection prevention, and situational awareness; <strong>therapeutic communication</strong>, grounded in active listening, empathy, and trauma-informed de-escalation; and <strong>interprofessional collaboration</strong>, where transparent dialogue with physicians, clinical preceptors, allied health professionals, and families ensures synchronized, high-quality care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. Practice Settings and Client Population Summary
            ================================================================= */}
        <section id="populations" className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div className="sectionEyebrow">Practice Settings &amp; Clinical Immersion</div>
              <h2 className={styles.sectionTitle}>Practice Settings &amp; Client Population Summary</h2>
              <p className={styles.sectionLead}>
                Detailed narrative reflections across acute hospital placements, complex continuing care, and specialized clinical settings.
              </p>
            </div>

            {/* Direct Stroke-Divided Rotations Stack */}
            <div className={styles.narrativeStack}>
              {/* Rotation 1: Adult Acute General Medicine */}
              <div className={styles.narrativeCell}>
                <div className={styles.narrativeHeader}>
                  <div className={styles.narrativeCourseTitle}>
                    Adult Acute &amp; Chronic General Medicine Practicum
                  </div>
                  <div className={styles.narrativeMeta}>
                    <span className="specTag">Brampton Civic Hospital (William Osler)</span>
                    <span className="specTag">4th Floor General Medicine</span>
                    <span className="specTag">EHR: Meditech</span>
                  </div>
                </div>

                <p className={styles.narrativeText}>
                  During my clinical placement on the 4th-floor General Medicine unit at Brampton Civic Hospital, I cared for adult and geriatric patients presenting with complex acute and multi-morbid chronic conditions. This placement provided valuable immersion in systematic physiological assessments, vital-sign trending, safe medication administration adhering strictly to the 10 Rights, sterile wound care and dressing changes, and interprofessional collaboration. Managing patients with overlapping cardiovascular, respiratory, and metabolic disorders helped me build confidence in organizing care, prioritizing urgent patient needs, and communicating changes in clinical condition to the nursing team. Documenting assessments and interventions in Meditech strengthened my clinical communication and reinforced my accountability in maintaining accurate electronic health records.
                </p>
                <p className={styles.narrativeText}>
                  This clinical immersion significantly elevated my clinical development by transitioning my focus from isolated task execution to holistic patient stabilization. Working with individuals from varied multicultural backgrounds emphasized the vital importance of clear discharge education, family engagement, and culturally respectful dialogue, reinforcing my professional identity as a vigilant and compassionate patient advocate.
                </p>
              </div>

              {/* Rotation 2: Complex Continuing Care & Neurovascular (Mackenzie Health) */}
              <div className={styles.narrativeCell}>
                <div className={styles.narrativeHeader}>
                  <div className={styles.narrativeCourseTitle}>
                    Complex Medical-Surgical &amp; Neurovascular Practicum
                  </div>
                  <div className={styles.narrativeMeta}>
                    <span className="specTag">Mackenzie Health Hospital</span>
                    <span className="specTag">3 Aqua (3C) Complex Inpatient Unit</span>
                    <span className="specTag">EHR: Epic</span>
                  </div>
                </div>

                <p className={styles.narrativeText}>
                  During my clinical placement on 3 Aqua (3C) at Mackenzie Health Hospital, I provide direct bedside care under the guidance of my clinical instructor and primary nurse, caring for patients with complex medical needs including stroke recovery, severe dehydration, dysphagia, falls risk, and limited mobility. I complete vital signs every four hours, perform comprehensive head-to-toe assessments, assist with hygiene and comfort measures, support safe feeding, and monitor strict fluid intake and output. One pivotal clinical experience involved caring for a patient with dysphagia who required enteral nutrition via gastrostomy (G-tube) feeding and had an indwelling Foley catheter. I maintained safe enteral feeding practices, monitored patient tolerance, utilized strict aseptic technique when draining the catheter, measured urine output, and reported findings to the primary nurse, reinforcing my expertise in fluid balance and infection prevention.
                </p>
                <p className={styles.narrativeText}>
                  Furthermore, caring for patients from diverse cultural backgrounds—including a Korean-speaking patient where I recognized the necessity of clear communication, respected family involvement, and utilized professional medical interpreter services—deepened my practice of nonjudgmental, culturally responsive care. Documenting clinical encounters in Epic has advanced my digital health acumen and accuracy in multi-system electronic charting.
                </p>
              </div>

              {/* Rotation 3: Mental Health & Frontline RPN Practice */}
              <div className={styles.narrativeCell}>
                <div className={styles.narrativeHeader}>
                  <div className={styles.narrativeCourseTitle}>
                    Inpatient Psychiatric &amp; Mental Health Nursing Immersion
                  </div>
                  <div className={styles.narrativeMeta}>
                    <span className="specTag">Mental Health Practicum &amp; RPN Practice</span>
                    <span className="specTag">Inpatient &amp; Community Care</span>
                    <span className="specTag">Crisis Prevention &amp; CPI</span>
                  </div>
                </div>

                <p className={styles.narrativeText}>
                  Synthesizing my mental health nursing practicum with more than four years of licensed RPN clinical practice, I have provided care to individuals experiencing acute affective disorders, schizophrenia spectrum illnesses, concurrent substance dependencies, and trauma-induced crises. This practice setting required the rigorous application of mental status examinations, comprehensive suicide and self-harm risk evaluations, trauma-informed care modalities, and safe psychopharmacological administration.
                </p>
                <p className={styles.narrativeText}>
                  Leveraging Crisis Prevention Intervention (CPI) and Gentle Persuasive Approaches (GPA), I have averted behavioral escalations through empathetic presence, active listening, and calm de-escalation without physical or chemical restraints. These experiences affirmed that mental health competence, emotional attunement, and trauma-informed safety are essential foundations that elevate the compassion and efficacy of every nursing interaction across all clinical domains.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
