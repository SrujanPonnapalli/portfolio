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

  useEffect(() => {
    // Ensure viewport meta tag is set for iOS Safari - must be in head before render
    const setViewport = () => {
      let viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        document.head.insertBefore(viewport, document.head.firstChild);
      }
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    };
    
    // Set immediately
    setViewport();
    // Also set on next tick to ensure it sticks
    setTimeout(setViewport, 0);
  }, []);

  return (
    <html lang="en" data-theme={theme} style={{ background: 'var(--background-color)' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body
        className={isMonospace ? sourceCodePro.className : montserrat.className}
        style={{ background: 'var(--background-color)', margin: 0, padding: 0 }}
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
        </div>
        <footer className="frame-footer">
          <div className="frame-footer-themes">
            <Themes
              activeTheme={theme}
              setTheme={setTheme}
              isMonospace={isMonospace}
              setIsMonospace={setIsMonospace}
            />
          </div>
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
