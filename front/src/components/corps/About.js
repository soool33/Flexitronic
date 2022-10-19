import React from 'react';
import AOS from 'aos'

const About = () => {
  AOS.init();
  return (
    <section id="about">
      <div className="container d-xl-flex" data-aos="fade-up">
        <div className="row about-container ">

          <h2 className="title">NOTRE VISION</h2>

          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="bi bi-graph-up"></i></div>
            <h4 className="title"><a href="/">L’AMÉLIORATION CONTINUE </a></h4>
            <p className="description">Nos équipes effectuent des veilles régulières pour maîtriser les dernières technologies</p>
          </div>

          <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="bi bi-signpost"></i></div>
            <h4 className="title"><a href="/">L'ACCOMPAGNEMENT À LA CRÉATION</a></h4>
            <p className="description">Nous échangeons constamment pour vous proposer les meilleures solutions</p>
          </div>

          <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="bi bi-check2"></i></div>
            <h4 className="title"><a href="/">LA QUALITÉ D'EXÉCUTION</a></h4>
            <p className="description">Nous collaborons avec des entreprises reconnues mondialement pour vous assurer la fiabilité de nos systèmes</p>
          </div>

        </div>

        <img className="img-fluid ml-2" src="./vendor/img/about-img.jpg" alt='img'/>
      </div>
    </section>
  )
}

export default About;