import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="content-inner">
      <section id="about" className="about-section">
        <div className="about-content">
          <p className="greeting">
            Hello! <span className="wave-emoji">👋</span>
          </p>
          <br />
          <p>
          I am a passionate and multidisciplinary student at NC State University, majoring in Computer Science, Economics, and Applied Mathematics, with a minor in Cognitive Science. My interests span responsible AI development, economics, neuroscience, bioinformatics, and policy, and I seek to leverage data-driven insights to address global challenges in healthcare, education, sustainability, and more.
          </p>
          <br />
          <p>
            Currently, I am working on physics-informed machine learning (graph neural networks) to predict environmental persistence of PFAS chemicals in the AIMS Lab with Dr. Yaroslava Yingling.
          </p>
          <br />
          <p>
            Get in touch 👉{" "}
            <a href="mailto:sponnap2@gmail.com" className="contact-link">
              srujan.ponnapalli[at]gmail.com
            </a>
          </p>
        </div>
      </section>
      <section id="experience">
        <h2 className="section-header">Experience</h2>
        <Experience />
      </section>
      <section id="projects">
        <h2 className="section-header">Projects</h2>
        <Projects />
      </section>
      <section id="education">
        <h2 className="section-header">Education</h2>
        <Education />
      </section>
      <section id="resume" className="resume-section">
        {/* <p className="resume-link-container">
          View my full{" "}
          <a href="/resume.pdf" target="_blank" className="resume-anchor">
            <span className="contact-link">resume</span>
            <ArrowUpRight
              size={16}
              style={{
                display: "inline-block",
                marginLeft: "4px",
                verticalAlign: "bottom",
              }}
            />
          </a>
        </p> */}
      </section>
    </div>
  );
}
