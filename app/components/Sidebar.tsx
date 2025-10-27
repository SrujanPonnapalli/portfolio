"use client";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Sidebar ({
  theme,
  isMonospace,
  activeSection,
}: {
  theme: string;
  isMonospace: boolean;
  activeSection: string;
}) {
  return (
    <aside className={styles.sidebar}>
      <div>
        <div>
          <h1 className={styles.name}>
            Srujan
            <br />
            Ponnapalli
          </h1>
          <p className={styles.caption}>Student</p>
        </div>


        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="#about">
                {activeSection === "about" ? <div className={styles.dot} /> : "About"}
              </Link>
            </li>
            <li>
              <Link href="#experience">
                {activeSection === "experience" ? (
                  <div className={styles.dot} />
                ) : (
                  "Experience"
                )}
              </Link>
            </li>
            <li>
              <Link href="#projects">
                {activeSection === "projects" ? <div className={styles.dot} /> : "Projects"}
              </Link>
            </li>
            <li>
              {/* This link should point to a file in the `public` directory */}
              <Link
                href="/resume.pdf"
                target="_blank"
                aria-label="Resume"
                className={styles.externalLink}
              >
                Resume
                <ArrowUpRight size={12} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className={styles.socials}>
          <Link href="https://github.com/srujanponnapalli" target="_blank" aria-label="GitHub">
            <Github size={20} fill="currentColor" strokeWidth={0} />
          </Link>
          <Link href="https://linkedin.com/in/srujanponnapalli" target="_blank" aria-label="LinkedIn">
            <Linkedin size={20} fill="currentColor" strokeWidth={0} />
          </Link>
        </div>
      </div>
    </aside>
  );
}