import React, { useEffect } from 'react';
import './Lightbox.css';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title?: string;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, image, title }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title || 'Lightbox image'} className="lightbox-image" />
        {title && <p className="lightbox-title">{title}</p>}
      </div>

      <p className="lightbox-hint">Press ESC or click outside to close</p>
    </div>
  );
};

export default Lightbox;
