import React from 'react';
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
      <Facts />
      <PortFolio />
      <Team />
    </div>
  )
}

export default Corps;