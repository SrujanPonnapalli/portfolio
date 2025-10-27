import Experience from "./Experience";
import Education from "./Education";

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
            I am a passionate and multidisciplinary student at NC State
            University, intending to triple major in Computer Science, Economics,
            and Applied Mathematics, with a minor in Cognitive Science. My
            interests span responsible AI development/research, economics,
            neuroscience, bioinformatics, and policy, and I seek to leverage
            data-driven insights to address global challenges in healthcare,
            education, sustainability, and more.
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
        <Experience />
      </section>
      <section id="projects">
        <h2 style={{ color: "var(--content-text-color)" }}>
          Projects section coming soon...
        </h2>
      </section>
      <section id="education">
        <Education />
      </section>
    </div>
  );
}
