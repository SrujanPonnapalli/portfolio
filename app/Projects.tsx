import styles from "./Projects.module.css";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import portfolioScreenshot from "../public/site_screenshot.png";

interface ProjectItem {
  title: string;
  projectURL?: string;
  image?: StaticImageData;
  description: string;
  pills: string[];
}

/**
 * Generates a consistent, random pastel color for a given string.
 * Uses a simple hash function to derive the hue, and fixed saturation/lightness
 * for a pastel look.
 * @param str The string to hash.
 * @returns An hsla color string.
 */
function getRandomColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 6) - hash);
  }
  const hue = hash % 360;
  // Using fixed saturation and lightness for a consistent pastel palette
  return `hsla(${hue}, 70%, 50%, 0.3)`;
}

const techColorMap: { [key: string]: string } = {
  "JavaScript": "hsla(54, 100%, 46%, 0.30)",
  "Java": "hsla(23, 100%, 46%, 0.30)",
  "TypeScript": "hsla(210, 58%, 50%, 0.3)",
  "CSS": "hsla(270, 50%, 40%, 0.3)",
  "React": "hsla(193, 95%, 68%, 0.3)",
  "Next.js": "hsla(55, 100%, 37%, 0.30)",
  "Python": "hsla(207, 49%, 40%, 0.3)",
};

const projectsData: ProjectItem[] = [
  {
    title: "Paper Trails",
    projectURL: "https://github.com/sainelluri0306/Paper-Trails/tree/main",
    description:
      "A forensic intelligence engine designed to combat context collapse by tracing digital media back to its origin. Orchestrates a multi-model pipeline (Claude, Gemini) alongside Google Lens and Fact Check APIs to generate irrefutable evidence boards, revealing the chronological history of images and claims to expose misinformation.",
    pills: ["Next.js", "TypeScript", "AWS Bedrock", "Google Gemini", "Google Lens", "SerpAPI", "Tailwind CSS"],
  },
  {
    title: "Personal Portfolio",
    projectURL: "https://github.com/srujanponnapalli/portfolio",
    description:
      "The site you're on right now! A clean, modern, and interactive showcase of my skills and experience, built with Next.js and TypeScript.",
    pills: ["Next.js", "TypeScript", "React", "CSS", "Vercel"],
  },
  {
    title: "Flood Impact Mapper",
    description:
      "A geospatial analysis project to map the extent of flooding in Asheville, NC, utilizing Synthetic Aperture Radar (SAR) to see through clouds. Utilizes satellite imagery and integrated public data from the USGS to create a highly accurate model of flood extent. Leverages data analytics and visualization techniques to show an interactive, user-friendly map of flood impact.",
    pills: ["Python", "Rasterio", "GeoPandas", "Folium"],
  },
  {
    title: "Pocket Librarian",
    projectURL: "https://github.com/DepixelStudios/PocketLibrarian",
    description:
      "A comprehensive Android mobile application for book discovery and management, featuring barcode scanning, advanced search capabilities, and personalized reading recommendations across 30+ genres.",
    pills: ["Kotlin", "Google Books API", "New York Times API"],
  },
];

export default function Projects() {
  return (
    <div className={styles.projectsSection}>
      {projectsData.map((item, index) => {
        const cardContent = (
          <div className={styles.card}>
            {item.image && (
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={`${item.title} screenshot`}
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.cardContent}>
              <span className={`${styles.title} expanding-underline`}>
                {item.title}{" "}
                {item.projectURL && (
                  <ArrowUpRight size={18} className={styles.arrowIcon} />
                )}
              </span>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.pills}>
                {item.pills.map((pill, i) => (
                  <span
                    key={i}
                    className={styles.pill}
                    style={
                      {
                        '--pill-background-color': techColorMap[pill] || getRandomColor(pill),
                      } as CSSProperties
                    }
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

        if (item.projectURL) {
          return (
            <a
              key={index}
              href={item.projectURL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              aria-label={`${item.title} project link`}
            >
              {cardContent}
            </a>
          );
        }
        return <div key={index} className={styles.cardLink}>{cardContent}</div>;
      })}
    </div>
  );
}