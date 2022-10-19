import React from 'react';
import About from './About';
import Devis from './Devis';
import Facts from './Facts';
import Hero from './Hero';
import PortFolio from './PortFolio';
import ServicesSection from './ServicesSection';
import Team from './Team';

const Corps = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Devis />
      <About />
      <Facts />
      <PortFolio />
      <Team />
    </div>
  )
}

export default Corps;