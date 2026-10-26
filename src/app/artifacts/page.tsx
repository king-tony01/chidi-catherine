"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { nurseProfile, verifiedArtifacts } from "@/data/portfolioData";
import {
  Printer,
  FileText,
  ExternalLink,
  Download,
  Eye,
  X,
  CheckCircle2,
  Award,
} from "lucide-react";
import styles from "./page.module.css";

export default function ArtifactsPage() {
  const [activeDoc, setActiveDoc] = useState<(typeof verifiedArtifacts)[0] | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDoc(null);
      }
    };
    if (activeDoc) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeDoc]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <>
      <PageHeader
        title="Curriculum Vitae, Verified Artifacts & References"
        subtitle="A comprehensive professional portfolio record compiling verified clinical presentations, Seneca President's Honour List certificate, curriculum vitae, and clinical references."
        badgeText="Section 7 • Credentials &amp; Verified Artifacts"
      />

      <div className={`container ${styles.container}`}>
        {/* =================================================================
            1. RESUME / CV SECTION (Unified Hairline Frame)
            ================================================================= */}
        <section className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div>
                <div className="sectionEyebrow">Professional Resume</div>
                <h2 className={styles.sectionTitle}>Curriculum Vitae</h2>
                <p className={styles.sectionLead}>
                  Formal resume detailing 4+ years of licensed RPN acute and long-term care practice, Seneca President&apos;s Honour List academic achievement, hospital placements, and transferable educational leadership.
                </p>
              </div>

              <button
                type="button"
                onClick={handlePrint}
                className="btn btn-primary no-print"
                style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}
              >
                <Printer size={16} />
                <span>Print / Save as PDF</span>
              </button>
            </div>

            {/* Resume Content Body */}
            <div className={styles.resumeBody}>
              {/* Header Strip */}
              <div className={styles.resumeMetaStrip}>
                <div>
                  <h3 className={styles.resumeName}>{nurseProfile.name}</h3>
                  <div className={styles.resumeTitle}>
                    Registered Practical Nurse (RPN) | Honours BSN Candidate &apos;27
                  </div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.35rem" }}>
                    Toronto, Ontario &bull; College of Nurses of Ontario (CNO) Registration &bull; Licensed since 2021
                  </div>
                  <div style={{ marginTop: "0.45rem" }}>
                    <span className="specTag" style={{ color: "var(--accent-text)", borderColor: "var(--accent-border)" }}>
                      Seneca Polytechnic President&apos;s Honour List (Winter 2026)
                    </span>
                  </div>
                </div>

                <div className={styles.resumeContact}>
                  <div><strong>Institution:</strong> Seneca Polytechnic</div>
                  <div>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${nurseProfile.email}`} style={{ color: "inherit", textDecoration: "underline" }}>
                      {nurseProfile.email}
                    </a>
                  </div>
                  <div><strong>Clinical Systems:</strong> Epic, Meditech, PointClickCare</div>
                  <div><strong>Status:</strong> Legally eligible to work in Canada</div>
                  <div><strong>Target RN:</strong> 2027</div>
                </div>
              </div>

              {/* Profile Summary */}
              <div className={styles.resumeSection}>
                <h4 className={styles.resumeSectionTitle}>Professional Summary</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
                  Compassionate and dedicated Registered Practical Nurse (RPN) with more than four years of professional clinical experience providing safe, patient-centred care across acute medical-surgical, mental health, long-term care, and retirement home environments. Currently completing Year 2 of the Honours Bachelor of Science in Nursing (BSN) program at Seneca Polytechnic, where I was awarded the <strong>President&apos;s Honour List</strong> for superior academic scholarship. Experienced in managing complex adult inpatient conditions—including stroke recovery, dysphagia, enteral G-tube feeding, and aseptic catheterization—on 3 Aqua at Mackenzie Health Hospital (Epic EHR) and General Medicine at Brampton Civic Hospital (Meditech EHR). Former classroom educator bringing exceptional cross-cultural health literacy, trauma-informed empathy, and collaborative leadership to interprofessional nursing teams.
                </p>
              </div>

              {/* Clinical Experience */}
              <div className={styles.resumeSection}>
                <h4 className={styles.resumeSectionTitle}>Clinical Nursing Placements &amp; Practice</h4>

                {/* Placement 1: Mackenzie Health */}
                <div className={styles.resumeItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemRole}>
                      Clinical Nursing Practicum — Complex Medical-Surgical &amp; Stroke Care
                    </span>
                    <span className={styles.itemDate}>Current Placement</span>
                  </div>
                  <div className={styles.itemOrg}>
                    3 Aqua (3C), Mackenzie Health Hospital &bull; Electronic Health Record: Epic
                  </div>
                  <ul className={styles.itemBullets}>
                    <li>
                      Provide direct bedside care under the guidance of clinical instructor and primary nurse for complex patients presenting with stroke, dysphagia, severe dehydration, falls risk, and mobility impairments.
                    </li>
                    <li>
                      Execute routine vital sign monitoring every four hours, comprehensive head-to-toe physical assessments, comfort measures, safe feeding support, and strict fluid intake and output (I&amp;O) reconciliation.
                    </li>
                    <li>
                      Safely administer enteral nutrition via Gastrostomy tube (G-tube), adhering to aspiration precaution guidelines, tube patency verification, and feeding rate protocols.
                    </li>
                    <li>
                      Execute aseptic urinary catheterization and drainage maintenance for indwelling Foley catheters, measuring hourly urine output and reporting abnormal parameters promptly.
                    </li>
                    <li>
                      Champion fall prevention protocols by maintaining low bed positions, positioning call bells within patient reach, and executing safe mechanical transfers.
                    </li>
                    <li>
                      Deliver culturally responsive, respectful care to patients from diverse cultural and linguistic backgrounds, including coordinating professional medical interpretation and family communication for a Korean-speaking patient.
                    </li>
                    <li>
                      Maintain accurate, real-time clinical documentation in <strong>Epic EHR</strong>, adhering to CNO documentation standards.
                    </li>
                  </ul>
                </div>

                {/* Placement 2: Brampton Civic Hospital */}
                <div className={styles.resumeItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemRole}>
                      Clinical Nursing Practicum — Acute &amp; Chronic General Medicine
                    </span>
                    <span className={styles.itemDate}>Completed Placement</span>
                  </div>
                  <div className={styles.itemOrg}>
                    4th Floor General Medicine, Brampton Civic Hospital (William Osler Health System) &bull; EHR: Meditech
                  </div>
                  <ul className={styles.itemBullets}>
                    <li>
                      Delivered holistic inpatient care for adult medical patients admitted with acute decompensations and multi-morbid chronic conditions (respiratory, cardiovascular, endocrine, and metabolic disorders).
                    </li>
                    <li>
                      Conducted focused physiological assessments, vital sign trending, and early recognition of clinical red flags indicating patient decompensation.
                    </li>
                    <li>
                      Administered oral, subcutaneous, and intramuscular medications with zero safety incidents, strictly adhering to the 10 Rights of Medication Administration.
                    </li>
                    <li>
                      Performed sterile wound dressing changes, skin breakdown prevention, and peripheral IV therapy surveillance.
                    </li>
                    <li>
                      Documented patient status and clinical responses in <strong>Meditech EHR</strong>, communicating real-time updates during interprofessional team rounds.
                    </li>
                  </ul>
                </div>

                {/* Licensed Experience: 4+ Years RPN Practice */}
                <div className={styles.resumeItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemRole}>
                      Registered Practical Nurse (RPN) — Frontline Healthcare Practice
                    </span>
                    <span className={styles.itemDate}>2021 – Present (4+ Years Licensed Experience)</span>
                  </div>
                  <div className={styles.itemOrg}>
                    Acute Care, Medical-Surgical, Mental Health, Long-Term Care &amp; Retirement Facilities &bull; EHR: PointClickCare
                  </div>
                  <ul className={styles.itemBullets}>
                    <li>
                      Over four years of autonomous, licensed practical nursing practice delivering safe, compassionate, client-centred care across the Greater Toronto Area.
                    </li>
                    <li>
                      Extensive procedural proficiency in peripheral IV therapy, wound care, catheterization, tracheostomy care, airway suctioning, and NG/G-tube enteral feeding.
                    </li>
                    <li>
                      De-escalated complex behavioral crises using Gentle Persuasive Approaches (GPA) and Crisis Prevention Intervention (CPI) modalities.
                    </li>
                    <li>
                      Proficient in electronic documentation across multiple institutional platforms, including <strong>PointClickCare</strong>, <strong>Meditech</strong>, and <strong>Epic</strong>.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Education & Academic History */}
              <div className={styles.resumeSection}>
                <h4 className={styles.resumeSectionTitle}>Education &amp; Academic Credentials</h4>

                <div className={styles.resumeItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemRole}>Honours Bachelor of Science in Nursing (BSN)</span>
                    <span className={styles.itemDate}>Expected April 2027</span>
                  </div>
                  <div className={styles.itemOrg}>Seneca Polytechnic &bull; Toronto, Ontario</div>
                  <div style={{ marginTop: "0.25rem" }}>
                    <span className="specTag" style={{ color: "var(--accent-text)", borderColor: "var(--accent-border)" }}>
                      Academic Honour: Seneca President&apos;s Honour List (Winter 2026)
                    </span>
                  </div>
                </div>

                <div className={styles.resumeItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemRole}>Practical Nursing Diploma (RPN Licensure)</span>
                    <span className={styles.itemDate}>Conferred &bull; Licensed 2021</span>
                  </div>
                  <div className={styles.itemOrg}>Accredited Ontario College of Applied Arts &amp; Technology</div>
                </div>

                <div className={styles.resumeItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemRole}>Bachelor&apos;s Degree in Education</span>
                    <span className={styles.itemDate}>Conferred</span>
                  </div>
                  <div className={styles.itemOrg}>Accredited University &bull; Former Schoolteacher &amp; Educator</div>
                </div>
              </div>

              {/* Certifications & Affiliations */}
              <div className={styles.resumeSection} style={{ marginBottom: 0 }}>
                <h4 className={styles.resumeSectionTitle}>Certifications &amp; Professional Affiliations</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span className="specTag" style={{ color: "var(--accent-text)", borderColor: "var(--accent-border)" }}>
                    College of Nurses of Ontario (CNO) — Licensed RPN (2021)
                  </span>
                  <span className="specTag">Basic Life Support (BLS Provider)</span>
                  <span className="specTag">Standard First Aid</span>
                  <span className="specTag">WHMIS Certification</span>
                  <span className="specTag">Crisis Prevention Intervention (CPI)</span>
                  <span className="specTag">Gentle Persuasive Approaches (GPA)</span>
                  <span className="specTag">Electronic Documentation (Epic &bull; Meditech &bull; PointClickCare)</span>
                  <span className="specTag">WeRPN Member (Registered Practical Nurses Association of Ontario)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. ACADEMIC & CLINICAL ARTIFACTS SECTION (Stroke-Divided 3-Column)
            ================================================================= */}
        <section className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div>
                <div className="sectionEyebrow">Verified Academic &amp; Clinical Documents</div>
                <h2 className={styles.sectionTitle}>Academic Projects &amp; Evidence-Based Artifacts</h2>
                <p className={styles.sectionLead}>
                  Authentic clinical presentations and institutional distinctions submitted by Chidi Catherine Obi-Hezekiah. Each document includes high-resolution snapshot previews, an interactive in-page viewer, and direct PDF download links.
                </p>
              </div>
            </div>

            {/* Direct 3-Column Stroke-Divided Grid (Touching Frame Edges) */}
            <div className={styles.strokeGrid3}>
              {verifiedArtifacts.map((artifact) => (
                <div key={artifact.id} className={styles.strokeCell}>
                  <div className={styles.cellTop}>
                    <div className={styles.cellMeta}>
                      <span className="monoLabel" style={{ color: "var(--accent-text)" }}>
                        {artifact.category}
                      </span>
                      <span className="specTag">{artifact.date}</span>
                    </div>

                    <h3 className={styles.cellTitle}>{artifact.title}</h3>
                    <div className={styles.cellIssuer}>{artifact.issuer}</div>

                    {/* Snapshot Preview Box */}
                    <div
                      className={styles.snapshotBox}
                      onClick={() => setActiveDoc(artifact)}
                      title="Click to view interactive document"
                    >
                      <Image
                        src={artifact.snapshotUrl}
                        alt={artifact.title}
                        width={600}
                        height={375}
                        className={styles.snapshotImg}
                        priority
                      />
                      <div className={styles.snapshotOverlay}>
                        <div className={styles.snapshotOverlayText}>
                          <Eye size={14} />
                          <span>View Document</span>
                        </div>
                      </div>
                    </div>

                    <p className={styles.cellDesc}>{artifact.summary}</p>

                    <ul className={styles.highlightsList}>
                      {artifact.highlights.map((h, i) => (
                        <li key={i} className={styles.highlightItem}>
                          <span className={styles.highlightDot}>&bull;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Toolbar */}
                  <div className={styles.cellActions}>
                    <button
                      type="button"
                      onClick={() => setActiveDoc(artifact)}
                      className={styles.viewBtn}
                    >
                      <Eye size={15} />
                      <span>View Document In-Page</span>
                    </button>

                    <div className={styles.actionBtnRow}>
                      <a
                        href={artifact.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionLink}
                      >
                        <ExternalLink size={13} />
                        <span>Open PDF</span>
                      </a>

                      <a
                        href={artifact.pdfUrl}
                        download
                        className={styles.actionLink}
                      >
                        <Download size={13} />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            3. REFERENCES SECTION (Stroke-Divided Endorsements)
            ================================================================= */}
        <section className={styles.sectionBlock}>
          <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
              <div>
                <div className="sectionEyebrow">Professional Endorsements</div>
                <h2 className={styles.sectionTitle}>Academic &amp; Clinical References</h2>
                <p className={styles.sectionLead}>
                  Contact information for clinical preceptors, faculty instructors, and practice leaders available upon official request for verification.
                </p>
              </div>
            </div>

            {/* Direct 3-Column Stroke-Divided Grid (Touching Frame Edges) */}
            <div className={styles.strokeGrid3}>
              <div className={styles.strokeCell}>
                <div className={styles.cellTop}>
                  <div className={styles.cellMeta}>
                    <span className="monoLabel">Clinical Instructor</span>
                    <span className="specTag">3 Aqua (3C)</span>
                  </div>
                  <h3 className={styles.cellTitle}>Clinical Faculty Preceptor</h3>
                  <div className={styles.refRole}>Clinical Nursing Instructor, School of Nursing</div>
                  <div className={styles.refInst}>Mackenzie Health Hospital &bull; Complex Med-Surg Practicum</div>
                </div>
                <div className={styles.refStatus}>Direct Contact Provided Upon Official Request</div>
              </div>

              <div className={styles.strokeCell}>
                <div className={styles.cellTop}>
                  <div className={styles.cellMeta}>
                    <span className="monoLabel">Primary Nurse Preceptor</span>
                    <span className="specTag">Gen Medicine</span>
                  </div>
                  <h3 className={styles.cellTitle}>Staff Nurse Preceptor</h3>
                  <div className={styles.refRole}>Registered Nurse (RN), 4th Floor General Medicine</div>
                  <div className={styles.refInst}>Brampton Civic Hospital (William Osler Health System)</div>
                </div>
                <div className={styles.refStatus}>Direct Contact Provided Upon Official Request</div>
              </div>

              <div className={styles.strokeCell}>
                <div className={styles.cellTop}>
                  <div className={styles.cellMeta}>
                    <span className="monoLabel">Academic Faculty</span>
                    <span className="specTag">Honours BSN</span>
                  </div>
                  <h3 className={styles.cellTitle}>Academic Nursing Faculty</h3>
                  <div className={styles.refRole}>Professor &amp; Academic Advisor, School of Nursing</div>
                  <div className={styles.refInst}>Seneca Polytechnic &bull; Department of Health Sciences</div>
                </div>
                <div className={styles.refStatus}>Direct Contact Provided Upon Official Request</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =====================================================================
          INTERACTIVE DOCUMENT VIEWER MODAL
          ===================================================================== */}
      {activeDoc && (
        <div
          className={styles.modalBackdrop}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveDoc(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label={activeDoc.title}
        >
          <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <div>
                <span className="specTag" style={{ marginBottom: "0.25rem", display: "inline-block" }}>
                  {activeDoc.category}
                </span>
                <h3 className={styles.modalTitle}>{activeDoc.title}</h3>
              </div>

              <div className={styles.modalHeaderActions}>
                <a
                  href={activeDoc.htmlUrl || activeDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionLink}
                >
                  <ExternalLink size={14} />
                  <span>Open in Full Tab</span>
                </a>

                <a
                  href={activeDoc.pdfUrl}
                  download
                  className={styles.actionLink}
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className={styles.modalCloseBtn}
                  aria-label="Close document viewer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className={styles.modalBody}>
              <iframe
                src={activeDoc.htmlUrl || activeDoc.pdfUrl}
                title={activeDoc.title}
                className={styles.modalIframe}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
