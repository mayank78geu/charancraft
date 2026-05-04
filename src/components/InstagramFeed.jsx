import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import './InstagramFeed.css';

const InstagramFeed = () => {
  const fadeRef = useScrollFade();
  
  const posts = [
    { id: 1, postUrl: "https://www.instagram.com/p/DXy0Us7vpBL/" },
    { id: 2, postUrl: "https://www.instagram.com/p/DXRhGiCj7jV/" },
    { id: 3, postUrl: "https://www.instagram.com/p/DVPtdilD2wM/" },
    { id: 4, postUrl: "https://www.instagram.com/p/DU25OMhj3Jt/" },
    { id: 5, postUrl: "https://www.instagram.com/p/DUnRPIsj8s-/" }
  ];

  return (
    <section className="insta-section">
      <div className="container">
        <div className="section-header fade-up" ref={fadeRef}>
          <h2 className="section-title">As seen on Instagram</h2>
        </div>
      </div>
      
      <div className="insta-strip">
        <div className="insta-scroll">
          {posts.map((post) => (
            <a key={post.id} href={post.postUrl} target="_blank" rel="noopener noreferrer" className="insta-tile">
              <svg viewBox="0 0 100 100" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="60" height="60" rx="15" fill="none" stroke="rgba(124, 95, 160, 0.3)" strokeWidth="6" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(124, 95, 160, 0.3)" strokeWidth="6" />
                <circle cx="70" cy="30" r="4" fill="rgba(124, 95, 160, 0.3)" />
              </svg>
            </a>
          ))}
        </div>
      </div>
      
      <div className="container insta-cta-container">
        <a href="https://www.instagram.com/charancraft_crochet/" target="_blank" rel="noopener noreferrer" className="btn btn-primary insta-cta">
          Follow @charancraft_crochet on Instagram
        </a>
      </div>
    </section>
  );
};

export default InstagramFeed;
