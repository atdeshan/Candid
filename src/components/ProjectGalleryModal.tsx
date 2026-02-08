import React, { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import './ProjectGalleryModal.css';

interface ProjectGalleryModalProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags?: string[];
    gallery?: string[];
    client?: string;
    date?: string;
    location?: string;
    attendees?: string;
    objective?: string;
    deliverables?: string[];
    results?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectGalleryModal: React.FC<ProjectGalleryModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Combine main image with gallery images
  const allImages = [project.image, ...(project.gallery || [])];

  // Keyboard navigation and modal state management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Scroll modal to top when opened
      setTimeout(() => {
        const modalContent = document.querySelector('.project-modal-content');
        if (modalContent) {
          modalContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, currentImageIndex]);

  // Reset image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setImageLoaded(false);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setImageLoaded(false);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(10px)',
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
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '1200px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'scroll',
          overflowX: 'hidden',
          position: 'relative',
          boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5)',
          animation: 'slideUp 0.3s ease-out'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="project-modal-close-btn"
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

        {/* Gallery Section */}
        <div style={{ position: 'relative', background: '#000000' }}>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            {/* Loading indicator */}
            {!imageLoaded && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 5
                }}
              >
                <div className="image-loader" />
              </div>
            )}

            <img
              src={allImages[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              onLoad={() => setImageLoaded(true)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: imageLoaded && !isTransitioning ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                transform: isTransitioning ? 'scale(1.05)' : 'scale(1)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '0.5s'
              }}
            />

            {/* Image counter */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0, 0, 0, 0.7)',
                color: '#FFFFFF',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </div>

          {/* Navigation arrows */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="gallery-nav gallery-nav-prev"
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="gallery-nav gallery-nav-next"
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {allImages.length > 1 && (
          <div
            style={{
              display: 'flex',
              gap: '8px',
              padding: '16px',
              overflowX: 'auto',
              background: '#F5F5F5',
              borderBottom: '1px solid #E5E5E5'
            }}
          >
            {allImages.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentImageIndex && !isTransitioning) {
                    setIsTransitioning(true);
                    setImageLoaded(false);
                    setTimeout(() => {
                      setCurrentImageIndex(index);
                      setIsTransitioning(false);
                    }, 300);
                  }
                }}
                style={{
                  flexShrink: 0,
                  width: '80px',
                  height: '60px',
                  border: index === currentImageIndex ? '3px solid #A855F7' : '3px solid transparent',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: index === currentImageIndex ? 1 : 0.6,
                  transform: index === currentImageIndex ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </button>
            ))}
          </div>
        )}

        {/* Project Details */}
        <div style={{ padding: '40px' }}>
          {/* Header */}
          <div style={{ marginBottom: '24px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#1A1A1A',
                margin: '0 0 12px 0',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              {project.title}
            </h2>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '6px 14px',
                      background: '#A855F710',
                      color: '#A855F7',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: '500',
                      border: '1px solid #A855F730'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <p style={{ fontSize: '16px', color: '#525252', lineHeight: '1.6', margin: 0 }}>
              {project.description}
            </p>
          </div>

          {/* Project Meta Info */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '32px',
              padding: '24px',
              background: '#F9FAFB',
              borderRadius: '16px'
            }}
          >
            {project.client && (
              <div>
                <div style={{ fontSize: '13px', color: '#737373', fontWeight: '500', marginBottom: '4px' }}>
                  Client
                </div>
                <div style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: '600' }}>
                  {project.client}
                </div>
              </div>
            )}
            {project.date && (
              <div>
                <div style={{ fontSize: '13px', color: '#737373', fontWeight: '500', marginBottom: '4px' }}>
                  Date
                </div>
                <div style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: '600' }}>
                  {project.date}
                </div>
              </div>
            )}
            {project.location && (
              <div>
                <div style={{ fontSize: '13px', color: '#737373', fontWeight: '500', marginBottom: '4px' }}>
                  Location
                </div>
                <div style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: '600' }}>
                  {project.location}
                </div>
              </div>
            )}
            {project.attendees && (
              <div>
                <div style={{ fontSize: '13px', color: '#737373', fontWeight: '500', marginBottom: '4px' }}>
                  Attendees
                </div>
                <div style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: '600' }}>
                  {project.attendees}
                </div>
              </div>
            )}
          </div>

          {/* Objective */}
          {project.objective && (
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
                Project Objective
              </h3>
              <p style={{ fontSize: '15px', color: '#525252', lineHeight: '1.6' }}>
                {project.objective}
              </p>
            </section>
          )}

          {/* Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
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
                Key Deliverables
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                {project.deliverables.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 16px',
                      background: '#FFFFFF',
                      border: '1px solid #E5E5E5',
                      borderRadius: '12px'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: '500' }}>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Results */}
          {project.results && project.results.length > 0 && (
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
                Results & Impact
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {project.results.map((result, index) => (
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
                    <span style={{ color: '#A855F7', fontSize: '20px', flexShrink: 0 }}>•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CTA */}
          <div
            style={{
              marginTop: '40px',
              padding: '32px',
              background: 'linear-gradient(135deg, #A855F708 0%, #A855F703 100%)',
              borderRadius: '16px',
              border: '1px solid #A855F720',
              textAlign: 'center'
            }}
          >
            <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#1A1A1A', marginBottom: '8px' }}>
              Interested in a similar project?
            </h4>
            <p style={{ fontSize: '14px', color: '#737373', marginBottom: '20px' }}>
              Let's discuss how we can create something amazing for your brand
            </p>
            <a
              href={`mailto:info@candidevents.lk?subject=Inquiry about ${project.title}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 32px',
                background: '#A855F7',
                color: '#FFFFFF',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              className="project-modal-cta-btn"
            >
              <span>Get in Touch</span>
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

export default ProjectGalleryModal;
