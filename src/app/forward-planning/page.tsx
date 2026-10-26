import React from "react";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

export const metadata = {
  title: "Forward Planning & SMART Goals | Chidi Catherine Obi-Hezekiah, RPN",
  description:
    "Future-oriented professional development, SMART learning goals for consolidation (Year 4), and strategic milestones leading to 2027 RN licensure.",
};

export default function ForwardPlanningPage() {
  return (
    <>
      <PageHeader
        title="Forward Planning & SMART Goals"
        subtitle="Strategic, forward-looking roadmap articulating developmental milestones, SMART learning goals, consolidation readiness, and planned portfolio checkpoints."
        badgeText="Section 6 • Future-Oriented Strategy"
      />

      <div className={`container ${styles.container}`}>
        {/* =================================================================
            1. DEVELOPMENTAL ROADMAP OVERVIEW (Unified Hairline Frame)
            ================================================================= */}
        <section className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div>
                <div className="sectionEyebrow">Section 6 • Developmental Roadmap</div>
                <h2 className={styles.sectionTitle}>Professional Development &amp; Forward Planning</h2>
                <p className={styles.sectionLead}>
                  Moving systematically through the Seneca Honours BSN program toward high-acuity consolidation and independent entry to practice as a Registered Nurse in 2027.
                </p>
              </div>
            </div>

            <div className={styles.frameBody}>
              <div className={styles.prose}>
                <p>
                  Professional development in nursing is a deliberate, proactive process of continuous growth. As I approach the completion of my second year (Semester 6) and look ahead to Year 4, the integration of reflective practice allows me to identify clear developmental objectives. Transforming clinical feedback into tangible, measurable goals ensures that my practice progresses from task-based competence to comprehensive clinical leadership and autonomous patient management.
                </p>
                <p>
                  The following SMART goals outline my targeted learning priorities for Year 4, spanning high-acuity prioritization, trauma-informed psychiatric integration, and leadership in multidisciplinary collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. CONSOLIDATION LEARNING GOALS (Stroke-Divided Stack)
            ================================================================= */}
        <section className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div>
                <div className="sectionEyebrow">Consolidation Learning Goals (Year 4)</div>
                <h2 className={styles.sectionTitle}>Targeted SMART Clinical Objectives</h2>
                <p className={styles.sectionLead}>
                  Structured developmental goals addressing high-volume acuity, trauma-informed care de-escalation, and Next-Generation NCLEX preparation.
                </p>
              </div>
            </div>

            {/* Direct Stroke-Divided Goals Stack */}
            <div className={styles.goalsStack}>
              {/* SMART Goal 1 */}
              <div className={styles.goalRow}>
                <div className={styles.goalHeader}>
                  <h3 className={styles.goalTitle}>
                    SMART Goal 1: High-Acuity Prioritization &amp; Full Caseload Management
                  </h3>
                  <span className="specTag">TARGET: FALL 2026 (BSN 725)</span>
                </div>
                <p className={styles.goalObjective}>
                  <strong>Objective Statement:</strong> By the conclusion of BSN 725 (Pre-Consolidation Practicum), I will independently manage, prioritize, and safely deliver comprehensive care for a full caseload of 4–5 acute medical-surgical clients within a 12-hour shift, accurately triaging care needs and executing documentation with minimal preceptor intervention.
                </p>

                <div className={styles.breakdownGrid}>
                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Specific</div>
                    <div className={styles.breakdownText}>
                      Master shift organization and critical thinking frameworks (e.g., ABCDE and Maslow&apos;s hierarchy) to prioritize rapid interventions across complex patients.
                    </div>
                  </div>

                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Measurable</div>
                    <div className={styles.breakdownText}>
                      Complete all scheduled assessments, medication passes, and clinical charting within required institutional timeframes without safety oversights or shift overrun.
                    </div>
                  </div>

                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Achievable</div>
                    <div className={styles.breakdownText}>
                      Build upon existing RPN frontline acute experience while leveraging structured clinical hourly shift templates and preceptor check-ins.
                    </div>
                  </div>

                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Relevant &amp; Time-bound</div>
                    <div className={styles.breakdownText}>
                      Essential readiness benchmark before entering full-time final consolidation (BSN 825) in early 2027.
                    </div>
                  </div>
                </div>
              </div>

              {/* SMART Goal 2 */}
              <div className={styles.goalRow}>
                <div className={styles.goalHeader}>
                  <h3 className={styles.goalTitle}>
                    SMART Goal 2: Trauma-Informed Assessment &amp; De-Escalation Leadership
                  </h3>
                  <span className="specTag">TARGET: WINTER 2027 (CONSOLIDATION)</span>
                </div>
                <p className={styles.goalObjective}>
                  <strong>Objective Statement:</strong> By the end of BSN 825 (Consolidation), I will routinely lead trauma-informed psychosocial evaluations and demonstrate evidence-based verbal de-escalation in high-distress patient encounters across medical and psychiatric floors, achieving zero physical restraint interventions in my assigned care.
                </p>

                <div className={styles.breakdownGrid}>
                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Specific</div>
                    <div className={styles.breakdownText}>
                      Conduct comprehensive psychosocial screenings that detect subtle warning signs of emotional escalation and trauma triggers, applying tailored non-violent crisis intervention techniques.
                    </div>
                  </div>

                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Measurable</div>
                    <div className={styles.breakdownText}>
                      Preceptor evaluations confirming proactive early de-escalation and successful therapeutic rapport across 100% of assessed agitated patient interactions.
                    </div>
                  </div>

                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Achievable</div>
                    <div className={styles.breakdownText}>
                      Grounded in BSN620 Mental Health coursework, non-violent crisis intervention certification, and ongoing clinical practice.
                    </div>
                  </div>

                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Relevant &amp; Time-bound</div>
                    <div className={styles.breakdownText}>
                      Directly aligns with CNO standards for therapeutic relationships and patient safety across all clinical settings by Winter 2027.
                    </div>
                  </div>
                </div>
              </div>

              {/* SMART Goal 3 */}
              <div className={styles.goalRow}>
                <div className={styles.goalHeader}>
                  <h3 className={styles.goalTitle}>
                    SMART Goal 3: NCLEX-RN Examination Preparation &amp; Clinical Knowledge Synthesis
                  </h3>
                  <span className="specTag">TARGET: SPRING 2027 (GRADUATION)</span>
                </div>
                <p className={styles.goalObjective}>
                  <strong>Objective Statement:</strong> Upon completing the BSN program in 2027, I will successfully challenge the Next Generation NCLEX-RN (NGN) examination on the first attempt by maintaining a structured study schedule and achieving &ge;80% predictive scoring on adaptive practice simulations.
                </p>

                <div className={styles.breakdownGrid}>
                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Specific</div>
                    <div className={styles.breakdownText}>
                      Complete 2,500+ NGN-style clinical judgment case questions encompassing pharmacology, physiological adaptation, and safety protocols.
                    </div>
                  </div>

                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Measurable</div>
                    <div className={styles.breakdownText}>
                      Track performance metrics on validated prep platforms (e.g., UWorld / Kaplan) with continuous scoring above peer benchmarks.
                    </div>
                  </div>

                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Achievable</div>
                    <div className={styles.breakdownText}>
                      Dedicate 10 structured hours per week alongside clinical consolidation, synthesizing real-world patient cases with theoretical concepts.
                    </div>
                  </div>

                  <div className={styles.breakdownCell}>
                    <div className={styles.breakdownLabel}>Relevant &amp; Time-bound</div>
                    <div className={styles.breakdownText}>
                      Enables immediate College of Nurses of Ontario (CNO) Registered Nurse registration upon graduation in mid-2027.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. STRATEGIC ROADMAP & CHECKPOINT MILESTONES (Stroke-Divided 3-Column)
            ================================================================= */}
        <section className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div>
                <div className="sectionEyebrow">Future Checkpoint Milestones</div>
                <h2 className={styles.sectionTitle}>Planned Portfolio Updates Across Program Stages</h2>
                <p className={styles.sectionLead}>
                  As mandated by the BSN program guidelines, this electronic portfolio is an evolving artifact maintained across semesters.
                </p>
              </div>
            </div>

            {/* Direct 3-Column Stroke-Divided Grid */}
            <div className={styles.strokeGrid3}>
              <div className={styles.roadmapCell}>
                <span className="specTag">CHECKPOINT 1 • FALL 2026</span>
                <h3 className={styles.checkpointTitle}>Semester 7 (BSN 725) Integration</h3>
                <p className={styles.checkpointDesc}>
                  Integrate BSN 725 high-acuity evaluation metrics, advanced skills tracking (IV push medications, central lines), and complex patient advocacy reflection.
                </p>
              </div>

              <div className={styles.roadmapCell}>
                <span className="specTag">CHECKPOINT 2 • WINTER 2027</span>
                <h3 className={styles.checkpointTitle}>BSN 825 Consolidation Showcase</h3>
                <p className={styles.checkpointDesc}>
                  Upload final preceptor evaluation, capstone leadership clinical project, quality improvement artifact, and comprehensive self-reflection.
                </p>
              </div>

              <div className={styles.roadmapCell}>
                <span className="specTag">CHECKPOINT 3 • MID 2027</span>
                <h3 className={styles.checkpointTitle}>RN Licensure &amp; Career Transition</h3>
                <p className={styles.checkpointDesc}>
                  Update official CNO credentials to Registered Nurse (RN), publish finalized professional curriculum vitae, and compile reference dossier for acute hospital recruitment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
