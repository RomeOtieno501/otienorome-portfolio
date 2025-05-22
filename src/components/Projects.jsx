import React from "react";
import { motion } from "framer-motion";
import "../styles/index.css";
import tasklyImg from "../assets/taskly.png";
import romeGardensImg from "../assets/romegardens.png";
import roroImg from "../assets/RIA.png";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Taskly App",
      description: "A task management app built with React and Flask.",
      image: tasklyImg,
      demoLink: "https://taskly-app-iota.vercel.app/",
      codeLink: "https://github.com/benjaminmweribaya/taskly-app-front-end",
    },
    {
      id: 2,
      title: "Rome Gardens App",
      description: "A Hotel Database Management System built with React and Flask.",
      image: romeGardensImg,
      demoLink: "https://rome-gardens-database.netlify.app/",
      codeLink: "https://github.com/RomeOtieno501/rome-gardens-database.git",
    },
    {
      id: 3,
      title: "Roro Airport Database App",
      description: "A database management system for Roro Airport built with React and Flask.",
      image: roroImg,
      demoLink: "https://roro-international-airport-frontend.netlify.app/",
      codeLink: "https://github.com/RomeOtieno501/roro-airlines-frontend.git",
    },
  ];

  return (
    <motion.section
      className="projects-section"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projectData.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
