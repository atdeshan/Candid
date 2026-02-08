import React, { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How far in advance should I book your services?",
    answer: "We recommend booking at least 3-6 months in advance for larger events like corporate conferences or weddings. For smaller events, 4-8 weeks notice is typically sufficient. However, we always try to accommodate last-minute requests when possible."
  },
  {
    id: 2,
    question: "What types of events do you specialize in?",
    answer: "We specialize in a wide range of events including corporate conferences, product launches, gala dinners, weddings, social celebrations, festivals, award ceremonies, and virtual/hybrid events. Our team has extensive experience across all event types and sizes."
  },
  {
    id: 3,
    question: "Do you handle destination events?",
    answer: "Yes! We have organized events across 15+ countries and have a network of trusted vendors worldwide. Whether it's a beach wedding in Bali or a corporate retreat in Switzerland, we can bring your vision to life anywhere in the world."
  },
  {
    id: 4,
    question: "What is included in your event planning packages?",
    answer: "Our packages typically include venue sourcing, vendor coordination, timeline management, budget tracking, on-site coordination, and post-event wrap-up. We customize each package based on your specific needs and can offer full-service planning or day-of coordination."
  },
  {
    id: 5,
    question: "How do you handle event budgets?",
    answer: "We work transparently with your budget from day one. We provide detailed cost breakdowns, track all expenses in real-time, and always look for ways to maximize value without compromising quality. There are no hidden fees in our pricing."
  },
  {
    id: 6,
    question: "Can you accommodate special requests or themes?",
    answer: "Absolutely! Custom themes and unique concepts are our specialty. From immersive theatrical experiences to sustainable eco-friendly events, we love bringing creative visions to life. The more unique your idea, the more excited we get!"
  }
];

const FAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <p className="faq-label">Got Questions?</p>
          <h2 className="faq-title">
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="faq-description">
            Find answers to common questions about our services and process
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={activeId === faq.id}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <p className="cta-text">Still have questions?</p>
          <a href="mailto:hello@candidevents.com" className="cta-link">
            <span>Get in touch</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
