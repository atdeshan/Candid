import React, { useState, useEffect } from 'react';
import './Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'TechCorp Global',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    quote: 'Candid Events transformed our annual conference into an unforgettable experience. Their attention to detail and creative vision exceeded all expectations. The team was professional, responsive, and truly understood our brand.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Innovate Studios',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    quote: 'Working with Candid Events was a game-changer for our product launch. They managed every aspect flawlessly and created an atmosphere that perfectly represented our brand identity. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Event Coordinator',
    company: 'Luxe Hotels',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    quote: 'The level of professionalism and creativity from the Candid team is unmatched. They turned our gala into a magical evening that guests are still talking about months later.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Founder',
    company: 'StartUp Hub',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    quote: 'From concept to execution, Candid Events delivered beyond our wildest dreams. Their team is incredibly talented and made the planning process stress-free. Our investors were thoroughly impressed!',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`star ${i < rating ? 'filled' : ''}`}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={i < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <p className="testimonials-label">Testimonials</p>
          <h2 className="testimonials-title">
            What Our Clients
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="testimonials-description">
            Don't just take our word for it - hear from the people we've worked with
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="testimonials-carousel"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="quote-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <div className="stars-container">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="testimonial-quote">{testimonial.quote}</p>

                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="testimonial-nav prev"
            onClick={() => {
              setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              setIsAutoPlaying(false);
            }}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            className="testimonial-nav next"
            onClick={() => {
              setActiveIndex((prev) => (prev + 1) % testimonials.length);
              setIsAutoPlaying(false);
            }}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Google Reviews Badge */}
        <div className="google-reviews-badge">
          <div className="google-reviews-content">
            <div className="google-logo">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div className="google-rating-info">
              <div className="google-rating-score">
                <span className="rating-number">4.9</span>
                <div className="google-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="google-review-count">Based on 127 reviews</p>
            </div>
            <a
              href="https://www.google.com/maps/place/YOUR_BUSINESS_NAME"
              target="_blank"
              rel="noopener noreferrer"
              className="google-reviews-link"
            >
              <span>See all Google Reviews</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
