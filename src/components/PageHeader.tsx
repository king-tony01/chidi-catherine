import React from "react";
import Link from "next/link";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  badgeType?: "teal" | "gold" | "white" | "navy";
  parentLink?: { label: string; href: string };
}

export default function PageHeader({
  title,
  subtitle,
  badgeText,
  badgeType = "white",
  parentLink = { label: "Home", href: "/" },
}: PageHeaderProps) {
  return (
    <section className={styles.headerWrapper}>
      <div className="container">
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href={parentLink.href} className={styles.breadcrumbLink}>
            {parentLink.label}
          </Link>
          <span>/</span>
          <span className={styles.breadcrumbCurrent}>{title}</span>
        </nav>

        {badgeText && (
          <div className={styles.badgeRow}>
            <div className="sectionEyebrow">{badgeText}</div>
          </div>
        )}

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
