"use client";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { ArrowUpRight, Paperclip } from "lucide-react";
import { useRef, useEffect, useState, useCallback } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import DecodingName from "./DecodingName";

const EMAIL = "sponnap2@gmail.com";

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
  const [emailHover, setEmailHover] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      setEmailCopied(true);
      copyTimeoutRef.current = setTimeout(() => {
        setEmailCopied(false);
        copyTimeoutRef.current = null;
      }, 2500);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

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
      <div className={styles.sidebarLeft}>
        <div>
          <DecodingName isMonospace={isMonospace} />
          <div className={styles.captionContainer}>
            <p className={styles.caption}>Student</p>
            <p className={styles.caption}>·</p>
            <p className={styles.caption}>Researcher</p>
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
          <div className={styles.copyEmailWrap}>
            <button
              type="button"
              className={styles.copyEmailBtn}
              onClick={copyEmail}
              onMouseEnter={() => setEmailHover(true)}
              onMouseLeave={() => setEmailHover(false)}
              aria-label="Copy email address"
            >
              <span className={styles.copyEmailIcon}>
                <FaEnvelope size={24} style={{ opacity: emailHover ? 0 : 1 }} aria-hidden />
                <Paperclip size={24} className={styles.copyEmailPaperclip} style={{ opacity: emailHover ? 1 : 0 }} aria-hidden />
              </span>
            </button>
            {emailCopied && (
              <span className={styles.copyEmailToast}>Copied!</span>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}