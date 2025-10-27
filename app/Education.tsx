import styles from "./Education.module.css";

import Image, { StaticImageData } from "next/image";
import ncsuLogo from "../public/ncsu_logo.png";
import cuthbertsonLogo from "../public/cuthbertson_logo.png";
import spccLogo from "../public/spcc_logo.jpeg";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface EducationItem {
  institution: string;
  degree: string | ReactNode;
  logoScale?: number;
  logoBackground?: string;
  accentColor?: string;
  logo: StaticImageData;
  pills: string[];
  activities?: (string | ReactNode)[];
  description: (string | ReactNode)[];
}

const educationData: EducationItem[] = [
  {
    degree: "B.S. Computer Science, Economics, & Applied Mathematics",
    institution: "North Carolina State University",
    logoScale: 0.7,
    logoBackground: "#C8102E",
    accentColor: "#C8102E",
    logo: ncsuLogo,
    pills: ["2024 – 2028", "Dean's List"],
    activities: [
      <a href="https://krispykremechallenge.com/about#our-story" target="_blank" rel="noopener noreferrer">
        CFO - Krispy Kreme Challenge
      </a>,
      <a href="httpshttps://getinvolved.ncsu.edu/organization/packonomics" target="_blank" rel="noopener noreferrer">
        VP - Packonomics
      </a>,
      <a href="https://park.ncsu.edu/apply/pura/" target="_blank" rel="noopener noreferrer">
        PURA
      </a>,
      <a href="https://honors.dasa.ncsu.edu/" target="_blank" rel="noopener noreferrer">
        UHP
      </a>,
      <a href="https://park.ncsu.edu/park-ambassadors/" target="_blank" rel="noopener noreferrer">
        Park Ambassador
      </a>,
      <a href="https://www.serviceraleigh.org/" target="_blank" rel="noopener noreferrer">
        Service Raleigh
      </a>,
    ],
    description: [
      <>{"The "}
        <a href="https://park.ncsu.edu/" target="_blank" rel="noopener noreferrer" className="expanding-underline">
          Park Scholarship
        </a>
        {" is a four-year full-ride merit scholarship awarded on the basis of outstanding accomplishments and potential in scholarship, leadership, service, and character. The program develops and supports Park Scholars in these areas, preparing them for lifelong contributions to the university, state, nation, and world."}
      </>,
    ],
  },
  {
    degree: (
      <>
        <a
          href="https://www.parchment.com/u/award/f94601d67673e4aea24bc2c9073e9eaf"
          target="_blank" rel="noopener noreferrer" className="expanding-underline normal-weight"
        >Associate in Arts</a>, <a
          href="https://www.parchment.com/u/award/18d698e2e18dd13c155799d6d1e16c32"
          target="_blank" rel="noopener noreferrer" className="expanding-underline normal-weight"
        >
          Business Administration Certificate
        </a>
      </>
    ),
    institution: "South Piedmont Community College",
    logoScale: 0.7,
    logoBackground: "#ffffff",
    accentColor: "#0079c1", // SPCC Blue
    logo: spccLogo,
    pills: ["2022 – 2024", "GPA: 4.00"],
    description: [
      "Dual enrolled while I maintained a full high school workload.",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "Cuthbertson High School",
    logoScale: 0.9,
    logoBackground: "#ffffffff",
    accentColor: "#005c87", // Cuthbertson Blue
    logo: cuthbertsonLogo,
    pills: ["2020 – 2024", "GPA: 4.71", "Rank 1/453"],
    activities: [
      "Programming Club (President)",
      "DECA",
      "Model UN",
      "Speech & Debate",
    ],
    description: [
      "Valedictorian. Representative on superintendent's advisory council.",
    ],
  }
];

export default function Education() {
  return (
    <div className={styles.educationSection}>
      {educationData.map((item, index) => (
        <div key={index} className={styles.card}>
          <div
            className={styles.iconContainer}
            style={item.logoBackground ? { backgroundColor: item.logoBackground } : {}}
          >
            <Image
              src={item.logo}
              alt={`${item.institution} logo`}
              className={styles.logo}
              style={{ transform: `scale(${item.logoScale || 1})`, objectFit: 'contain' }}
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.institution}>{item.institution}</h3>
                <p className={styles.degree}>{item.degree}</p>
              </div>
              <div className={styles.pills}>
                {item.pills.map((pill, i) => (<span key={i} className={styles.pill}>{pill}</span>))}
              </div>
            </div>
            {item.activities && (
              <div className={styles.activitiesSection}>
                <h4 className={styles.activitiesTitle}>Activities</h4>
                <div className={styles.pills}>
                  {item.activities.map((activity, i) => (
                    <span
                      key={i}
                      className={styles.pill}
                      style={{ '--accent-color': item.accentColor } as React.CSSProperties}
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className={styles.description}>
              {item.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}