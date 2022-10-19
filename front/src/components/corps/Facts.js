import React from 'react';
import AOS from 'aos'
import PureCounter from '@srexi/purecounterjs/purecounter';

const Facts = () => {
  new PureCounter({
    selector: '.purecounter',
    once: false
  }); 
  AOS.init();

  return (
    <section id="facts"> 
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Nos chiffres clés</h3>
          <p className="section-description">Visualisez notre impact actuel sur le marché</p>
        </div>
        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1" className="purecounter" >2</span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" className="purecounter">3</span>
            <p>Projets</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" className="purecounter">3</span>
            <p>Domaines de compétences</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="6" data-purecounter-duration="1" className="purecounter">6</span>
            <p>Collaborateurs</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Facts;