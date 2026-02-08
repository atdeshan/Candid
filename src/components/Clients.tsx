import React from 'react';
import './Clients.css';

const clients = [
  { name: 'Coca Cola', logo: 'CC' },
  { name: 'Maliban', logo: 'M' },
  { name: 'Elephant House', logo: 'EH' },
  { name: 'HNB', logo: 'HNB' },
  { name: 'Anchor', logo: 'A' },
  { name: 'Zesta', logo: 'Z' },
  { name: 'Ginger', logo: 'G' },
  { name: 'Hemas', logo: 'H' },
  { name: 'Sting', logo: 'S' },
  { name: 'Lanka Soy', logo: 'LS' },
];

const Clients: React.FC = () => {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <p className="clients-label">Trusted By Leading Brands</p>

        <div className="clients-marquee">
          <div className="clients-track">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`first-${index}`} className="client-item">
                <div className="client-logo">
                  <span className="client-initial">{client.logo}</span>
                </div>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client, index) => (
              <div key={`second-${index}`} className="client-item">
                <div className="client-logo">
                  <span className="client-initial">{client.logo}</span>
                </div>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
