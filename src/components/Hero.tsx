import React from 'react';
import type { CSSProperties } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #000000 0%, #1A0A2E 50%, #000000 100%)',
    color: '#FAFAFA',
    fontFamily: "'DM Sans', sans-serif",
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 5% 0'
  };

  return (
    <div style={containerStyle}>
      {/* Animated Background Elements */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Floating particles */}
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {/* Badge */}
        <div className="hero-badge">
          <span className="badge-dot" />
          Your Event's Partner
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Transform Your Vision Into
          <br />
          <span className="gradient-text">Extraordinary Events</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          From intimate gatherings to global conferences, we craft immersive experiences
          <br className="hide-mobile" />
          that captivate audiences and exceed expectations.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <a href="mailto:info@candidevents.lk" className="btn btn-primary">
            <span>Start Planning</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#work" className="btn btn-secondary">
            <span>View Our Work</span>
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-item fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="stat-value">200+</div>
            <div className="stat-label">Events</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="stat-value">500K+</div>
            <div className="stat-label">Attendees</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="stat-value">15</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="stat-value">98%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div> */}
    </div>
  );
};

export default Hero;
