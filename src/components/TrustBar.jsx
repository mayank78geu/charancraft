import React from 'react';
import { HeartHandshake, Truck, PenTool, Users } from 'lucide-react';
import { useScrollFade } from '../hooks/useScrollFade';
import './TrustBar.css';

const TrustBar = () => {
  const fadeRef = useScrollFade();

  const trustItems = [
    {
      icon: <HeartHandshake size={28} className="trust-icon" />,
      label: "100% Handmade",
      subtext: "Stitched with love"
    },
    {
      icon: <Truck size={28} className="trust-icon" />,
      label: "Ships across India",
      subtext: "Free above ₹799"
    },
    {
      icon: <PenTool size={28} className="trust-icon" />,
      label: "Custom orders welcome",
      subtext: "Made to your vision"
    },
    {
      icon: <Users size={28} className="trust-icon" />,
      label: "30,000+ Happy followers",
      subtext: "Join our community"
    }
  ];

  return (
    <section className="trust-bar">
      <div className="container trust-container fade-up" ref={fadeRef}>
        {trustItems.map((item, index) => (
          <div key={index} className="trust-item">
            {item.icon}
            <div className="trust-text">
              <h4>{item.label}</h4>
              <p>{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
