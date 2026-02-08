import React, { useState } from 'react';
import type { CSSProperties } from 'react';
import './Services.css';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: '💡',
    title: 'Creative Concepts',
    description: 'Innovative 3D concept designs for brand activations, custom trucks, mobile units, and interactive installations.',
    color: '#EC4899',
    features: ['3D Design', 'Custom Builds', 'Experiential Zones', 'Interactive Installations']
  },
  {
    id: 2,
    icon: '🎪',
    title: 'Event Management',
    description: 'End-to-end event planning and execution for corporate conferences, award ceremonies, and celebrations.',
    color: '#A855F7',
    features: ['Conferences', 'Award Ceremonies', 'Product Launches', 'Corporate Events']
  },
  {
    id: 3,
    icon: '🎬',
    title: 'BTL Productions',
    description: 'Below-the-line production services for impactful brand experiences and promotional campaigns.',
    color: '#06B6D4',
    features: ['Campaign Production', 'Promotional Content', 'Brand Stories', 'Visual Media']
  },
  {
    id: 4,
    icon: '🎯',
    title: 'BTL Activations',
    description: 'Strategic brand activations including mall activations, sampling operations, and SMMT campaigns.',
    color: '#F59E0B',
    features: ['Mall Activations', 'Sampling Operations', 'SMMT Campaigns', 'Office Activations']
  },
  {
    id: 5,
    icon: '📢',
    title: 'Outdoor Advertising',
    description: 'High-impact outdoor advertising solutions including billboards, highway branding, and signage.',
    color: '#10B981',
    features: ['Billboards', 'Highway Branding', 'Signage', 'Vehicle Wraps']
  },
  {
    id: 6,
    icon: '🏢',
    title: 'Trade Fairs & Exhibitions',
    description: 'Complete exhibition management including booth design, setup, and on-ground activation support.',
    color: '#8B5CF6',
    features: ['Booth Design', 'Exhibition Setup', 'Trade Shows', 'Product Displays']
  }
];

const Services: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    background: '#FFFFFF',
    color: '#1A1A1A',
    fontFamily: "'DM Sans', sans-serif",
    padding: '120px 5%',
    position: 'relative',
    overflow: 'hidden'
  };

  return (
    <div style={containerStyle} id="services">
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Header */}
      <div className="services-header">
        <p className="services-label">What We Do</p>
        <h2 className="services-title">
          Comprehensive Event
          <br />
          <span className="gradient-text">Solutions</span>
        </h2>
        <p className="services-description">
          From concept to execution, we handle every aspect of your event with
          <br className="hide-mobile" />
          meticulous attention to detail and creative excellence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service) => {
          const isHovered = hoveredId === service.id;

          return (
            <div
              key={service.id}
              className="service-card"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                borderColor: isHovered ? `${service.color}50` : '#262626',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: isHovered
                  ? `0 30px 60px -20px ${service.color}40`
                  : '0 0 0 0 transparent'
              }}
            >
              {/* Gradient orb */}
              <div
                className="service-orb"
                style={{
                  background: `radial-gradient(circle, ${service.color}15 0%, transparent 70%)`,
                  transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                  opacity: isHovered ? 1 : 0.5
                }}
              />

              {/* Icon */}
              <div
                className="service-icon"
                style={{
                  background: isHovered ? `${service.color}20` : 'rgba(168, 85, 247, 0.08)',
                  borderColor: isHovered ? `${service.color}50` : 'rgba(168, 85, 247, 0.15)',
                  transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                }}
              >
                <span style={{ fontSize: '32px' }}>{service.icon}</span>
              </div>

              {/* Content */}
              <h3
                className="service-title"
                style={{
                  color: isHovered ? service.color : '#1A1A1A'
                }}
              >
                {service.title}
              </h3>

              <p className="service-description">{service.description}</p>

              {/* Features */}
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isHovered ? service.color : '#525252'}
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <div
                className="service-link"
                style={{
                  color: isHovered ? service.color : '#737373'
                }}
              >
                Learn more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{
                    transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                  }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="services-cta">
        <h3>Have a unique event in mind?</h3>
        <p>We specialize in creating custom experiences tailored to your vision and goals.</p>
        <button className="cta-button">
          <span>Discuss Your Project</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Services;
