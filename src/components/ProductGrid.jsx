import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
  { id: 1, name: "Sage green potli bag", price: "549", originalPrice: "699", badge: "Bestseller", badgeColor: "#993556" },
  { id: 2, name: "Blush mini tote", price: "799", badge: "New", badgeColor: "#7C5FA0" },
  { id: 3, name: "Crochet coaster set (4pc)", price: "349", badge: "Custom", badgeColor: "#2A1A3E" },
  { id: 4, name: "Lavender bucket bag", price: "1,199", originalPrice: "1,499", badge: "Bestseller", badgeColor: "#993556" },
  { id: 5, name: "Boho wall hanging", price: "899", badge: "New", badgeColor: "#7C5FA0" },
  { id: 6, name: "Gifting potli set (3pc)", price: "1,099", badge: "Custom", badgeColor: "#2A1A3E" }
];

const ProductGrid = () => {
  const headerFadeRef = useScrollFade();
  const gridFadeRef = useScrollFade();

  return (
    <section id="shop" className="product-section">
      <div className="container">
        <div className="section-header fade-up" ref={headerFadeRef}>
          <h2 className="section-title">Our Collection</h2>
          <p className="section-subtitle">Every piece is hand-knotted, one stitch at a time.</p>
        </div>
        
        <div className="product-grid fade-up" ref={gridFadeRef}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
