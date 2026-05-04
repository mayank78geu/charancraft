import React from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          CharanCraft
        </a>

        {/* Desktop Menu */}
        <div className="nav-links">
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#shop" className="nav-link">Custom Orders</a>
          <a href="#about" className="nav-link">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#shop" className="nav-link" onClick={toggleMenu}>Shop</a>
          <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          <a href="#custom-orders" className="nav-link" onClick={toggleMenu}>Custom Orders</a>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
