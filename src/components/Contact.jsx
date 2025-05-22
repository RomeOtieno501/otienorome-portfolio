import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle, PhoneCall } from "lucide-react"
import "../styles/index.css";
import { FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>
      <p className="contact-text">
        I'm currently open to new opportunities, collaborations, or just a friendly chat.
        <br />
        Feel free to reach out through any of the platforms below!
      </p>

      <div className="email-container">
        <FaEnvelope className="email-icon" />
        <a className="email-link" href="mailto:otienorome2@gmail.com">
          otienorome2@gmail.com
        </a>
      </div>

      <div className="social-icons">
        <a href="https://www.instagram.com/_.rom3._" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@levv_.official" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a href="https://wa.me/254718610204" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default Contact;
