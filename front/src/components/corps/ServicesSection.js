import React from 'react';
import AOS from 'aos'

const ServicesSection = () => {
  AOS.init();
  return (
    <section id="services">
      <div className="container" data-aos="fade-up">
        <div className="row about-container">
          <div className="section-header">
            <h3 className="section-title">NOS SERVICES</h3>
            <p className="section-description">Toutes les fabrications s’effectuent en interne, par nos équipes,<br/> de l’étude de faisabilité à la phase de tests, en passant par l’industrialisation.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href="/"><i className="bi bi-columns-gap"></i></a></div>
                <h4 className="title"><a href="/">ÉTUDE & CONCEPTION ÉLECTRONIQUE </a></h4>
                <p className="description">Définissons l’architecture logicielle et matérielle optimale à votre structure et votre domaine d'activité <br/> (Étude de faisabilité, CAO électronique)</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href="/"><i className="bi bi-wifi"></i></a></div>
                <h4 className="title"><a href="/">DESIGN HARDWARE ET ROUTAGE</a></h4>
                <p className="description">Modélisons vos projets en schématisant votre carte éléctronique avec les composants adaptés <br/> (dessin de schémas électroniques)</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href="/"><i className="bi bi-tools"></i></a></div>
                <h4 className="title"><a href="/">PROTOTYPAGE</a></h4>
                <p className="description">Concrétisons vos idées afin d'éviter les contraintes physiques, techniques ou financières non anticipées (Preuve de concept) </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href="/"><i className="bi bi-cpu"></i></a></div>
                <h4 className="title"><a href="/">INDUSTRIALISATION ET FABRICATION</a></h4>
                <p className="description">Produisons vos réalisation de cartes électroniques en petite ou grandes séries <br/> (Réalisation de test en amont) </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href="/"><i className="bi bi-router"></i></a></div>
                <h4 className="title"><a href="/">OBJETS CONNECTÉS IOT</a></h4>
                <p className="description">Modernisons vos équipements en améliorant ou en créant de nouveaux produits connectés <br/> (Gestion de la totalité du projet) </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon"><a href="/"><i className="bi bi-file-earmark-code"></i></a></div>
                <h4 className="title"><a href="/">DÉVELOPPEMENT SOFTWARE</a></h4>
                <p className="description">Perfectionnons votre programmation grâce au langage C++ et C embarqué pour une rapidité et une puissance d'exécution assurées</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesSection;