import React, { useState } from 'react';
import Header from './components/Header';
import Offer from './components/Offer';
import About from './components/About';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Reviews from './components/Reviews';
import FormOrder from './components/FormOrder';
import Contacts from './components/Contacts';
import FormOrder from './components/FormOrder';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('offer');

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const headerOffset = 120; 
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setActiveSection(sectionId);
};

  return (
    <div className="App">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Offer id="offer" onView={() => setActiveSection('offer')} />
        <About id="about" onView={() => setActiveSection('about')} />
        <Advantages id="advantages" onView={() => setActiveSection('advantages')} />
        <Services id="services" onView={() => setActiveSection('services')} />
        <Reviews id="reviews" onView={() => setActiveSection('reviews')} />
        <FormOrder id="form-order" onView={() => setActiveSection('form-order')} />
        <Contacts id="contacts" onView={() => setActiveSection('contacts')} />
      </main>
      <Footer />
    </div>
  );
}

export default App;