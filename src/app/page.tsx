import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { nurseProfile } from "@/data/portfolioData";
import styles from "./page.module.css";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  FileText,
  Clock,
  BookOpenCheck,
  ShieldCheck,
  Heart,
  UserCheck,
  Microscope,
  Users,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Rigour. Compassionate Care.",
  description:
    "Electronic Professional Nursing Portfolio of Chidi Catherine Obi-Hezekiah, RPN (CNO licensed since 2021) and Honours BSN Candidate at Seneca Polytechnic (President's Honour List Winter 2026). Specializing in acute med-surg, geriatric rehabilitation, and mental health.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chidi Catherine Obi-Hezekiah, RPN | Clinical Rigour. Compassionate Care.",
    description:
      "Electronic Professional Nursing Portfolio of Chidi Catherine Obi-Hezekiah, RPN (CNO licensed since 2021) and Honours BSN Candidate at Seneca Polytechnic (President's Honour List Winter 2026). Specializing in acute med-surg, geriatric rehabilitation, and mental health.",
    url: "/",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Chidi Catherine Obi-Hezekiah, RPN — Professional Nursing Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chidi Catherine Obi-Hezekiah, RPN | Clinical Rigour. Compassionate Care.",
    description:
      "Electronic Professional Nursing Portfolio of Chidi Catherine Obi-Hezekiah, RPN (CNO licensed since 2021) and Honours BSN Candidate at Seneca Polytechnic.",
    images: ["/images/og-banner.png"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* =================================================================
          HERO SECTION - Technical Medical Precision (System Theme Aware)
          ================================================================= */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Column: Clinical Title, Bio & Actions */}
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                <div className="sectionEyebrow">
                  CNO RPN LICENSED (2021) &bull; SENECA PRESIDENT&apos;S HONOUR LIST &bull; HONOURS BSN &apos;27
                </div>
              </div>

              <h1 className={styles.heroTitle}>
                Clinical Rigour.{" "}
                <span className={styles.heroAccent}>Compassionate Care</span>.
              </h1>

              <p className={styles.heroLead}>
                Welcome. I am <strong>{nurseProfile.name}</strong>, a licensed Registered Practical Nurse (RPN with CNO since 2021) with more than four years of acute care, medical-surgical, mental health, and long-term care experience. Currently completing the Honours Bachelor of Science in Nursing program at Seneca Polytechnic, where I was awarded the <strong>President&apos;s Honour List</strong> for academic excellence. This portfolio establishes my evolving clinical competence, verified artifacts, reflective practice, and commitment to holistic, patient-centred care.
              </p>

              <div className={styles.heroActions}>
                <Link href="/philosophy" className="btn btn-primary">
                  <span>Explore Nursing Philosophy</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/clinical-practice" className="btn btn-secondary">
                  <Activity size={16} />
                  <span>Clinical Placements &amp; Hours</span>
                </Link>
                <Link href="/artifacts" className="btn btn-secondary">
                  <FileText size={16} />
                  <span>Artifacts &amp; Curriculum Vitae</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Precision Clinical Profile Dossier Frame */}
            <div className={styles.profileDossierCol}>
              <div className={styles.profileFrame}>
                {/* Portrait Photo Container */}
                <div className={styles.profileImgWrapper}>
                  <Image
                    src="/images/chidi-catherine-profile.jpg"
                    alt="Chidi Catherine Obi-Hezekiah, RPN — Honours BSN Candidate"
                    width={450}
                    height={540}
                    priority
                    className={styles.profileImg}
                  />
                  <div className={styles.profileWatermark}>
                    <span>CNO REG #2021 &bull; SENECA BSN</span>
                  </div>
                </div>

                {/* Flush Stroke-Divided Meta Grid */}
                <div className={styles.profileMetaGrid}>
                  <div className={styles.profileMetaCell}>
                    <span className={styles.profileMetaLabel}>PRACTICE DESIGNATION</span>
                    <span className={styles.profileMetaValue}>RPN (CNO Lic. 2021)</span>
                  </div>
                  <div className={styles.profileMetaCell}>
                    <span className={styles.profileMetaLabel}>ACADEMIC HONOUR</span>
                    <span className={styles.profileMetaValue}>President&apos;s List &apos;26</span>
                  </div>
                </div>

                {/* Frame Footer */}
                <div className={styles.profileFooter}>
                  <span className={styles.profileFooterLabel}>CURRENT ACUTE ROTATION</span>
                  <span className={styles.profileFooterValue}>
                    Mackenzie Health Hospital &bull; 3 Aqua (3C)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Technical Spec Strip */}
          <div className={styles.specStrip}>
            <div className={styles.specItem}>
              <span className="monoLabel">CNO LICENSURE:</span>
              <strong>RPN (Licensed 2021)</strong>
            </div>
            <span style={{ opacity: 0.2 }}>/</span>
            <div className={styles.specItem}>
              <span className="monoLabel">EXPERIENCE:</span>
              <strong>4+ Yrs Acute &amp; LTC</strong>
            </div>
            <span style={{ opacity: 0.2 }}>/</span>
            <div className={styles.specItem}>
              <span className="monoLabel">ACADEMIC HONOUR:</span>
              <strong>President&apos;s Honour List &apos;26</strong>
            </div>
            <span style={{ opacity: 0.2 }}>/</span>
            <div className={styles.specItem}>
              <span className="monoLabel">CURRENT PLACEMENT:</span>
              <strong>Mackenzie Health (3 Aqua)</strong>
            </div>
            <span style={{ opacity: 0.2 }}>/</span>
            <div className={styles.specItem}>
              <span className="monoLabel">TARGET:</span>
              <strong>RN Licensure &apos;27</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER STROKE */}
      <hr className="sectionDivider" />

      {/* =================================================================
          CLINICAL INFRASTRUCTURE (Stroke-Divided Grid Matching Reference)
          ================================================================= */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.infraFrame}>
            {/* Section Header with Bottom Stroke */}
            <div className={styles.infraHeader}>
              <div className={styles.infraHeaderLeft}>
                <div className="sectionEyebrow">CLINICAL INFRASTRUCTURE</div>
                <h2 className={styles.sectionTitle}>Supervised Practice &amp; Academic Progression</h2>
                <p className={styles.sectionSubtitle}>
                  Evidence-based clinical exposure spanning acute medical-surgical, restorative, and psychiatric inpatient environments.
                </p>
              </div>

              <Link href="/clinical-practice" className={styles.infraHeaderAction}>
                <span>View All Placements (448+ Hours)</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* 3-Column Stroke-Divided Card Grid */}
            <div className={styles.dividerGrid}>
              {/* Card 1: Current Acute Placement - Mackenzie Health */}
              <div className={styles.dividerCard}>
                <div className={styles.cardTopContent}>
                  <div className={styles.cardMetaRow}>
                    <span className={styles.cardMetaCategory}>CURRENT ACUTE PLACEMENT</span>
                    <span className={styles.cardMetaStatus}>MACKENZIE HEALTH</span>
                  </div>

                  <h3 className={styles.cardMainTitle}>Complex Care &amp; Stroke (3 Aqua / 3C)</h3>
                  <p className={styles.cardSubtitle}>
                    Mackenzie Health Hospital &bull; Epic EHR
                  </p>
                  <p className={styles.cardDescription}>
                    Direct patient care under clinical instructor and primary nurse for patients with complex pathologies: dehydration, dysphagia, stroke, falls risk, and limited mobility. Executes q4h vitals, enteral nutrition via Gastrostomy (G-tube), aseptic Foley catheter drainage, and culturally sensitive care with professional interpreter services.
                  </p>

                  <div className={styles.cardSpecsRow}>
                    <div className={styles.specItemCol}>
                      <span className={styles.specColLabel}>CLINICAL INTERVENTIONS</span>
                      <span className={styles.specColValue}>G-Tube &bull; Foley &bull; Dysphagia</span>
                    </div>
                    <div className={styles.specItemCol}>
                      <span className={styles.specColLabel}>HEALTH SYSTEM</span>
                      <span className={styles.specColValue}>Epic Documentation</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardActionRow}>
                  <Link href="/clinical-practice#populations" className={styles.cardActionLink}>
                    <span>Explore Practicum Evidence</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Card 2: Acute General Medicine - Brampton Civic Hospital */}
              <div className={styles.dividerCard}>
                <div className={styles.cardTopContent}>
                  <div className={styles.cardMetaRow}>
                    <span className={styles.cardMetaCategory}>GENERAL MEDICINE PLACEMENT</span>
                    <span className={styles.cardMetaStatus}>BRAMPTON CIVIC</span>
                  </div>

                  <h3 className={styles.cardMainTitle}>Acute &amp; Chronic General Medicine</h3>
                  <p className={styles.cardSubtitle}>
                    Brampton Civic Hospital (William Osler) &bull; Meditech EHR
                  </p>
                  <p className={styles.cardDescription}>
                    Comprehensive inpatient bedside practice caring for adult patients with complex acute and multi-morbid conditions. Strengthened skills in physical assessment, vital sign monitoring, safe medication administration, sterile wound dressing changes, and interprofessional rounds.
                  </p>

                  <div className={styles.cardSpecsRow}>
                    <div className={styles.specItemCol}>
                      <span className={styles.specColLabel}>PRACTICUM UNIT</span>
                      <span className={styles.specColValue}>4th Floor General Medicine</span>
                    </div>
                    <div className={styles.specItemCol}>
                      <span className={styles.specColLabel}>HEALTH SYSTEM</span>
                      <span className={styles.specColValue}>Meditech EHR System</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardActionRow}>
                  <Link href="/clinical-practice#populations" className={styles.cardActionLink}>
                    <span>Inspect Inpatient Evidence</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Card 3: Academic Distinction & Consolidation Roadmap */}
              <div className={styles.dividerCard}>
                <div className={styles.cardTopContent}>
                  <div className={styles.cardMetaRow}>
                    <span className={styles.cardMetaCategory}>ACADEMIC DISTINCTION</span>
                    <span className={styles.cardMetaStatus}>PRESIDENT&apos;S HONOUR LIST</span>
                  </div>

                  <h3 className={styles.cardMainTitle}>President&apos;s Honour List &amp; RN &apos;27</h3>
                  <p className={styles.cardSubtitle}>
                    Seneca Polytechnic &bull; Honours Bachelor of Science in Nursing
                  </p>
                  <p className={styles.cardDescription}>
                    Conferred the official Seneca Polytechnic President&apos;s Honour List (Winter 2026) for superior academic scholarship. Advancing toward final clinical consolidation, Next Generation NCLEX-RN licensing, and independent Registered Nurse practice.
                  </p>

                  <div className={styles.cardSpecsRow}>
                    <div className={styles.specItemCol}>
                      <span className={styles.specColLabel}>AWARD / TERM</span>
                      <span className={styles.specColValue}>President&apos;s List &bull; W26</span>
                    </div>
                    <div className={styles.specItemCol}>
                      <span className={styles.specColLabel}>GOAL CREDENTIAL</span>
                      <span className={styles.specColValue}>Registered Nurse (RN &apos;27)</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardActionRow}>
                  <Link href="/awards" className={styles.cardActionLink}>
                    <span>View Honours &amp; Distinction</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER STROKE */}
      <hr className="sectionDivider" />

      {/* =================================================================
          DEFINING MILESTONES (Stroke-Divided 4-Column Grid)
          ================================================================= */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.infraFrame}>
            <div className={styles.infraHeader}>
              <div className={styles.infraHeaderLeft}>
                <div className="sectionEyebrow">EVOLUTIONARY MILESTONES</div>
                <h2 className={styles.sectionTitle}>My Journey into Nursing</h2>
                <p className={styles.sectionSubtitle}>
                  From educational leadership in West Africa to acute healthcare in Ontario, tracing the foundational experiences shaping my practice.
                </p>
              </div>

              <Link href="/philosophy#personal-history" className={styles.infraHeaderAction}>
                <span>Read Full Personal Evolution</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.milestonesGrid}>
              <div className={styles.milestoneCell}>
                <div>
                  <div className={styles.timelinePhase}>PHASE 01 / CULTURAL ROOTS</div>
                  <h3 className={styles.timelineCardTitle}>Nigeria, West Africa</h3>
                  <p className={styles.timelineCardText}>
                    Raised with deep cultural values of community solidarity, resilience, and service to others. These principles guide my commitment to cultural humility and patient advocacy.
                  </p>
                </div>
                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-hairline)" }}>
                  <span className="specTag">COMMUNITY SOLIDARITY</span>
                </div>
              </div>

              <div className={styles.milestoneCell}>
                <div>
                  <div className={styles.timelinePhase}>PHASE 02 / PEDAGOGY</div>
                  <h3 className={styles.timelineCardTitle}>Schoolteacher &amp; Educator</h3>
                  <p className={styles.timelineCardText}>
                    Years in classroom leadership honed vital clinical communication skills: pedagogical patience, tailored health literacy, active listening, and cross-cultural empathy.
                  </p>
                </div>
                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-hairline)" }}>
                  <span className="specTag">HEALTH LITERACY &amp; EMPATHY</span>
                </div>
              </div>

              <div className={styles.milestoneCell}>
                <div>
                  <div className={styles.timelinePhase}>PHASE 03 / FRONTLINE CNO LICENSURE</div>
                  <h3 className={styles.timelineCardTitle}>RPN Licensure &amp; 4+ Years Practice</h3>
                  <p className={styles.timelineCardText}>
                    Licensed with the College of Nurses of Ontario (CNO) since 2021. Over four years of hands-on nursing practice spanning acute medical-surgical, mental health, long-term care, and retirement home environments.
                  </p>
                </div>
                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-hairline)" }}>
                  <span className="specTag">LICENSED RPN SINCE 2021</span>
                </div>
              </div>

              <div className={styles.milestoneCell}>
                <div>
                  <div className={styles.timelinePhase}>PHASE 04 / ACADEMIC EXCELLENCE</div>
                  <h3 className={styles.timelineCardTitle}>Seneca President&apos;s List &amp; BSN &apos;27</h3>
                  <p className={styles.timelineCardText}>
                    Awarded the Seneca Polytechnic President&apos;s Honour List (Winter 2026). Currently completing acute placement on 3 Aqua at Mackenzie Health while preparing for 2027 RN consolidation and NCLEX-RN licensure.
                  </p>
                </div>
                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-hairline)" }}>
                  <span className="specTag">PRESIDENT&apos;S HONOUR LIST &apos;26</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER STROKE */}
      <hr className="sectionDivider" />

      {/* =================================================================
          MINIMALIST PHILOSOPHY CREED (Stroke-Framed)
          ================================================================= */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.infraFrame}>
            <div className={styles.infraHeader}>
              <div className={styles.infraHeaderLeft}>
                <div className="sectionEyebrow">CORE NURSING PHILOSOPHY</div>
                <h2 className={styles.sectionTitle}>Foundational Creed &amp; Practice Ethics</h2>
                <p className={styles.sectionSubtitle}>
                  The synthesis of empirical science and heartfelt service that guides every patient encounter.
                </p>
              </div>

              <Link href="/philosophy" className={styles.infraHeaderAction}>
                <span>Read Full Philosophy &amp; Metaparadigms</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.creedFrameBody}>
              <blockquote className={styles.creedQuote}>
                &ldquo;I believe nursing is both a science and an act of service. I am committed to turning my education and clinical experiences into safe, patient-centred care, to treating each person with respect, empathy, and dignity, regardless of their background, diagnosis, or circumstances. My clinical experiences in acute care have strengthened this belief and continue to shape my practice, communicating clearly so that patients and their families feel supported and informed.&rdquo;
              </blockquote>
              <div className={styles.creedAuthor}>{nurseProfile.name}, RPN</div>
              <div className={styles.creedRole}>Honours Bachelor of Science in Nursing Candidate &bull; Seneca Polytechnic</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER STROKE */}
      <hr className="sectionDivider" />

      {/* =================================================================
          CORE NURSING VALUES (Stroke-Divided 6-Cell Grid)
          ================================================================= */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.infraFrame}>
            <div className={styles.infraHeader}>
              <div className={styles.infraHeaderLeft}>
                <div className="sectionEyebrow">CNO PRACTICE STANDARDS</div>
                <h2 className={styles.sectionTitle}>Core Nursing Values &amp; Ethical Principles</h2>
                <p className={styles.sectionSubtitle}>
                  Rooted in the College of Nurses of Ontario ethical framework, these core principles anchor every therapeutic interaction.
                </p>
              </div>

              <Link href="/competencies-standards#mental-health-context" className={styles.infraHeaderAction}>
                <span>Inspect CNO Standards Integration</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.strokeGrid6}>
              <div className={styles.strokeCell}>
                <div className={styles.valueTopRow}>
                  <Heart size={18} style={{ color: "var(--accent-text)" }} />
                  <h3 className={styles.valueTitle}>Compassion &amp; Dignity</h3>
                </div>
                <p className={styles.valueDesc}>
                  Treating every client as a whole, valued individual with unwavering empathy, respect, and unconditional regard regardless of diagnosis or circumstance.
                </p>
              </div>

              <div className={styles.strokeCell}>
                <div className={styles.valueTopRow}>
                  <UserCheck size={18} style={{ color: "var(--accent-text)" }} />
                  <h3 className={styles.valueTitle}>Patient-Centred Care</h3>
                </div>
                <p className={styles.valueDesc}>
                  Partnering collaboratively with patients and families to honour their unique autonomy, cultural values, preferences, and holistic wellness goals.
                </p>
              </div>

              <div className={styles.strokeCell}>
                <div className={styles.valueTopRow}>
                  <ShieldCheck size={18} style={{ color: "var(--accent-text)" }} />
                  <h3 className={styles.valueTitle}>Cultural Humility &amp; Advocacy</h3>
                </div>
                <p className={styles.valueDesc}>
                  Championing equitable, culturally responsive care and serving as an active advocate for individuals from underserved and marginalized communities.
                </p>
              </div>

              <div className={styles.strokeCell}>
                <div className={styles.valueTopRow}>
                  <Microscope size={18} style={{ color: "var(--accent-text)" }} />
                  <h3 className={styles.valueTitle}>Scientific Rigour &amp; Inquiry</h3>
                </div>
                <p className={styles.valueDesc}>
                  Embracing nursing as both an art of human connection and a disciplined science, grounding clinical judgment in empirical evidence-informed practices.
                </p>
              </div>

              <div className={styles.strokeCell}>
                <div className={styles.valueTopRow}>
                  <Users size={18} style={{ color: "var(--accent-text)" }} />
                  <h3 className={styles.valueTitle}>Interprofessional Synergy</h3>
                </div>
                <p className={styles.valueDesc}>
                  Communicating transparently and working collaboratively across multidisciplinary teams to ensure patient safety and seamless continuity of care.
                </p>
              </div>

              <div className={styles.strokeCell}>
                <div className={styles.valueTopRow}>
                  <Scale size={18} style={{ color: "var(--accent-text)" }} />
                  <h3 className={styles.valueTitle}>Ethical Accountability</h3>
                </div>
                <p className={styles.valueDesc}>
                  Upholding the rigorous ethical, legal, and professional standards outlined by the CNO through continual self-assessment and reflective regulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER STROKE */}
      <hr className="sectionDivider" />

      {/* =================================================================
          STRUCTURED PORTFOLIO DIRECTORY (Stroke-Divided 6-Cell Grid)
          ================================================================= */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.infraFrame}>
            <div className={styles.infraHeader}>
              <div className={styles.infraHeaderLeft}>
                <div className="sectionEyebrow">PORTFOLIO DIRECTORY</div>
                <h2 className={styles.sectionTitle}>Clinical Practice &amp; Professional Portals</h2>
                <p className={styles.sectionSubtitle}>
                  Explore comprehensive clinical practice records, competencies, evaluative reflections, and verified credentials.
                </p>
              </div>
            </div>

            <div className={styles.strokeGrid6}>
              <Link href="/philosophy" className={`${styles.strokeCell} ${styles.strokeCellLink}`}>
                <div>
                  <div className={styles.dirHeader}>
                    <span className={styles.dirNumber}>01</span>
                    <span className="specTag">Foundational</span>
                  </div>
                  <h3 className={styles.dirTitle}>Philosophy &amp; Identity</h3>
                  <p className={styles.dirDesc}>
                    Beliefs, Assumptions, and Values (BAVs), nursing metaparadigms, personal history evolution, and future practice vision.
                  </p>
                </div>
                <div className={styles.dirAction}>
                  <span>Explore Philosophy</span>
                  <ArrowUpRight size={14} />
                </div>
              </Link>

              <Link href="/clinical-practice" className={`${styles.strokeCell} ${styles.strokeCellLink}`}>
                <div>
                  <div className={styles.dirHeader}>
                    <span className={styles.dirNumber}>02</span>
                    <span className="specTag">Clinical Record</span>
                  </div>
                  <h3 className={styles.dirTitle}>Practice Settings &amp; Populations</h3>
                  <p className={styles.dirDesc}>
                    Synthesized narrative overview of acute medical-surgical, complex continuing care, and inpatient mental health practice.
                  </p>
                </div>
                <div className={styles.dirAction}>
                  <span>Explore Practice Settings</span>
                  <ArrowUpRight size={14} />
                </div>
              </Link>

              <Link href="/competencies-standards" className={`${styles.strokeCell} ${styles.strokeCellLink}`}>
                <div>
                  <div className={styles.dirHeader}>
                    <span className={styles.dirNumber}>03</span>
                    <span className="specTag">CNO Standards</span>
                  </div>
                  <h3 className={styles.dirTitle}>Skills Log &amp; Standards</h3>
                  <p className={styles.dirDesc}>
                    Procedural tracking inventory paired with CNO Entry-to-Practice integration through a mental health–informed lens.
                  </p>
                </div>
                <div className={styles.dirAction}>
                  <span>Explore Competencies</span>
                  <ArrowUpRight size={14} />
                </div>
              </Link>

              <Link href="/evaluations-growth" className={`${styles.strokeCell} ${styles.strokeCellLink}`}>
                <div>
                  <div className={styles.dirHeader}>
                    <span className={styles.dirNumber}>04</span>
                    <span className="specTag">Reflective</span>
                  </div>
                  <h3 className={styles.dirTitle}>Evaluations &amp; Growth</h3>
                  <p className={styles.dirDesc}>
                    Engagement with preceptor feedback, clinical evaluation excerpts, identified strengths, development areas, and action plans.
                  </p>
                </div>
                <div className={styles.dirAction}>
                  <span>Explore Evaluations</span>
                  <ArrowUpRight size={14} />
                </div>
              </Link>

              <Link href="/awards" className={`${styles.strokeCell} ${styles.strokeCellLink}`}>
                <div>
                  <div className={styles.dirHeader}>
                    <span className={styles.dirNumber}>05</span>
                    <span className="specTag">Distinction</span>
                  </div>
                  <h3 className={styles.dirTitle}>Awards &amp; Honours</h3>
                  <p className={styles.dirDesc}>
                    Official Seneca Polytechnic President&apos;s Honour List recognition for superior academic scholarship in nursing.
                  </p>
                </div>
                <div className={styles.dirAction}>
                  <span>View Awards</span>
                  <ArrowUpRight size={14} />
                </div>
              </Link>

              <Link href="/forward-planning" className={`${styles.strokeCell} ${styles.strokeCellLink}`}>
                <div>
                  <div className={styles.dirHeader}>
                    <span className={styles.dirNumber}>06</span>
                    <span className="specTag">Developmental</span>
                  </div>
                  <h3 className={styles.dirTitle}>Forward Planning &amp; SMART Goals</h3>
                  <p className={styles.dirDesc}>
                    Structured professional milestones moving toward consolidation readiness, NCLEX-RN preparation, and entry to practice.
                  </p>
                </div>
                <div className={styles.dirAction}>
                  <span>Explore Planning</span>
                  <ArrowUpRight size={14} />
                </div>
              </Link>

              <Link href="/artifacts" className={`${styles.strokeCell} ${styles.strokeCellLink}`}>
                <div>
                  <div className={styles.dirHeader}>
                    <span className={styles.dirNumber}>07</span>
                    <span className="specTag">Credentials</span>
                  </div>
                  <h3 className={styles.dirTitle}>Curriculum Vitae &amp; Artifacts</h3>
                  <p className={styles.dirDesc}>
                    Comprehensive nursing resume, clinical case presentations, evidence-based academic research artifacts, and references.
                  </p>
                </div>
                <div className={styles.dirAction}>
                  <span>View Artifacts &amp; CV</span>
                  <ArrowUpRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
