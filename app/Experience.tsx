import styles from "./Experience.module.css";
import { Briefcase } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import unccLogo from "../public/uncc_logo.jpeg";
import youthPromiseLogo from "../public/youthpromise_logo.png";
import jyiLogo from "../public/jyi_logo.png";
import type { ReactNode } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  companyURL?: string;
  logo?: StaticImageData;
  logoBackground?: string;
  logoClassName?: string;
  pills: string[];
  description: (string | ReactNode)[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Machine Learning Research Intern",
    company: "University of North Carolina at Charlotte",
    companyURL: "https://www.charlotte.edu/",
    logo: unccLogo,
    pills: ["Charlotte, NC", "Aug 2023 – Oct 2023", "Internship"],
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
            {item.logo ? (<Image src={item.logo} alt={`${item.company} logo`} className={`${styles.logo} ${item.logoClassName || ""}`} />) : (<Briefcase size={24} />)}
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
          </div>
        </div>)
      })}
    </div>
  );
}