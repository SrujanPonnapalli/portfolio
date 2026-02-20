import styles from "./Experience.module.css";
import { Briefcase } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import ncsuLogo from "../public/ncsu_logo.png";
import renciLogo from "../public/renci_logo.jpg";
import unccLogo from "../public/uncc_logo.jpeg";
import youthPromiseLogo from "../public/youthpromise_logo.png";
import jyiLogo from "../public/jyi_logo.png";
import type { ReactNode } from "react";
import type { CSSProperties } from "react";

function getRandomColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 6) - hash);
  }
  const hue = hash % 360;
  return `hsla(${hue}, 70%, 50%, 0.3)`;
}

const techColorMap: { [key: string]: string } = {
  "Python": "hsla(207, 49%, 40%, 0.3)",
  "RDKit": "hsla(120, 40%, 45%, 0.3)",
  "PyTorch": "hsla(30, 100%, 45%, 0.3)",
  "GNN": "hsla(270, 50%, 40%, 0.3)",
  "Machine Learning": "hsla(193, 95%, 40%, 0.3)",
  "YOLOv7": "hsla(220, 60%, 50%, 0.3)",
  "Computer Vision": "hsla(180, 50%, 45%, 0.3)",
  "Robotics": "hsla(15, 80%, 45%, 0.3)",
  "TypeScript": "hsla(210, 58%, 50%, 0.3)",
  "React": "hsla(193, 95%, 68%, 0.3)",
  "Next.js": "hsla(55, 100%, 37%, 0.30)",
  "JavaScript": "hsla(54, 100%, 46%, 0.30)",
  "Kotlin": "hsla(230, 80%, 50%, 0.3)",
  "Java": "hsla(23, 100%, 46%, 0.30)",
};

interface ExperienceItem {
  title: string;
  company: string;
  companyURL?: string;
  logo?: StaticImageData;
  logoScale?: number;
  logoBackground?: string;
  logoClassName?: string;
  pills: string[];
  skills?: string[];
  description: (string | ReactNode)[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Incoming iRODS Intern",
    company: "Renaissance Computing Institute",
    companyURL: "https://renci.org/",
    logo: renciLogo,
    logoScale: 0.7,
    logoBackground: "#000000",
    pills: ["Chapel Hill, NC", "Jun 2026 – Aug 2026", "Internship"],
    skills: ["Data Management", "iRODS"],
    description: [
      "Incoming iRODS Summer 2026 intern, focusing on policy‑driven data management workflows for large‑scale scientific research.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "North Carolina State University (AIMS Laboratory)",
    companyURL: "https://mse.ncsu.edu/yingling/",
    logo: ncsuLogo,
    logoScale: 0.7,
    logoBackground: "#C8102E",
    pills: ["Raleigh, NC", "Jan 2026 – Present", "Research"],
    skills: ["Python", "RDKit", "PyTorch", "GNN", "Machine Learning"],
    description: [
      <>
        Developing physics-informed machine learning architectures (Graph Neural Networks) to predict the environmental half-life and persistence of{" "}
        <a href="https://www.epa.gov/pfas" target="_blank" rel="noopener noreferrer" className="expanding-underline">
          PFAS/PFOS
        </a>{" "}
        chemicals under the guidance of{" "}
        <a href="https://mse.ncsu.edu/yingling/" target="_blank" rel="noopener noreferrer" className="expanding-underline">
          Dr. Yaroslava Yingling
        </a>.
      </>,
      <>
        Building a cheminformatics pipeline using{" "}
        <a href="https://github.com/rdkit/rdkit" target="_blank" rel="noopener noreferrer" className="expanding-underline">
          RDKit
        </a>{" "}
        to generate molecular fingerprints and feature vectors used to train deep learning models on ~14,000 chemical structures.
      </>,
      "Implementing active learning loops and uncertainty quantification to refine model predictions for a real-world environmental decision platform.",
      "Collaborating with the research team to define mechanistic class ontologies that categorize compounds by their fate and treatment potential.",
    ],
  },
  {
    title: "Machine Learning Research Intern",
    company: "University of North Carolina at Charlotte",
    companyURL: "https://www.charlotte.edu/",
    logo: unccLogo,
    pills: ["Charlotte, NC", "Aug 2023 – Oct 2023", "Internship"],
    skills: ["Python", "YOLOv7", "Computer Vision", "Real-Time Processing"],
    description: [
      <>
        Integrated the{" "}
        <a href="https://github.com/WongKinYiu/yolov7" target="_blank" rel="noopener noreferrer" className="expanding-underline">
          YOLOv7
        </a>{" "}
        deep learning model into a quadruped robotic system for
        real-time object detection and tracking under the guidance of{" "}
        <a href="https://srijandas07.github.io/" target="_blank" rel="noopener noreferrer" className="expanding-underline">Dr. Srijan Das</a>.
      </>,
      "Focused on model optimization for low-power hardware and enhanced accuracy in challenging environments, including low-light and cluttered scenes.",
      "Collaborated with the robotics department to establish robust wireless communication between the robot and the computer running the model.",
      "Prepared and presented live demos for local student tours of the computing lab in a team environment.",
    ],
  },
  {
    title: "Tutor, Group Manager",
    company: "Youth Promise",
    logoBackground: "#432676ff",
    logo: youthPromiseLogo,
    pills: ["Remote", "Nov 2022 – May 2024", "Tutoring"],
    skills: ["Mathematics", "Computer Science", "Teaching"],
    description: [
      "Provided mentorship and technical instruction in mathematics and computer science to underprivileged youth.",
      "Managed and coordinated a team of 10+ tutors, ensuring efficient scheduling and high-quality instruction.",
      "Developed innovative coding curriculum with minimal assistance, simplifying complex concepts in brief lessons.",
    ],
  },
  {
    title: "Scientific Careers Intern",
    company: "Journal of Young Investigators",
    companyURL: "https://www.jyi.org/",
    logo: jyiLogo,
    logoClassName: styles.jyiLogo,
    logoBackground: "#ffffffff",
    pills: ["Remote", "Aug 2023 - Sep 2023", "Internship"],
    skills: ["Writing", "Research"],
    description: [
      <>
        Wrote and published compelling{" "}
        <a href="https://www.jyi.org/search?q=srujan+ponnapalli" target="_blank" rel="noopener noreferrer" className="expanding-underline">
          scientific articles
        </a>{" "}
        on contemporary topics with global impact.
      </>,
      "Promoted the understanding of scientific research by simplifying complex data into accessible content.",
      "Consistently delivered high-quality articles, producing one well-researched piece per week.",
    ],
  },
];

export default function Experience() {
  return (
    <div className={styles.experienceSection}>
      {experienceData.map((item, index) => {
        const icon = (
          <div className={styles.iconContainer} style={item.logoBackground ? { backgroundColor: item.logoBackground } : {}}>
            {item.logo ? (
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                className={`${styles.logo} ${item.logoClassName || ""}`}
                style={item.logoScale != null ? { transform: `scale(${item.logoScale})`, objectFit: "contain" } : undefined}
              />
            ) : (
              <Briefcase size={24} />
            )}
          </div>
        );

        return (
          <div key={index} className={styles.card}>
            {item.companyURL ? (
              <a
                href={item.companyURL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label={`${item.company} website`}
              >
                {icon}
              </a>
            ) : (
              icon
            )}
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                {item.companyURL ? (
                  <a
                    href={item.companyURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.companyLink} expanding-underline`}
                  >
                    {item.company}
                  </a>
                ) : (
                  <p className={styles.company}>{item.company}</p>
                )}
              </div>
              <div className={styles.pills}>
                {item.pills.map((pill, i) => (
                  <span key={i} className={styles.pill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.description}>
              <ul>
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
            {item.skills && item.skills.length > 0 && (
              <div className={styles.skillPills}>
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={styles.pill}
                    style={
                      {
                        "--pill-background-color": techColorMap[skill] || getRandomColor(skill),
                      } as CSSProperties
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>)
      })}
    </div>
  );
}