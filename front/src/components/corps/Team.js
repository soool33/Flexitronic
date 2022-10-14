import React from 'react';
import AOS from 'aos';

const Team = () => {
  AOS.init();
  return (
    <section id="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Notre équipe</h3>
          <p className="section-description">Découvrez les collaborateurs de l'entreprise</p>
        </div>
        <div className="row justify-content-center">

          <div className="col-lg-3 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="pic"><img src="./vendor/img/team-1.jpg" alt="Hugo_Delavaud"/></div>
              <h4>Hugo Delavaud</h4>
              <span>CEO - Chef de la Direction</span>
              <div className="social">
                <a href="https://www.linkedin.com/in/hugo-delavaud-1aaa74b4/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="pic"><img src="./vendor/img/team-2.jpg" alt="Quentin_Valenti" width="304" height="304"/></div>
              <h4>Quentin Valenti</h4>
              <span>CTO - Directeur des Nouvelles Technologies</span>
              <div className="social">
                <a href="https://www.linkedin.com/in/quentin-valenti-651137178/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="pic"><img src="./vendor/img/team-3.jpg" alt="Thomas_Valenti" width="304" height="304"/></div>
              <h4>Thomas Valenti</h4>
              <span>CFO - Directeur Administratif et Financier</span>
              <div className="social">
                <a href="https://www.linkedin.com/in/thomas-valenti-7b8568210/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;