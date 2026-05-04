import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import './Hero.css';

const Hero = () => {
  const fadeRef = useScrollFade();

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-up" ref={fadeRef}>
          <h1 className="hero-heading">
            Made slowly.<br />
            Made with hands.<br />
            Made for you.
          </h1>
          <p className="hero-subtext">
            Handcrafted crochet bags, potli bags & home décor — each piece one of a kind. Born in India, made with love.
          </p>
          <div className="hero-cta-group">
            <a href="https://www.instagram.com/charancraft_crochet/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Shop on Instagram
            </a>
            <a href="#contact" className="btn btn-secondary">
              Bulk Order (Contact Us)
            </a>
          </div>
        </div>
        
        <div className="hero-graphic">
          {/* Abstract yarn/loop SVG graphic matching the theme */}
          <svg viewBox="0 0 400 400" className="hero-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="yarn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9AEE8" />
                <stop offset="100%" stopColor="#7C5FA0" />
              </linearGradient>
            </defs>
            <path d="M150,50 C250,50 350,150 350,250 C350,350 250,350 200,300 C150,250 250,150 150,100 C50,50 50,250 150,350" 
                  fill="none" 
                  stroke="url(#yarn-grad)" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  className="path-animate"/>
            <circle cx="250" cy="150" r="40" fill="#FCE8F4" opacity="0.6"/>
            <circle cx="150" cy="250" r="60" fill="#E8DFF5" opacity="0.6"/>
            <circle cx="100" cy="120" r="20" fill="#7C5FA0" opacity="0.2"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
