import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">CharanCraft Crochet</h2>
            <p className="footer-tagline">Made slowly. Made with hands. Made for you.</p>
          </div>
          
          <div className="footer-links">
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#custom-orders">Custom Orders</a>
            <a href="#contact">Contact</a>
            <a href="https://www.instagram.com/charancraft_crochet/" target="_blank" rel="noopener noreferrer" className="footer-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CharanCraft Crochet. Made with love in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
