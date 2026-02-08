import React, { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import './Navigation.css';
import candidLogo from '../assets/candid logo.png';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'services', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: scrolled ? '16px 5%' : '24px 5%',
    background: scrolled ? 'rgba(10, 10, 11, 0.8)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: "'DM Sans', sans-serif"
  };

  return (
    <nav style={navStyle}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          <img src={candidLogo} alt="Candid Events" className="nav-logo-img" />
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
          <li><a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</a></li>
          <li><a href="#work" className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}>Portfolio</a></li>
          <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
          <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#work" className={activeSection === 'work' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
