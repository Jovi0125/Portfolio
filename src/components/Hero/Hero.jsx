import React from 'react';
import './Hero.css';

/**
 * Hero Component
 * Full-screen introduction section with name, role, and CTA buttons
 */
const Hero = () => {
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__background">
        {/* Subtle gradient overlay */}
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content">
        {/* Greeting */}
        <p className="hero__greeting fade-in">Hello, I'm</p>

        {/* Name */}
        <h1 className="hero__name fade-in fade-in--delay-1">
          John Viray
        </h1>

        {/* Role/Title */}
        <h2 className="hero__title fade-in fade-in--delay-2">
          Full Stack Developer
        </h2>

        {/* Tagline */}
        <p className="hero__tagline fade-in fade-in--delay-3">
          I build modern, scalable web applications with clean code 
          and exceptional user experiences.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="hero__cta fade-in fade-in--delay-4">
          <button 
            className="btn btn--primary"
            onClick={() => scrollToSection('#projects')}
          >
            View Projects
          </button>
          <button 
            className="btn btn--secondary"
            onClick={() => scrollToSection('#contact')}
          >
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator">
          <span className="hero__scroll-text">Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
