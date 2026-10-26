import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { nurseProfile } from "@/data/portfolioData";
import { Lightbulb, Compass, Award } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nursing Philosophy & Professional Identity",
  description:
    "Core personal nursing philosophy, Beliefs, Assumptions, and Values (BAVs), historical journey from educator to registered practical nurse, and nursing metaparadigms aligned with CNO standards.",
  keywords: [
    "Nursing Philosophy",
    "Beliefs Assumptions Values",
    "BAVs Nursing",
    "Nursing Metaparadigms",
    "Person Health Environment Nursing",
    "Chidi Catherine Obi-Hezekiah",
    "CNO Professional Standards",
    "Reflective Nursing Practice",
  ],
  alternates: {
    canonical: "/philosophy",
  },
  openGraph: {
    title: "Nursing Philosophy & Professional Identity | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "Core personal nursing philosophy, Beliefs, Assumptions, and Values (BAVs), pedagogical transition, and metaparadigms aligned with CNO practice standards.",
    url: "/philosophy",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Nursing Philosophy — Chidi Catherine Obi-Hezekiah, RPN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nursing Philosophy & Professional Identity | Chidi Catherine Obi-Hezekiah, RPN",
    description:
      "Core personal nursing philosophy, Beliefs, Assumptions, and Values (BAVs), pedagogical transition, and metaparadigms.",
    images: ["/images/og-banner.png"],
  },
};

export default function PhilosophyPage() {
  return (
    <>
      <PageHeader
        title="Nursing Philosophy & Professional Identity"
        subtitle="A foundational articulation of my core nursing creed, beliefs, assumptions, values (BAVs), pedagogical transition, and metaparadigms aligned with CNO standards."
        badgeText="Section 1 • Foundations &amp; Metaparadigms"
      />

      <div className={`container ${styles.pageContainer}`}>
        {/* Quick Nav Anchor Bar */}
        <nav className={styles.anchorBar} aria-label="Philosophy shortcuts">
          <span className={styles.anchorLabel}>Jump to:</span>
          <a href="#core-philosophy" className={styles.anchorLink}>Core Philosophy</a>
          <a href="#bavs" className={styles.anchorLink}>Beliefs, Assumptions &amp; Values</a>
          <a href="#personal-history" className={styles.anchorLink}>Personal History &amp; Evolution</a>
          <a href="#metaparadigms" className={styles.anchorLink}>Metaparadigms of Nursing</a>
          <a href="#future-practice" className={styles.anchorLink}>Philosophy &amp; Future Practice</a>
        </nav>

        {/* =================================================================
            1. Core Nursing Philosophy
            ================================================================= */}
        <section id="core-philosophy" className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div className="sectionEyebrow">Foundational Creed</div>
              <h2 className={styles.sectionTitle}>My Nursing Philosophy</h2>
              <p className={styles.sectionLead}>
                Nursing is defined by the sacred synergy between empirical science and heartfelt human service.
              </p>
            </div>

            <div className={styles.creedBox}>
              <blockquote className={styles.creedText}>
                &ldquo;I believe nursing is both a science and an act of service. I am committed to turning my education and clinical experiences into safe, patient-centred care, to treating each person with respect, empathy, and dignity, regardless of their background, diagnosis, or circumstances. My clinical experiences in acute care have strengthened this belief and continue to shape my practice, and to communicating clearly so that patients and their families feel supported and informed.&rdquo;
              </blockquote>
              <div className={styles.creedAuthor}>— {nurseProfile.name}, RPN</div>
            </div>

            <div className={styles.frameBody}>
              <div className={styles.prose}>
                <p>
                  In my practice, nursing is never merely a checklist of technical interventions; it is a holistic discipline that honours the vulnerability of the human experience. When individuals encounter the healthcare system, they often arrive in states of physical pain, emotional uncertainty, or social distress. As nurses, we enter these intimate spaces with both the clinical competence to safeguard physiological health and the compassionate presence to provide comfort and hope.
                </p>
                <p>
                  Having practiced as a Registered Practical Nurse while progressing through my Honours Bachelor of Science in Nursing degree at Seneca Polytechnic, I recognize that clinical excellence cannot be separated from ethical reflection. Safe care requires rigorous knowledge of pathophysiology, pharmacology, and clinical judgment—yet healing requires listening to the patient&apos;s story, validating their autonomy, and advocating tirelessly on their behalf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. Beliefs, Assumptions, and Values (BAVs)
            ================================================================= */}
        <section id="bavs" className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div className="sectionEyebrow">Reflective Framework</div>
              <h2 className={styles.sectionTitle}>Beliefs, Assumptions &amp; Values (BAVs)</h2>
              <p className={styles.sectionLead}>
                Examining the internal lenses through which I perceive patient care, therapeutic boundaries, and professional accountability.
              </p>
            </div>

            <div className={styles.leadProse}>
              Self-awareness is the cornerstone of safe, reflective nursing practice. Aligned with the College of Nurses of Ontario (CNO) standards, examining my Beliefs, Assumptions, and Values (BAVs) allows me to recognize how my lived experiences influence my clinical judgment and interactions with patients, families, and multidisciplinary teams.
            </div>

            {/* Direct 3-Column Stroke-Divided Grid */}
            <div className={styles.strokeGrid3}>
              <div className={styles.gridCell}>
                <div className={styles.cellIcon}>
                  <Lightbulb size={24} />
                </div>
                <div className="monoLabel" style={{ marginBottom: "0.25rem" }}>Foundational Principle</div>
                <h3 className={styles.cellTitle}>Core Beliefs</h3>
                <p>
                  I believe health is a dynamic, multidimensional continuum encompassing physical, emotional, spiritual, and social well-being. Every person holds intrinsic value and deserves holistic care delivered without bias or judgment.
                </p>
              </div>

              <div className={styles.gridCell}>
                <div className={styles.cellIcon}>
                  <Compass size={24} />
                </div>
                <div className="monoLabel" style={{ marginBottom: "0.25rem" }}>Critical Reflection</div>
                <h3 className={styles.cellTitle}>Challenging Assumptions</h3>
                <p>
                  I assume patients and families possess inherent strengths and know their own experiences best. I intentionally challenge clinical biases, recognizing that cultural narratives and social determinants deeply shape health literacy and patient compliance.
                </p>
              </div>

              <div className={styles.gridCell}>
                <div className={styles.cellIcon}>
                  <Award size={24} />
                </div>
                <div className="monoLabel" style={{ marginBottom: "0.25rem" }}>Guiding Compass</div>
                <h3 className={styles.cellTitle}>Professional Values</h3>
                <p>
                  I value integrity, patient advocacy, accountability, and cultural safety. I hold myself to rigorous clinical standards, ensuring that patient autonomy and dignified consent remain the driving force of every intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. Personal History & Evolution into Nursing
            ================================================================= */}
        <section id="personal-history" className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div className="sectionEyebrow">Narrative Trajectory</div>
              <h2 className={styles.sectionTitle}>Personal History &amp; Evolution into Nursing</h2>
              <p className={styles.sectionLead}>
                How a career as an educator in Nigeria evolved into acute frontline nursing in Ontario, Canada.
              </p>
            </div>

            <div className={styles.leadProse}>
              My journey into nursing is rooted in a lifelong passion for human development, education, and community advocacy. Born and raised in Nigeria, I began my professional life as a dedicated schoolteacher holding a Bachelor&apos;s degree in Education. This formative pedagogical background became the bedrock of my interpersonal communication, teaching me how to translate complex concepts, listen actively, and build trust with diverse communities.
            </div>

            {/* Direct 3-Column Stroke-Divided Grid */}
            <div className={styles.strokeGrid3}>
              <div className={styles.gridCell}>
                <span className={styles.stepNumber}>PHASE 01 • WEST AFRICA</span>
                <h3 className={styles.cellTitle}>Pedagogical Foundations</h3>
                <p>
                  Taught and mentored students in Nigeria, mastering empathetic communication, group dynamics, conflict de-escalation, and cross-cultural patience—skills that directly elevate patient education at the hospital bedside today.
                </p>
              </div>

              <div className={styles.gridCell}>
                <span className={styles.stepNumber}>PHASE 02 • CANADA</span>
                <h3 className={styles.cellTitle}>Practical Nursing Licensure</h3>
                <p>
                  Immigrated to Canada with an unwavering calling to healthcare. Completed my Practical Nursing education, achieved RPN licensure with the CNO, and entered frontline practice across acute medical-surgical and rehabilitation environments.
                </p>
              </div>

              <div className={styles.gridCell}>
                <span className={styles.stepNumber}>PHASE 03 • SENECA POLYTECHNIC</span>
                <h3 className={styles.cellTitle}>Honours BSN &amp; Future RN</h3>
                <p>
                  Currently completing Year 2 (Semester 6 checkpoint, BSN620) of the Honours BSN program, consolidating advanced health assessment, trauma-informed psychiatric care, research methodology, and leadership toward 2027 RN licensure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            4. Metaparadigms of Nursing
            ================================================================= */}
        <section id="metaparadigms" className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div className="sectionEyebrow">Theoretical Foundations</div>
              <h2 className={styles.sectionTitle}>The Four Metaparadigms of Nursing</h2>
              <p className={styles.sectionLead}>
                Synthesizing Florence Nightingale, Jean Watson, and modern Ontario nursing frameworks through my personal clinical perspective.
              </p>
            </div>

            {/* Direct 2x2 Stroke-Divided Grid */}
            <div className={styles.paradigmGrid}>
              <div className={styles.paradigmCell}>
                <div className={styles.paradigmHeader}>
                  <h3 className={styles.paradigmTitle}>Person</h3>
                  <span className="specTag">METAPARADIGM I</span>
                </div>
                <p>
                  The person is a whole, multidimensional being possessing mind, body, spirit, and culture. Rather than viewing a client as a room number or medical diagnosis, I perceive them as an autonomous partner who brings unique lived wisdom, emotional history, and intrinsic dignity to their care plan.
                </p>
              </div>

              <div className={styles.paradigmCell}>
                <div className={styles.paradigmHeader}>
                  <h3 className={styles.paradigmTitle}>Environment</h3>
                  <span className="specTag">METAPARADIGM II</span>
                </div>
                <p>
                  The environment comprises internal and external factors, including social determinants of health, family support, physical safety, cultural community, and hospital ambiance. The nurse acts as an active guardian, modifying environmental stressors to foster healing, safety, and comfort.
                </p>
              </div>

              <div className={styles.paradigmCell}>
                <div className={styles.paradigmHeader}>
                  <h3 className={styles.paradigmTitle}>Health</h3>
                  <span className="specTag">METAPARADIGM III</span>
                </div>
                <p>
                  Health is not merely the absence of disease, but a dynamic, self-defined state of physical, emotional, and social well-being. Even in terminal or palliative states, health encompasses achieving peace, comfort, and dignified closure aligned with personal values.
                </p>
              </div>

              <div className={styles.paradigmCell}>
                <div className={styles.paradigmHeader}>
                  <h3 className={styles.paradigmTitle}>Nursing</h3>
                  <span className="specTag">METAPARADIGM IV</span>
                </div>
                <p>
                  Nursing is the deliberate, compassionate fusion of evidence-based scientific intervention and caring art. It is the skilled presence that bridges clinical assessment, therapeutic de-escalation, patient advocacy, and interprofessional synergy to protect life and restore dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            5. Philosophy & Future Practice
            ================================================================= */}
        <section id="future-practice" className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div className="sectionEyebrow">Looking Forward</div>
              <h2 className={styles.sectionTitle}>Philosophy &amp; Future Practice</h2>
              <p className={styles.sectionLead}>
                How these core principles anchor my transition toward upper-level consolidation and licensed Registered Nurse practice.
              </p>
            </div>

            <div className={styles.frameBody}>
              <div className={styles.prose}>
                <p>
                  As I look ahead to my final consolidation and transition to practice as a Registered Nurse, this philosophy serves as an enduring foundation. In high-acuity healthcare environments characterized by rapid decision-making and clinical complexity, returning to the fundamentals of compassion, cultural safety, and empirical rigour ensures that my nursing remains consistently patient-centred.
                </p>
                <p>
                  My commitment is to be a nurse who leads with quiet confidence, listens with genuine curiosity, advocates courageously for the vulnerable, and continuously seeks clinical excellence through reflective practice and lifelong learning.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
