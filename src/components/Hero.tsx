import React, { useState, useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import './Hero.css';

const statTargets = [
  { target: 200, suffix: '+', label: 'Events' },
  { target: 500, suffix: 'K+', label: 'Attendees' },
  { target: 15, suffix: '', label: 'Countries' },
  { target: 98, suffix: '%', label: 'Satisfaction' },
];

const Hero: React.FC = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounts(statTargets.map((s) => Math.round(eased * s.target)));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
        <div className="hero-stats" ref={statsRef}>
          {statTargets.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <div className="stat-divider" />}
              <div className="stat-item">
                <div className="stat-value">
                  {counts[i]}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </React.Fragment>
          ))}
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
