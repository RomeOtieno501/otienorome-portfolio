import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <h1 className="logo">Rome<span>Portfolio</span></h1>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
