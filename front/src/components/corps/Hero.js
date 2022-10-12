import React from 'react';
import AOS from 'aos'

const Hero = () => {
  AOS.init();
  return (
    <section id="hero">
      <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Oser l'innovation <br /> pour optimiser votre activité </h1>
        <h2>Grâce à notre bureau d'études électronique</h2>
        <a href="#services" className="btn-get-started">VOIR NOS OFFRES</a>
      </div>
    </section>
  )
}

export default Hero;