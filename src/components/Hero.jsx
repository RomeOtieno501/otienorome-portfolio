import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hello, I'm <span className="highlight">Rome Otieno</span>
        </h1>
        <p>
          A passionate Software Engineer focused on bridging the technological gap
          in rural communities through sustainable tech solutions.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">View My Projects</a>
          <a href="#about" className="hero-btn secondary">About Me</a>
          <a href="#contact" className="hero-btn secondary">Contact</a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
