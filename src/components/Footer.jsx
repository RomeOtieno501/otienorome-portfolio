import React from "react";
import { motion } from "framer-motion";
import "../styles/index.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p>&copy; {new Date().getFullYear()} Rome Otieno Ojuro Levin. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
