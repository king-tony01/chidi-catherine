"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

interface SkillItem {
  name: string;
  category: "Assessment" | "Medication" | "Wound & Drainage" | "Mental Health" | "Respiratory" | "Safety & Infection";
  level: "Independent" | "Supervised / Consolidation" | "Lab & Clinical Practiced";
  setting: "Acute Hospital" | "Psychiatric Inpatient" | "Simulation Lab" | "Long-Term Care";
}

const skillsData: SkillItem[] = [
  { name: "Comprehensive Head-to-Toe Physical Assessment", category: "Assessment", level: "Independent", setting: "Acute Hospital" },
  { name: "Mental Status Examination (MSE) & Affect Assessment", category: "Mental Health", level: "Independent", setting: "Psychiatric Inpatient" },
  { name: "Columbia-Suicide Severity Rating Scale (C-SSRS)", category: "Mental Health", level: "Independent", setting: "Psychiatric Inpatient" },
  { name: "Safe Oral & Sublingual Medication Administration (10 Rights)", category: "Medication", level: "Independent", setting: "Acute Hospital" },
  { name: "Subcutaneous & Intramuscular (IM) Injections (Deltoid, Ventrogluteal)", category: "Medication", level: "Independent", setting: "Acute Hospital" },
  { name: "Intravenous (IV) Line Priming, Infusion Pump Management & Maintenance", category: "Medication", level: "Supervised / Consolidation", setting: "Acute Hospital" },
  { name: "Sterile Simple & Complex Wound Dressing / Packing", category: "Wound & Drainage", level: "Independent", setting: "Acute Hospital" },
  { name: "Surgical Staple & Suture Removal with Steri-Strip Application", category: "Wound & Drainage", level: "Supervised / Consolidation", setting: "Simulation Lab" },
  { name: "Closed Wound Drainage System Monitoring (Jackson-Pratt & Hemovac)", category: "Wound & Drainage", level: "Independent", setting: "Acute Hospital" },
  { name: "Oxygen Therapy Titration (Nasal Cannula, Venturi, Non-Rebreather)", category: "Respiratory", level: "Independent", setting: "Acute Hospital" },
  { name: "Tracheostomy Suctioning & Inner Cannula Care", category: "Respiratory", level: "Supervised / Consolidation", setting: "Simulation Lab" },
  { name: "Aseptic Indwelling Foley Catheter Insertion & Hourly Urine Output Tracking", category: "Assessment", level: "Independent", setting: "Acute Hospital" },
  { name: "De-escalation & Crisis Prevention Intervention (CPI / Verbal De-escalation)", category: "Mental Health", level: "Independent", setting: "Psychiatric Inpatient" },
  { name: "Gentle Persuasive Approaches (GPA) for Responsive Behaviors", category: "Mental Health", level: "Independent", setting: "Long-Term Care" },
  { name: "Blood Glucose Monitoring & Sliding-Scale Insulin Titration", category: "Medication", level: "Independent", setting: "Acute Hospital" },
  { name: "Enteral Nutrition via Gastrostomy (G-tube) & NG Tube Administration", category: "Medication", level: "Independent", setting: "Acute Hospital" },
  { name: "Safe Dysphagia Feeding Support & Aspiration Precaution Protocols", category: "Safety & Infection", level: "Independent", setting: "Acute Hospital" },
  { name: "Routine Infection Control & Additional Precautions (Contact, Droplet, Airborne)", category: "Safety & Infection", level: "Independent", setting: "Acute Hospital" },
  { name: "Electronic Documentation in Epic, Meditech & PointClickCare", category: "Safety & Infection", level: "Independent", setting: "Acute Hospital" },
  { name: "Safe Patient Transfer with Mechanical Lifts (Ceiling & Sit-to-Stand)", category: "Safety & Infection", level: "Independent", setting: "Long-Term Care" },
];

const categories = ["All", "Mental Health", "Assessment", "Medication", "Wound & Drainage", "Respiratory", "Safety & Infection"];

export default function CompetenciesStandardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <>
      <PageHeader
        title="Clinical Skills & Professional Standards"
        subtitle="Tracking procedural competency development alongside an in-depth mental health–informed integration of CNO Entry-to-Practice competencies for BSN620."
        badgeText="Section 4A &amp; 5 • BSN620 Core Checkpoint"
      />

      <div className={`container ${styles.container}`}>
        {/* Navigation Anchor Bar */}
        <nav className={styles.anchorBar} aria-label="Quick links">
          <span className={styles.anchorLabel}>Jump to:</span>
          <a href="#skills-log" className={styles.anchorLink}>Clinical Skills Record (Section 4A)</a>
          <a href="#mental-health-context" className={styles.anchorLink}>CNO Standards &amp; Mental Health Integration (Section 5)</a>
          <a href="#reflective-synthesis" className={styles.anchorLink}>Reflective Synthesis &amp; Consolidation Readiness</a>
        </nav>

        {/* =================================================================
            1. SECTION 4A: Clinical Skills and Competency Record
            ================================================================= */}
        <section id="skills-log" className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div className="sectionEyebrow">Section 4A • Skills Inventory</div>
              <h2 className={styles.sectionTitle}>BSN Clinical Skills &amp; Competency Tracking Record</h2>
              <p className={styles.sectionLead}>
                Documenting skills introduced, practiced in clinical or laboratory simulation settings, and the level of independence achieved across the BSN curriculum.
              </p>
            </div>

            {/* Category Filters Bar */}
            <div className={styles.skillsControls}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterBtnActive : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} {cat === "All" ? `(${skillsData.length})` : `(${skillsData.filter((s) => s.category === cat).length})`}
                </button>
              ))}
            </div>

            {/* Direct Stroke-Divided Skills Grid */}
            <div className={styles.strokeGrid3}>
              {filteredSkills.map((skill) => (
                <div key={skill.name} className={styles.skillCell}>
                  <div className={styles.skillName}>{skill.name}</div>
                  <div className={styles.skillBadges}>
                    <span className="specTag" style={{ color: "var(--accent-text)", borderColor: "var(--accent-border)" }}>
                      {skill.level}
                    </span>
                    <span className="specTag">{skill.setting}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            2. SECTION 5: Professional Standards - Mental Health Nursing Context
            ================================================================= */}
        <section id="mental-health-context" className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div className="sectionEyebrow">Section 5 • Semester 6 Checkpoint</div>
              <h2 className={styles.sectionTitle}>Professional Standards &amp; Regulations: Mental Health Nursing Context</h2>
              <p className={styles.sectionLead}>
                At the Semester 6 checkpoint for BSN620 (Mental Health Nursing), this analysis demonstrates how clinical practice aligns with College of Nurses of Ontario (CNO) Entry-to-Practice competencies using a mental health–informed lens. Mental health competencies—such as therapeutic communication, ethical judgment, self-awareness, and trauma-informed care—are foundational to all clinical domains.
              </p>
            </div>

            {/* Direct Stroke-Divided Competency Stack */}
            <div className={styles.competencyStack}>
              {/* Competency 1: Therapeutic Nurse-Client Relationship */}
              <div className={styles.competencyCell}>
                <div className={styles.compHeader}>
                  <div>
                    <h3 className={styles.compTitle}>1. Therapeutic Nurse-Client Relationship &amp; De-Escalation</h3>
                    <div className="monoLabel" style={{ color: "var(--accent-text)", marginTop: "0.35rem" }}>
                      CNO Entry-to-Practice Competency 1.1 &bull; Standard: Therapeutic Relationship
                    </div>
                  </div>
                  <span className="specTag">COMPETENCY 1</span>
                </div>

                <h4 className={styles.subSectionTitle}>A. Competency Description</h4>
                <p className={styles.compParagraph}>
                  The Registered Nurse establishes, maintains, and terminates therapeutic nurse-client relationships characterized by mutual trust, unconditional positive regard, cultural humility, and professional boundaries, utilizing tailored communication techniques to navigate acute emotional distress and de-escalate crisis states.
                </p>

                <h4 className={styles.subSectionTitle}>B. Evidence from Clinical Practice (De-Identified)</h4>
                <p className={styles.compParagraph}>
                  During my psychiatric clinical placement (BSN620), I cared for a 28-year-old client diagnosed with severe bipolar I disorder experiencing an acute manic episode with severe persecutory ideation. The client paced the hallway agitation, shouting that hospital staff were collaborating with external authorities to harm them. Recognizing rising distress and physiological agitation, I engaged the client from an open, non-threatening posture at a safe distance. Using a calm, lowered vocal cadence, I validated their overwhelming emotional fear without validating the delusional content: <em>&ldquo;I can see that you are feeling intensely frightened right now, and I want you to know you are safe with me. Let&apos;s step toward the quiet lounge where we can sit down and talk.&rdquo;</em> By providing active listening, validating feelings, and offering choices (such as sitting near the window or taking deep breaths), the client&apos;s physical agitation de-escalated without the necessity of chemical or physical restraints.
                </p>

                <h4 className={styles.subSectionTitle}>C. Mental Health–Informed Analysis</h4>
                <p className={styles.compParagraph}>
                  This encounter demonstrates that therapeutic communication is not merely conversational, but an advanced clinical intervention. Psychosocial assessment enabled me to identify hyper-arousal triggers and implement trauma-informed care principles: establishing safety, offering control, and avoiding confrontation. Furthermore, maintaining strict professional boundaries ensured that while empathy was freely extended, the nurse-client boundary remained uncompromised. This mental health skill is equally vital on acute medical-surgical floors when caring for postoperative or delirious patients who become fearful or combative.
                </p>
              </div>

              {/* Competency 2: Ethical Decision-Making & Patient Autonomy */}
              <div className={styles.competencyCell}>
                <div className={styles.compHeader}>
                  <div>
                    <h3 className={styles.compTitle}>2. Ethical Decision-Making &amp; Balancing Autonomy with Protection</h3>
                    <div className="monoLabel" style={{ color: "var(--accent-text)", marginTop: "0.35rem" }}>
                      CNO Entry-to-Practice Competency 2.2 &bull; Standard: Ethics (Client Well-Being &amp; Autonomy)
                    </div>
                  </div>
                  <span className="specTag">COMPETENCY 2</span>
                </div>

                <h4 className={styles.subSectionTitle}>A. Competency Description</h4>
                <p className={styles.compParagraph}>
                  The Registered Nurse navigates complex ethical tensions between upholding client autonomy and dignity while ensuring patient safety, adhering to statutory mandates under the Ontario Mental Health Act, the Health Care Consent Act, and CNO ethical standards.
                </p>

                <h4 className={styles.subSectionTitle}>B. Evidence from Clinical Practice (De-Identified)</h4>
                <p className={styles.compParagraph}>
                  In an acute inpatient medical unit (BSN 325), an elderly client with early cognitive decline and a severe diabetic foot ulcer insisted on leaving against medical advice (AMA), refusing required intravenous antibiotic therapy and daily dressing changes. The healthcare team was concerned about rapid sepsis. Rather than viewing the client as merely &ldquo;difficult&rdquo; or immediately pursuing capacity assessment for involuntary treatment, I applied a mental health-informed approach. I sat at eye level and conducted a focused, compassionate assessment of the client&apos;s underlying anxieties. The client broke down and shared that their partner had died in a hospital setting twenty years prior, and the sight of IV pumps triggered overwhelming panic. By validating this grief-related trauma, collaborating with the physician to adjust the administration schedule, and involving the daughter in care discussions, the client agreed to remain and receive treatment voluntarily.
                </p>

                <h4 className={styles.subSectionTitle}>C. Mental Health–Informed Analysis</h4>
                <p className={styles.compParagraph}>
                  By integrating mental health knowledge of trauma triggers and grief responses into an acute medical scenario, I preserved the client&apos;s autonomy and dignity while preventing life-threatening medical deterioration. Ethical practice requires nurses to look beyond the immediate medical refusal to uncover the emotional and psychosocial roots of patient behavior. My ability to remain self-aware, avoid defensive reactions, and advocate for least restrictive measures directly aligns with CNO ethical mandates.
                </p>
              </div>

              {/* Competency 3: Trauma-Informed Assessment & Cultural Humility */}
              <div className={styles.competencyCell}>
                <div className={styles.compHeader}>
                  <div>
                    <h3 className={styles.compTitle}>3. Trauma-Informed Assessment, Psychosocial Screening &amp; Cultural Humility</h3>
                    <div className="monoLabel" style={{ color: "var(--accent-text)", marginTop: "0.35rem" }}>
                      CNO Entry-to-Practice Competency 3.4 &amp; 3.6 &bull; Comprehensive Assessment &amp; Diversity
                    </div>
                  </div>
                  <span className="specTag">COMPETENCY 3</span>
                </div>

                <h4 className={styles.subSectionTitle}>A. Competency Description</h4>
                <p className={styles.compParagraph}>
                  The Registered Nurse conducts holistic, trauma-informed assessments that integrate physical, emotional, social determinants of health, and cultural factors, identifying potential risks for suicide, self-harm, or substance withdrawal while demonstrating cultural humility.
                </p>

                <h4 className={styles.subSectionTitle}>B. Evidence from Clinical Practice (De-Identified)</h4>
                <p className={styles.compParagraph}>
                  During an intake assessment in BSN620, I completed a psychosocial screening and Columbia-Suicide Severity Rating Scale (C-SSRS) with a 42-year-old recent immigrant presenting with severe major depressive disorder and somatic complaints of unyielding chronic pain. Recognizing the profound cultural stigma associated with psychiatric illness in many immigrant communities, I adapted my interview approach with cultural humility. Instead of abruptly asking psychiatric diagnostic questions, I began by asking about family dynamics, spiritual support, and their experience transitioning to Canada. The client gradually felt safe enough to disclose suicidal ideation with passive intent, rooted in feelings of shame and job loss. I immediately formulated a collaborative safety plan, consulted the preceptor and interprofessional team, and integrated a culturally aligned social work referral.
                </p>

                <h4 className={styles.subSectionTitle}>C. Mental Health–Informed Analysis</h4>
                <p className={styles.compParagraph}>
                  This practice evidence illustrates that comprehensive clinical assessment cannot exist in a vacuum separated from cultural context and trauma. A trauma-informed perspective recognizes that somatic complaints frequently mask severe psychosocial distress. By practicing active cultural humility and creating a non-judgmental atmosphere, I obtained critical diagnostic information that prevented self-harm and connected the client with lifesaving community resources.
                </p>
              </div>
            </div>

            {/* D. Reflective Synthesis (Direct Child of Frame) */}
            <div id="reflective-synthesis" className={styles.synthesisBox}>
              <div className="sectionEyebrow">Consolidation Readiness</div>
              <h3 className={styles.synthesisTitle}>D. Reflective Synthesis &amp; Readiness for Upper-Level Practice</h3>
              <p>
                Reflecting on my Semester 6 checkpoint in BSN620, I recognize that mental health nursing competence has fundamentally transformed my approach to the entire nursing profession. Prior to this coursework and clinical immersion, I occasionally viewed psychiatric nursing as a distinct, specialized silo. I now understand that every patient in healthcare is a holistic being whose physical healing is intrinsically connected to their mental and emotional well-being.
              </p>
              <p>
                This clinical checkpoint forced me to confront my own assumptions and emotional reactions. In high-stress clinical environments, patient resistance or agitation can easily trigger defensive reactions in healthcare providers. Developing deep self-awareness, emotional regulation, and an understanding of trauma-informed care has equipped me to respond with curiosity and compassion rather than frustration.
              </p>
              <p>
                As I prepare for Year 4 upper-level clinical practice, pre-consolidation (BSN 725), and final consolidation (BSN 825), these competencies give me the confidence to navigate complex patient situations, lead interprofessional discussions with clarity and respect, and advocate courageously for vulnerable populations as an ethical, competent Registered Nurse.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
