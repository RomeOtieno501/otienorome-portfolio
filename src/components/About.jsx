import React from "react";
import { motion } from "framer-motion";
import "../styles/index.css";

const About = () => {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            I'm <strong>Rome Otieno Ojuro Levin</strong>, a passionate Software Engineer dedicated to creating impactful tech solutions.
            My focus is on bridging the technological gap in rural communities through innovative and sustainable software systems.
          </p>
          <p>
            I specialize in full-stack development using tools like <strong>HTML</strong>, <strong>CSS</strong>, <strong>Python</strong>, <strong>React</strong>, <strong>Flask</strong>, and <strong>PostgreSQL</strong>. I'm always learning and striving to use technology to make lives easier and more connected.
          </p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src="/path-to-your-image.jpg" alt="Rome Otieno" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
