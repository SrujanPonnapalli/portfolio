"use client";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { Montserrat, Source_Code_Pro } from "next/font/google";
import { ReactNode, useState, useRef, useEffect } from "react";
import Themes from "./components/Themes";
import Copyright from "./components/Copyright";
import WebGLGradient from "./components/WebGLGradient";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("dark");
  const [isMonospace, setIsMonospace] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;
      if (!contentElement) return;

      const scrollPosition = contentElement.scrollTop;
      const sectionElements = Array.from(
        contentElement.querySelectorAll("section[id]")
      );

      for (const section of sectionElements) {
        const el = section as HTMLElement;
        if (
          el.offsetTop <= scrollPosition + contentElement.clientHeight / 2 &&
          el.offsetTop + section.clientHeight > scrollPosition + contentElement.clientHeight / 2
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    const contentElement = contentRef.current;
    contentElement?.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      contentElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en" data-theme={theme}>
      <body
        className={isMonospace ? sourceCodePro.className : montserrat.className}
      >
        <div className="frame">
          <main className="container">
            <WebGLGradient theme={theme} />
            <div className="dot-grid-overlay" />
            <Sidebar
              theme={theme}
              isMonospace={isMonospace}
              activeSection={activeSection}
            />
            <section className="content" ref={contentRef}>
              {children}
            </section>
          </main>
          <Themes
            activeTheme={theme}
            setTheme={setTheme}
            isMonospace={isMonospace}
            setIsMonospace={setIsMonospace}
          />
          <Copyright />
        </div>
      </body>
    </html>
  );
}
