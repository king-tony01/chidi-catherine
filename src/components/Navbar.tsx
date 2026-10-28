"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavItems, moreNavGroups, nurseProfile } from "@/data/portfolioData";
import { ChevronDown, ArrowUpRight, FileText } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isMoreActive =
    pathname.startsWith("/philosophy") ||
    pathname.startsWith("/clinical-practice") ||
    pathname.startsWith("/competencies-standards") ||
    pathname.startsWith("/evaluations-growth");

  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={`container ${styles.navContainer}`}>
          {/* Brand - Name Only (No logos, badges, or subtitles) */}
          <Link href="/" className={styles.brand} aria-label="Home">
            <span className={styles.brandName}>{nurseProfile.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {/* 1. Home */}
            <Link
              href="/"
              className={`${styles.navLink} ${pathname === "/" ? styles.navLinkActive : ""}`}
            >
              <span>Home</span>
            </Link>

            {/* 2. Awards & Honours */}
            <Link
              href="/awards"
              className={`${styles.navLink} ${pathname === "/awards" ? styles.navLinkActive : ""}`}
            >
              <span>Awards &amp; Honours</span>
            </Link>

            {/* 3. Forward Planning */}
            <Link
              href="/forward-planning"
              className={`${styles.navLink} ${pathname === "/forward-planning" ? styles.navLinkActive : ""}`}
            >
              <span>Forward Planning</span>
            </Link>

            {/* 4. Artifacts & Resume */}
            <Link
              href="/artifacts"
              className={`${styles.navLink} ${pathname === "/artifacts" ? styles.navLinkActive : ""}`}
            >
              <span>Artifacts &amp; Resume</span>
            </Link>

            {/* 5. More (Structured Dropdown) */}
            <div className={styles.navItemWrapper}>
              <button
                type="button"
                className={`${styles.navLink} ${isMoreActive ? styles.navLinkActive : ""}`}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown size={14} className={styles.dropdownArrow} />
              </button>

              <div className={styles.moreDropdown}>
                {moreNavGroups.map((group) => (
                  <div key={group.category} className={styles.moreGroup}>
                    <Link href={group.href} className={styles.moreGroupHeader}>
                      <span className={styles.moreGroupTitle}>{group.category}</span>
                      <ArrowUpRight size={13} color="var(--text-muted)" />
                    </Link>

                    <div className={styles.moreSublist}>
                      {group.items.map((sub) => (
                        <Link key={sub.label} href={sub.href} className={styles.moreSubitem}>
                          <span>{sub.label}</span>
                          {sub.badge && <span className={styles.subBadge}>{sub.badge}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </nav>

          {/* Right Action */}
          <div className={styles.actionsRight}>
            <Link href="/artifacts" className="btn btn-secondary no-print" style={{ padding: "0.45rem 1rem", fontSize: "0.82rem" }}>
              <FileText size={14} />
              <span>Curriculum Vitae</span>
            </Link>

            <button
              type="button"
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`${styles.mobileDrawerOverlay} ${mobileOpen ? styles.mobileDrawerOverlayOpen : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}>
        <div className={styles.drawerHeader}>
          <div className={styles.brand}>
            <span className={styles.brandName}>{nurseProfile.name}</span>
          </div>
          <button
            type="button"
            className={styles.drawerCloseBtn}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className={styles.drawerBody}>
          {/* Primary Top Links */}
          <div className={styles.drawerPrimaryGroup}>
            <Link
              href="/"
              className={`${styles.drawerLink} ${pathname === "/" ? styles.drawerLinkActive : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>Home</span>
            </Link>

            <Link
              href="/awards"
              className={`${styles.drawerLink} ${pathname === "/awards" ? styles.drawerLinkActive : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>Awards &amp; Honours</span>
            </Link>

            <Link
              href="/forward-planning"
              className={`${styles.drawerLink} ${pathname === "/forward-planning" ? styles.drawerLinkActive : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>Forward Planning</span>
            </Link>

            <Link
              href="/artifacts"
              className={`${styles.drawerLink} ${pathname === "/artifacts" ? styles.drawerLinkActive : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>Artifacts &amp; Resume</span>
            </Link>
          </div>

          {/* More Pages */}
          <div>
            <div className={styles.drawerSectionTitle}>More Portfolio Pages</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {moreNavGroups.map((group) => (
                <div key={group.category} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <Link
                    href={group.href}
                    className={styles.drawerLink}
                    style={{ fontSize: "0.88rem" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{group.category}</span>
                  </Link>

                  <div style={{ paddingLeft: "0.85rem", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                    {group.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        style={{ fontSize: "0.78rem", color: "var(--text-secondary)", padding: "0.25rem 0.5rem" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
