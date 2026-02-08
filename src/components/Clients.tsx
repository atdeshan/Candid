import React from 'react';
import './Clients.css';
import Anchor from '../assets/clients/anchor.png';
import CocaCola from '../assets/clients/coca_cola.png';
import ElephantHouse from '../assets/clients/elepnat_house.jpg';
import Ginger from '../assets/clients/egb.png';
import HNB from '../assets/clients/hnb.jpg';
import Hemas from '../assets/clients/hemas.jpeg';
import LankaSoy from '../assets/clients/lanka_soy.png';
import Maliban from '../assets/clients/maliban.jpg.webp';
import Sting from '../assets/clients/sting.jpeg';
import Zesta from '../assets/clients/zesta.png';

const clients = [
  { name: 'Coca Cola', logo: 'CC', image: CocaCola },
  { name: 'Maliban', logo: 'M', image: Maliban },
  { name: 'Elephant House', logo: 'EH', image: ElephantHouse },
  { name: 'HNB', logo: 'HNB', image: HNB },
  { name: 'Anchor', logo: 'A', image: Anchor },
  { name: 'Zesta', logo: 'Z', image: Zesta },
  { name: 'Ginger', logo: 'G', image: Ginger },
  { name: 'Hemas', logo: 'H', image: Hemas },
  { name: 'Sting', logo: 'S', image: Sting },
  { name: 'Lanka Soy', logo: 'LS', image: LankaSoy },
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
                  <img src={client.image} alt={client.name} />
                </div>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client, index) => (
              <div key={`second-${index}`} className="client-item">
                <div className="client-logo">
                  <img src={client.image} alt={client.name} />
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
