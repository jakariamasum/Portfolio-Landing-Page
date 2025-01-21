"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./projects.module.css";

import project1 from "../../assests/project1.png";
import Title from "../ui/Title";

const categories = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "Graphic Design",
];

const projects = [
  {
    id: 1,
    title: "AirCalling Landing Page Design",
    category: "Web Design",
    image: project1,
  },
  {
    id: 2,
    title: "Business Landing Page Design",
    category: "Web Design",
    image: project1,
  },
  {
    id: 3,
    title: "Ecom Web Page Design",
    category: "Web Design",
    image: project1,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className={styles.projects}>
      <Title
        title="My Projects"
        description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam tortor nam diam tellus"
      />

      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${styles.categoryButton} ${
              activeCategory === category ? styles.active : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.project}>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={600}
              className={styles.projectImage}
            />

            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectCategory}>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
