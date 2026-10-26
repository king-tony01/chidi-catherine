import React from "react";
import Link from "next/link";
import { nurseProfile } from "@/data/portfolioData";
import { ShieldCheck } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand & Summary */}
          <div className={styles.brandCol}>
            <div className={styles.footerBrand}>
              <div>
                <div className={styles.brandTitle}>{nurseProfile.name}</div>
                <div className={styles.brandSubtitle}>RPN • Seneca Polytechnic BSN Candidate</div>
              </div>
            </div>
            <p className={styles.bioSummary}>
              An Electronic Professional Nursing Portfolio demonstrating evolving clinical judgment,
              ethical reflective practice, and commitment to compassionate, culturally responsive healthcare.
            </p>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-text)", marginTop: "-0.5rem" }}>
              <a href={`mailto:${nurseProfile.email}`} style={{ color: "inherit" }}>
                {nurseProfile.email}
              </a>
            </div>
            <div className={styles.badgeRow}>
              <span className="techBadge" style={{ fontSize: "0.68rem" }}>CNO Aligned</span>
              <span className="neutralBadge" style={{ fontSize: "0.68rem" }}>Seneca BSN &apos;27</span>
              <span className="neutralBadge" style={{ fontSize: "0.68rem" }}>RPN Licensed</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className={styles.footerColTitle}>Portfolio Index</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/" className={styles.footerLink}>Home &amp; Profile</Link></li>
              <li><Link href="/philosophy" className={styles.footerLink}>Nursing Philosophy &amp; BAVs</Link></li>
              <li><Link href="/clinical-practice" className={styles.footerLink}>Clinical Practice &amp; Settings</Link></li>
              <li><Link href="/competencies-standards" className={styles.footerLink}>Skills &amp; CNO Standards</Link></li>
              <li><Link href="/evaluations-growth" className={styles.footerLink}>Evaluations &amp; Growth</Link></li>
              <li><Link href="/forward-planning" className={styles.footerLink}>Forward Planning &amp; SMART Goals</Link></li>
              <li><Link href="/artifacts" className={styles.footerLink}>Curriculum Vitae &amp; Artifacts</Link></li>
            </ul>
          </div>

          {/* Rubric Alignment */}
          <div>
            <h4 className={styles.footerColTitle}>Program Checkpoint</h4>
            <ul className={styles.footerLinks}>
              <li><span className={styles.footerLink}>BSN620: Mental Health Nursing</span></li>
              <li><span className={styles.footerLink}>Semester 6 Checkpoint</span></li>
              <li><span className={styles.footerLink}>CNO Entry-to-Practice</span></li>
              <li><span className={styles.footerLink}>Therapeutic Relationships</span></li>
              <li><span className={styles.footerLink}>Trauma-Informed Practice</span></li>
              <li><span className={styles.footerLink}>Reflective Self-Regulation</span></li>
            </ul>
          </div>

          {/* Professionalism & Confidentiality Notice (Rubric Section 7) */}
          <div>
            <div className={styles.complianceCard}>
              <div className={styles.complianceTitle}>
                <ShieldCheck size={14} /> CNO Confidentiality Standard
              </div>
              <p className={styles.complianceText}>
                In strict adherence to the College of Nurses of Ontario (CNO) practice standard for <em>Confidentiality and Privacy</em> and the Personal Health Information Protection Act (PHIPA), all patient names, identifying factors, and clinical scenarios within this portfolio have been completely de-identified.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            &copy; 2026 {nurseProfile.name}. All rights reserved. Honours Bachelor of Science in Nursing.
          </div>
          <div>
            Academic &amp; Professional Career Presentation
          </div>
        </div>
      </div>
    </footer>
  );
}
