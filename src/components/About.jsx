import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import './About.css';

const About = () => {
  const fadeRef = useScrollFade();

  return (
    <section id="about" className="about-section">
      <div className="container about-container fade-up" ref={fadeRef}>
        <div className="about-image-wrapper">
          <div className="about-image-placeholder">
            <svg viewBox="0 0 200 200" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="80" r="40" fill="rgba(124, 95, 160, 0.4)" />
              <path d="M40 180 Q100 120 160 180" fill="none" stroke="rgba(124, 95, 160, 0.4)" strokeWidth="20" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="about-content">
          <h2 className="about-heading">Hi, I'm Sumitra Sangwan.</h2>
          <p className="about-body">
            I started CharanCraft in my room with a single hook and a roll of yarn.
            Every piece I make is stitched by hand — no machines, no shortcuts.
            I believe in slow making, in craft that carries warmth.
            When you buy from CharanCraft, you're not buying a product.
            You're carrying a piece of something made just for you.
          </p>
          <a href="https://www.instagram.com/charancraft_crochet/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary about-btn">
            Follow my journey on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
