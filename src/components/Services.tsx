import React, { useState } from 'react';
import type { CSSProperties } from 'react';
import './Services.css';
import ServiceModal from './ServiceModal';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
  features: string[];
  detailedDescription: string;
  benefits: string[];
  process: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: '💡',
    title: 'Creative Concepts',
    description: 'Innovative 3D concept designs for brand activations, custom trucks, mobile units, and interactive installations.',
    color: '#EC4899',
    features: ['3D Design', 'Custom Builds', 'Experiential Zones', 'Interactive Installations'],
    detailedDescription: 'Transform your brand vision into reality with our cutting-edge 3D concept designs. We specialize in creating immersive brand activations, custom-built mobile units, and interactive installations that leave lasting impressions. Our team combines technical expertise with creative innovation to deliver unique experiential solutions.',
    benefits: [
      'Stand out with unique, custom-designed installations that perfectly reflect your brand identity',
      'Engage audiences through interactive, hands-on experiences that create memorable moments',
      'Maximize brand visibility with eye-catching 3D designs optimized for photo opportunities',
      'Flexible solutions that can be deployed at multiple locations and events'
    ],
    process: [
      'Discovery: Understanding your brand vision, target audience, and campaign objectives',
      'Concept Development: Creating detailed 3D renders and design mockups for your approval',
      'Engineering & Fabrication: Building custom installations with precision and quality materials',
      'Installation & Activation: On-site setup and ensuring everything runs smoothly',
      'Post-Event Support: Breakdown, storage, and maintenance for future activations'
    ]
  },
  {
    id: 2,
    icon: '🎪',
    title: 'Event Management',
    description: 'End-to-end event planning and execution for corporate conferences, award ceremonies, and celebrations.',
    color: '#A855F7',
    features: ['Conferences', 'Award Ceremonies', 'Product Launches', 'Corporate Events'],
    detailedDescription: 'From intimate gatherings to large-scale conferences, we handle every detail of your event with precision and creativity. Our experienced team manages all aspects of event planning, coordination, and execution to ensure a seamless experience for you and your guests.',
    benefits: [
      'Stress-free planning with dedicated event managers handling all logistics and coordination',
      'Access to premium venues, vendors, and entertainment options through our extensive network',
      'Seamless execution with real-time coordination and problem-solving on event day',
      'Professional audiovisual production and technical support for flawless presentations',
      'Post-event analytics and feedback collection to measure success and ROI'
    ],
    process: [
      'Initial Consultation: Defining event goals, budget, and key requirements',
      'Planning & Design: Venue selection, theme development, and detailed timeline creation',
      'Vendor Coordination: Securing catering, entertainment, AV, and other services',
      'Pre-Event Preparation: Final walkthroughs, rehearsals, and contingency planning',
      'Event Execution: On-site management ensuring everything runs according to plan',
      'Post-Event Wrap-up: Breakdown, feedback collection, and performance reporting'
    ]
  },
  {
    id: 3,
    icon: '🎬',
    title: 'BTL Productions',
    description: 'Below-the-line production services for impactful brand experiences and promotional campaigns.',
    color: '#06B6D4',
    features: ['Campaign Production', 'Promotional Content', 'Brand Stories', 'Visual Media'],
    detailedDescription: 'Create compelling brand narratives with our comprehensive BTL production services. We produce high-quality promotional content, campaign materials, and visual media that resonate with your target audience and drive engagement across all channels.',
    benefits: [
      'High-quality content production that captures your brand essence and messaging',
      'Multi-channel content optimized for social media, digital platforms, and print',
      'Fast turnaround times with professional editing and post-production',
      'Cost-effective production solutions that maximize your marketing budget',
      'Complete creative services from concept to final delivery'
    ],
    process: [
      'Creative Briefing: Understanding campaign objectives and target audience insights',
      'Concept Development: Storyboarding, scripting, and creative direction planning',
      'Pre-Production: Location scouting, talent casting, and logistics coordination',
      'Production: Professional filming with state-of-the-art equipment and crew',
      'Post-Production: Editing, color grading, sound design, and final delivery',
      'Distribution Support: Optimizing content for various platforms and channels'
    ]
  },
  {
    id: 4,
    icon: '🎯',
    title: 'BTL Activations',
    description: 'Strategic brand activations including mall activations, sampling operations, and SMMT campaigns.',
    color: '#F59E0B',
    features: ['Mall Activations', 'Sampling Operations', 'SMMT Campaigns', 'Office Activations'],
    detailedDescription: 'Connect directly with your target audience through strategic brand activations. We design and execute engaging on-ground campaigns that create personal connections, drive product trials, and generate measurable results for your brand.',
    benefits: [
      'Direct consumer engagement that builds brand awareness and loyalty',
      'Measurable results with detailed reporting on reach, engagement, and conversions',
      'Trained brand ambassadors who effectively communicate your message',
      'Strategic location selection to maximize target audience reach',
      'Flexible activation formats adaptable to different venues and objectives'
    ],
    process: [
      'Strategy Development: Identifying target locations, audiences, and activation formats',
      'Planning & Logistics: Securing permits, locations, and coordinating all resources',
      'Team Training: Briefing and training brand ambassadors on messaging and engagement',
      'Execution: Managing on-ground activations with real-time monitoring and support',
      'Data Collection: Gathering consumer insights, feedback, and engagement metrics',
      'Reporting: Comprehensive analysis of activation performance and ROI'
    ]
  },
  {
    id: 5,
    icon: '📢',
    title: 'Outdoor Advertising',
    description: 'High-impact outdoor advertising solutions including billboards, highway branding, and signage.',
    color: '#10B981',
    features: ['Billboards', 'Highway Branding', 'Signage', 'Vehicle Wraps'],
    detailedDescription: 'Amplify your brand presence with strategic outdoor advertising placements. We provide comprehensive outdoor media solutions including premium billboard locations, highway branding, custom signage, and vehicle wraps that maximize visibility and reach.',
    benefits: [
      'Prime locations with high traffic and visibility to reach mass audiences',
      'Weather-resistant, high-quality materials ensuring longevity and impact',
      'Strategic placement based on target demographic and geographic insights',
      'Full-service from design to installation and maintenance',
      'Flexible campaign durations to match your marketing calendar'
    ],
    process: [
      'Consultation: Understanding campaign goals and identifying ideal locations',
      'Site Selection: Recommending premium locations based on traffic and demographics',
      'Design & Approval: Creating impactful creative optimized for outdoor viewing',
      'Production: High-quality printing and fabrication with durable materials',
      'Installation: Professional mounting and setup ensuring safety and quality',
      'Maintenance: Regular inspections and upkeep throughout the campaign duration'
    ]
  },
  {
    id: 6,
    icon: '🏢',
    title: 'Trade Fairs & Exhibitions',
    description: 'Complete exhibition management including booth design, setup, and on-ground activation support.',
    color: '#8B5CF6',
    features: ['Booth Design', 'Exhibition Setup', 'Trade Shows', 'Product Displays'],
    detailedDescription: 'Make a lasting impression at trade fairs and exhibitions with our comprehensive exhibition management services. We design stunning booths, manage all logistics, and provide on-ground support to ensure your brand stands out and achieves its objectives.',
    benefits: [
      'Custom booth designs that attract attention and reflect your brand identity',
      'Complete turnkey solutions from concept to breakdown',
      'Experienced staff to manage all technical and logistical aspects',
      'Strategic layout and flow optimization for maximum visitor engagement',
      'On-site support throughout the exhibition duration'
    ],
    process: [
      'Planning: Understanding exhibition goals, space specifications, and requirements',
      'Design: Creating 3D booth concepts with optimal layout and branding',
      'Fabrication: Building custom structures with quality materials and finishes',
      'Logistics: Coordinating shipping, delivery, and installation schedules',
      'Setup: Professional installation with attention to detail and safety',
      'Event Support: On-site team ensuring smooth operations throughout the event',
      'Breakdown: Efficient dismantling, packing, and storage or disposal'
    ]
  }
];

const Services: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
                  color: isHovered ? service.color : '#737373',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedService(service)}
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
        <a href="mailto:info@candidevents.lk?subject=Project Inquiry - Candid Events" className="cta-button">
          <span>Discuss Your Project</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Services;
