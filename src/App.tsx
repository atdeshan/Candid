import { useState, useEffect } from "react";
import "./App.css";
import "./scroll-animations.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import ExpandableProjectCards from "./components/ExpandableProjectCards";
import candidLogo from "./assets/candid logo.png";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global scroll reveal observer
  useEffect(() => {
    const selector = ".sr-hidden, .sr-left, .sr-right, .sr-scale";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );

    // Wait one frame so layout is complete, then observe
    const raf = requestAnimationFrame(() => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="App">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <Clients />
      <section id="services">
        <Services />
      </section>
      <section id="work">
        <ExpandableProjectCards />
      </section>
      <Testimonials />
      <section id="about">
        <About />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={candidLogo} alt="Candid Events" className="footer-logo-img" />
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Candid Events. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </main>
  );
}

export default App;
