import React, { useState } from 'react';
import './ExpandableProjectCards.css';
import Lightbox from './Lightbox';
import ProjectGalleryModal from './ProjectGalleryModal';

interface Project {
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
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'Coca Cola Annual Sales Conference 2025',
    description: 'End-to-end event management for Coca Cola\'s Annual Business Conference including staging, AV production, and attendee experience.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    tags: ['Event Management', 'Corporate', 'Coca Cola'],
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80'
    ],
    client: 'Coca-Cola Company',
    date: 'January 2025',
    location: 'Colombo, Sri Lanka',
    attendees: '500+ Participants',
    objective: 'To create an immersive and engaging annual sales conference that motivates the sales team, showcases new products, and celebrates achievements while reinforcing brand values.',
    deliverables: [
      'Complete staging and AV production',
      'Registration and attendee management',
      'Branded conference materials',
      'Live streaming and recording',
      'Entertainment and team activities',
      'Catering and hospitality services'
    ],
    results: [
      '98% attendee satisfaction rate',
      'Seamless execution with zero technical issues',
      'Positive feedback on staging and production quality',
      'Increased team motivation and brand engagement'
    ]
  },
  {
    id: 2,
    title: 'Elephant House Christmas Truck Activation',
    description: 'Festive brand activation featuring a custom-designed Christmas truck touring multiple locations with sampling and engagement activities.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
    tags: ['BTL Activation', 'Christmas', 'Brand Experience'],
    gallery: [
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
      'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80',
      'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=800&q=80'
    ],
    client: 'Elephant House',
    date: 'December 2024',
    location: 'Multiple Locations - Colombo, Kandy, Galle',
    attendees: '15,000+ Consumers Engaged',
    objective: 'Create a memorable Christmas brand experience with a custom-designed truck activation to increase brand visibility, drive product sampling, and strengthen emotional connection with consumers during the festive season.',
    deliverables: [
      'Custom Christmas truck design and build',
      'Multi-location tour coordination',
      'Product sampling and distribution',
      'Photo opportunity setups',
      'Brand ambassador team training',
      'Social media content creation'
    ],
    results: [
      '15,000+ direct consumer engagements',
      '10,000+ product samples distributed',
      'High social media engagement with user-generated content',
      'Increased brand recall during festive season'
    ]
  },
  {
    id: 3,
    title: 'HNB SOLO Merchant Activation',
    description: 'Nationwide merchant activation campaign for HNB SOLO including MT activations, food festivals, and QR payment awareness programs.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: ['BTL Activation', 'Banking', 'HNB'],
    gallery: [
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80'
    ],
    client: 'Hatton National Bank',
    date: 'Throughout 2024',
    location: 'Nationwide - Sri Lanka',
    attendees: '50,000+ Merchant Interactions',
    objective: 'Drive QR payment adoption among merchants and consumers through strategic activations at modern trade outlets, food festivals, and merchant locations, increasing HNB SOLO wallet registrations and transaction volume.',
    deliverables: [
      'Modern trade outlet activations',
      'Food festival booth setups',
      'Merchant training and onboarding',
      'QR code distribution and setup',
      'Consumer awareness campaigns',
      'Promotional material distribution'
    ],
    results: [
      '50,000+ merchant interactions',
      '25% increase in QR payment transactions',
      'Significant growth in SOLO wallet registrations',
      'Enhanced merchant and consumer awareness of digital payments'
    ]
  },
  {
    id: 4,
    title: 'Maliban Nutrifix Mall Activation',
    description: 'Interactive mall activation campaign for Maliban Nutrifix featuring product sampling, engagement zones, and brand experience.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    tags: ['Mall Activation', 'FMCG', 'Maliban'],
    link: '#maliban'
  },
  {
    id: 5,
    title: 'Anchor North & East SMMT Campaign',
    description: 'Strategic SMMT activation across Northern and Eastern regions with door-to-door engagement and sampling operations.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    tags: ['SMMT', 'Regional', 'Anchor'],
    link: '#anchor'
  },
  {
    id: 6,
    title: 'Coca Cola Award Ceremony 2024',
    description: 'Prestigious award ceremony celebrating excellence with stunning stage design, lighting, and entertainment production.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    tags: ['Award Ceremony', 'Corporate', 'Coca Cola'],
    link: '#coca-cola-awards'
  },
  {
    id: 7,
    title: 'Zesta Sunshine Awrudu Celebration',
    description: 'Traditional Awrudu celebration featuring Zesta and Watawala sampling with cultural activities and brand engagement.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    tags: ['Cultural Event', 'Sampling', 'Zesta'],
    link: '#zesta-awrudu'
  },
  {
    id: 8,
    title: 'Ginger Office & Town Activations',
    description: 'Multi-location activation campaign across offices, garment factories, institutes, and town centers for maximum brand reach.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    tags: ['Office Activation', 'Town Activation', 'Ginger'],
    link: '#ginger'
  },
  {
    id: 9,
    title: 'Xtra Cricket Tournament 2024',
    description: 'High-energy brand activation at the SL vs Afghanistan One Day Cricket Tournament with fan engagement and sampling.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    tags: ['Sports Event', 'Cricket', 'Xtra'],
    link: '#xtra-cricket'
  },
  {
    id: 10,
    title: 'Hemas Beauty Drive Campaign',
    description: 'Beauty-focused activation campaign with product demonstrations, sampling, and personalized beauty consultations.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    tags: ['Beauty', 'BTL Activation', 'Hemas'],
    link: '#hemas-beauty'
  },
  {
    id: 11,
    title: 'Coke Buddy Launch 2024',
    description: 'Exciting product launch event for Coca Cola\'s Coke Buddy featuring immersive brand experience and media engagement.',
    image: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?w=800&q=80',
    tags: ['Product Launch', 'Corporate', 'Coca Cola'],
    link: '#coke-buddy'
  },
  {
    id: 12,
    title: 'Earth Essence Mothers Day Celebration',
    description: 'Heartwarming Mothers Day activation with gift sampling, photo opportunities, and special tributes to mothers.',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e3571f4f3f?w=800&q=80',
    tags: ['Seasonal', 'Mall Activation', 'Earth Essence'],
    link: '#earth-essence'
  }
];

interface ExpandableProjectCardsProps {
  projects?: Project[];
}

const ExpandableProjectCards: React.FC<ExpandableProjectCardsProps> = ({ projects = defaultProjects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-rotation effect
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextProject();
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, projects.length]);

  const getVisibleProjects = () => {
    const visible = [];
    const totalProjects = projects.length;

    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalProjects) % totalProjects;
      visible.push({
        project: projects[index],
        position: i,
        index: index
      });
    }

    return visible;
  };

  return (
    <section className="project-showcase">
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <div className="project-showcase-header">
        <p className="project-label">Our Portfolio</p>
        <h2 className="project-title">
          Brand Activations
          <br />
          <span className="gradient-text">& Events That Deliver</span>
        </h2>
        <p className="project-description">
          Explore our collection of successful brand activations, events, and campaigns
          <br className="hide-mobile" />
          delivered for leading brands across Sri Lanka
        </p>
      </div>

      <div className="carousel-container">
        <button
          className="carousel-nav carousel-nav-prev"
          onClick={() => { prevProject(); setIsAutoPlaying(false); }}
          aria-label="Previous project"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div className="carousel-track">
          {getVisibleProjects().map(({ project, position, index }) => (
            <div
              key={`${project.id}-${index}`}
              className={`project-card carousel-card ${
                position === 0 ? 'active' :
                position === -1 ? 'prev' : 'next'
              }`}
              onClick={() => {
                if (position !== 0) {
                  goToProject(index);
                  setIsAutoPlaying(false);
                }
              }}
            >
              <div
                className="card-image-wrapper"
                onClick={(e) => {
                  if (position === 0) {
                    e.stopPropagation();
                    setLightboxImage({ src: project.image, title: project.title });
                    setIsAutoPlaying(false);
                  }
                }}
              >
                <img src={project.image} alt={project.title} className="card-image" />
                <div className="card-overlay"></div>
                {position === 0 && (
                  <div className="image-zoom-hint">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                  <div className="card-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                )}

                {position === 0 && (
                  <button
                    className="card-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setIsAutoPlaying(false);
                    }}
                  >
                    <span>View Project</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-nav carousel-nav-next"
          onClick={() => { nextProject(); setIsAutoPlaying(false); }}
          aria-label="Next project"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => { goToProject(index); setIsAutoPlaying(false); }}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <button
        className="autoplay-toggle"
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        aria-label={isAutoPlaying ? 'Pause auto-rotation' : 'Start auto-rotation'}
      >
        {isAutoPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxImage !== null}
        onClose={() => setLightboxImage(null)}
        image={lightboxImage?.src || ''}
        title={lightboxImage?.title}
      />

      {/* Project Gallery Modal */}
      {selectedProject && (
        <ProjectGalleryModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ExpandableProjectCards;
