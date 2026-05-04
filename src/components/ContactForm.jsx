import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import './ContactForm.css';

const ContactForm = () => {
  const fadeRef = useScrollFade();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Sumitra will get back to you shortly about your bulk order.");
  };

  return (
    
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header fade-up" ref={fadeRef}>
          <h2 className="section-title">Bulk Orders</h2>
          <p className="contact-eyebrow">Planning something big?</p>
          <p className="section-subtitle">
            Whether it's gifting sets for a wedding, corporate hampers, or a festive collection —
            I handcraft every piece with the same love. Let's make something special together.
          </p>
          <div className="bulk-badges">
            <span className="bulk-badge">🎁 Wedding Gifts</span>
            <span className="bulk-badge">🏢 Corporate Gifting</span>
            <span className="bulk-badge">🪔 Festive Hampers</span>
            <span className="bulk-badge">✨ Custom Branding</span>
          </div>
        </div>

        <div className="form-container fade-up" ref={fadeRef}>
          <form className="custom-order-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required placeholder="Priya Sharma" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input type="tel" id="phone" required placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" required placeholder="priya@example.com" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="type">Product type</label>
                <select id="type" required>
                  <option value="" disabled defaultValue>Select product</option>
                  <option value="Potli Bags">Potli Bags</option>
                  <option value="Tote Bags">Tote Bags</option>
                  <option value="Coaster Sets">Coaster Sets</option>
                  <option value="Gifting Hampers">Gifting Hampers</option>
                  <option value="Home Décor">Home Décor</option>
                  <option value="Mixed Assortment">Mixed Assortment</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity needed</label>
                <select id="quantity" required>
                  <option value="" disabled defaultValue>Select quantity</option>
                  <option value="10-25">10 – 25 pieces</option>
                  <option value="25-50">25 – 50 pieces</option>
                  <option value="50-100">50 – 100 pieces</option>
                  <option value="100+">100+ pieces</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="budget">Total budget range</label>
                <select id="budget" required>
                  <option value="" disabled defaultValue>Select budget</option>
                  <option value="Under 5000">Under ₹5,000</option>
                  <option value="5000-15000">₹5,000 – ₹15,000</option>
                  <option value="15000-50000">₹15,000 – ₹50,000</option>
                  <option value="50000+">Above ₹50,000</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Delivery timeline</label>
                <select id="timeline" required>
                  <option value="" disabled defaultValue>When do you need it?</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="1 month">Within 1 month</option>
                  <option value="2-3 months">2 – 3 months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="idea">Tell me more about your order</label>
              <textarea id="idea" rows="4" placeholder="Occasion, preferred colors, custom packaging needs, branding requirements..."></textarea>
            </div>

            <button type="submit" className="btn btn-form submit-btn">
              Send Bulk Enquiry &rarr;
            </button>

            <p className="form-note">
              💬 Prefer to chat? DM directly on{" "}
              <a href="https://www.instagram.com/charancraft_crochet/" target="_blank" rel="noopener noreferrer">
                @charancraft_crochet
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
