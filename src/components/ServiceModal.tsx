import React, { useEffect } from 'react';
import type { CSSProperties } from 'react';
import './ServiceModal.css';

interface ServiceModalProps {
  service: {
    id: number;
    icon: string;
    title: string;
    description: string;
    color: string;
    features: string[];
    detailedDescription?: string;
    benefits?: string[];
    process?: string[];
    caseStudies?: { title: string; description: string }[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  // Close on Escape key and handle modal state
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      // Scroll modal to top when opened
      setTimeout(() => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
          modalContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(8px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    animation: 'fadeIn 0.3s ease-out'
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'scroll',
          overflowX: 'hidden',
          position: 'relative',
          boxShadow: `0 50px 100px -20px ${service.color}40`,
          border: `2px solid ${service.color}30`,
          animation: 'slideUp 0.3s ease-out'
        }}
      >
        {/* Header */}
        <div
          style={{
            background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
            padding: '40px',
            borderBottom: `1px solid ${service.color}20`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="modal-close-btn"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              zIndex: 10
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Icon and Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: `${service.color}20`,
                border: `2px solid ${service.color}50`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px'
              }}
            >
              {service.icon}
            </div>
            <div>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: service.color,
                  margin: '0 0 8px 0',
                  fontFamily: "'DM Sans', sans-serif"
                }}
              >
                {service.title}
              </h2>
              <p style={{ fontSize: '16px', color: '#737373', margin: 0 }}>
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '40px' }}>
          {/* Detailed Description */}
          {service.detailedDescription && (
            <section style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '12px',
                  fontFamily: "'DM Sans', sans-serif"
                }}
              >
                Overview
              </h3>
              <p style={{ fontSize: '16px', color: '#525252', lineHeight: '1.6' }}>
                {service.detailedDescription}
              </p>
            </section>
          )}

          {/* Key Features */}
          <section style={{ marginBottom: '32px' }}>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1A1A1A',
                marginBottom: '16px',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              Key Features
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 16px',
                    background: `${service.color}08`,
                    borderRadius: '12px',
                    border: `1px solid ${service.color}20`
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <section style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '16px',
                  fontFamily: "'DM Sans', sans-serif"
                }}
              >
                Benefits
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {service.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      fontSize: '15px',
                      color: '#525252',
                      lineHeight: '1.5'
                    }}
                  >
                    <span style={{ color: service.color, fontSize: '20px', flexShrink: 0 }}>•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Process */}
          {service.process && service.process.length > 0 && (
            <section style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '16px',
                  fontFamily: "'DM Sans', sans-serif"
                }}
              >
                Our Process
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {service.process.map((step, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: service.color,
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '600',
                        fontSize: '14px',
                        flexShrink: 0
                      }}
                    >
                      {index + 1}
                    </div>
                    <p style={{ fontSize: '15px', color: '#525252', lineHeight: '1.6', margin: '4px 0 0 0' }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div
            style={{
              marginTop: '40px',
              padding: '32px',
              background: `linear-gradient(135deg, ${service.color}08 0%, ${service.color}03 100%)`,
              borderRadius: '16px',
              border: `1px solid ${service.color}20`,
              textAlign: 'center'
            }}
          >
            <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#1A1A1A', marginBottom: '8px' }}>
              Ready to get started?
            </h4>
            <p style={{ fontSize: '14px', color: '#737373', marginBottom: '20px' }}>
              Let's discuss how we can bring your vision to life
            </p>
            <a
              href="mailto:info@candidevents.lk"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 32px',
                background: service.color,
                color: '#FFFFFF',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              className="modal-cta-btn"
            >
              <span>Contact Us</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
