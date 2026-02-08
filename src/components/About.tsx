import React from 'react';
import type { CSSProperties } from 'react';
import './About.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  icon: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Rumesh Chandrakumar',
    role: 'Director',
    bio: 'Leading strategic partnerships and business development with a vision for innovative brand experiences.',
    icon: '👨‍💼'
  },
  {
    id: 2,
    name: 'Yasara Herath',
    role: 'Director',
    bio: 'Driving creative excellence and operational efficiency across all brand activation campaigns.',
    icon: '👩‍💼'
  }
];

const values = [
  {
    id: 1,
    title: 'Innovative Concepts',
    description: 'Creative and unique concepts for events and brand activations that stand out.',
    icon: '💡'
  },
  {
    id: 2,
    title: 'Brand Understanding',
    description: 'We understand brands from a brand\'s perspective, not just BTL execution.',
    icon: '🎯'
  },
  {
    id: 3,
    title: 'Regional Expertise',
    description: 'Strong resources and connections across North and East regions of Sri Lanka.',
    icon: '🗺️'
  },
  {
    id: 4,
    title: 'Long-term Partnerships',
    description: 'Permanent promoter deployment projects with comprehensive tracking and monitoring.',
    icon: '🤝'
  }
];

const About: React.FC = () => {
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
    <div style={containerStyle} id="about">
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Header */}
      <div className="about-header">
        <p className="about-label">Who We Are</p>
        <h2 className="about-title">
          Your Event's
          <br />
          <span className="gradient-text">Partner</span>
        </h2>
        <p className="about-description">
          Candid Events is a full-service event management and BTL activation agency
          <br className="hide-mobile" />
          delivering impactful brand experiences across Sri Lanka.
        </p>
      </div>

      {/* Story Section */}
      <div className="about-story">
        <div className="story-content">
          <h3>Our Story</h3>
          <p>
            Candid Events has established itself as a trusted partner for leading brands in Sri Lanka.
            We've had the privilege of working with industry giants like Coca Cola, Maliban, Elephant House, HNB, and many more
            to create activations and events that drive real results.
          </p>
          <p>
            Our approach combines innovative creative concepts with flawless on-ground execution. From mall activations and SMMT campaigns
            to large-scale corporate conferences and award ceremonies, we bring the same level of dedication and expertise to every project.
            With strong resources in the North and East regions and government sector collaborations, we deliver nationwide impact.
          </p>
        </div>
        <div className="story-stats">
          <div className="story-stat-item">
            <div className="story-stat-number">14+</div>
            <div className="story-stat-label">Years Experience</div>
          </div>
          <div className="story-stat-item">
            <div className="story-stat-number">200+</div>
            <div className="story-stat-label">Events Delivered</div>
          </div>
          <div className="story-stat-item">
            <div className="story-stat-number">500K+</div>
            <div className="story-stat-label">Happy Attendees</div>
          </div>
          <div className="story-stat-item">
            <div className="story-stat-number">98%</div>
            <div className="story-stat-label">Client Retention</div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <h3 className="values-title">Our Strengths</h3>
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h4 className="value-name">{value.title}</h4>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h3 className="team-title">Meet Our Team</h3>
        <p className="team-subtitle">
          Talented professionals dedicated to making your event exceptional
        </p>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">{member.icon}</div>
              <h4 className="team-name">{member.name}</h4>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="about-cta">
        <h3>Ready to work with us?</h3>
        <p>Let's create something extraordinary together.</p>
        <button className="about-cta-button">
          <span>Get In Touch</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default About;
