import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.badge && (
          <span className="product-badge" style={{ color: product.badgeColor }}>
            {product.badge}
          </span>
        )}
        <div className="product-image-placeholder">
          <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 A40 40 0 1 1 49.9 10" fill="none" stroke="rgba(124, 95, 160, 0.3)" strokeWidth="4" strokeDasharray="10 5" />
            <circle cx="50" cy="50" r="20" fill="rgba(201, 174, 232, 0.4)" />
            <path d="M40 50 Q50 30 60 50 Q70 70 50 70 Q30 70 40 50" fill="none" stroke="rgba(124, 95, 160, 0.5)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-pricing">
          <span className="product-price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="product-original-price">₹{product.originalPrice}</span>
          )}
        </div>
        <button className="btn btn-form product-add-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
