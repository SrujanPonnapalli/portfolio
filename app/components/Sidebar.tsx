"use client";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";

export default function Sidebar ({
  theme,
  isMonospace,
  activeSection,
}: {
  theme: string;
  isMonospace: boolean;
  activeSection: string;
}) {
  const navRef = useRef<HTMLUListElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current && dotRef.current) {
      const activeItem = navRef.current.querySelector(
        `li[data-active='true']`
      ) as HTMLLIElement;
      if (activeItem) {
        const top = activeItem.offsetTop;
        dotRef.current.style.transform = `translateY(${top}px)`;
      }
    }
  }, [activeSection]);
  return (
    <aside className={styles.sidebar}>
      <div>
        <div>
          <h1 className={styles.name}>
            Srujan
            <br />
            Ponnapalli
          </h1>
          <div className={styles.captionContainer}>
            <p className={styles.caption}>Student</p>
            <p className={styles.caption}>·</p>
            <Link
              href="https://park.ncsu.edu/"
              target="_blank"
              className={`${styles.caption} ${styles.captionLink}`}
            >
              Park Scholar
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>


        <nav className={styles.nav}>
          <ul ref={navRef}>
            <div ref={dotRef} className={styles.animatedDot} />
            <li data-active={activeSection === "about"}>
              <Link href="#about">About</Link>
            </li>
            <li data-active={activeSection === "experience"}>
              <Link href="#experience">Experience</Link>
            </li>
            <li data-active={activeSection === "projects"}>
              <Link href="#projects">Projects</Link>
            </li>
            <li data-active={activeSection === "education"}>
              <Link href="#education">Education</Link>
            </li>
            {/* <li>
              <Link
                href="/resume.pdf"
                target="_blank"
                className={styles.externalLink}
              >
                Resume <ArrowUpRight size={12} />
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className={styles.socials}>
          <Link href="https://github.com/srujanponnapalli" target="_blank" aria-label="GitHub">
            <FaGithub size={24} />
          </Link>
          <Link href="https://linkedin.com/in/srujanponnapalli" target="_blank" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </aside>
  );
}