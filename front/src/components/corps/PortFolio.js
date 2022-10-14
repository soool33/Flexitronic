import React from 'react';
import AOS from 'aos';
//import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';

const PortFolio = () => {
  AOS.init();
  GLightbox({selector: '.portfolio-lightbox'});
  
  // window.addEventListener('load', () => {
  //   let portfolioContainer = select('.portfolio-container');
  //   if (portfolioContainer) {
  //     let portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item',
  //       layoutMode: 'fitRows'
  //     });

  //     let portfolioFilters = select('#portfolio-flters li', true);

  //     on('click', '#portfolio-flters li', function(e) {
  //       e.preventDefault();
  //       portfolioFilters.forEach(function(el) {
  //         el.classList.remove('filter-active');
  //       });
  //       this.classList.add('filter-active');

  //       portfolioIsotope.arrange({
  //         filter: this.getAttribute('data-filter')
  //       });
  //       portfolioIsotope.on('arrangeComplete', function() {
  //         AOS.refresh()
  //       });
  //     }, true);
  //   }
  // });

  

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Nos créations</h3>
          <p className="section-description">Consultez les projets que nous avons développés</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">Tout voir</li>
              <li data-filter=".filter-app">Objets connectés</li>
              <li data-filter=".filter-card">Applications web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="./vendor/img/portfolio-1.jpg" className="img-fluid" alt="balance_connectée_ruche" width="2048" height="2048"/>
            <div className="portfolio-info">
              <h4>Balance connectée</h4>
              <p>Supervision des essaims à distance</p>
              <a href="./vendor/img/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Agrandir l'image"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="Voir le projet en détails"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="./vendor/img/portfolio-2.jpg" className="img-fluid" alt="antivol_connecté_ruche" width="2048" height="2048"/>
            <div className="portfolio-info">
              <h4>Antivol connecté</h4>
              <p>Conçu pour être intégré dans une ruche</p>
              <a href="./vendor/img/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Agrandir l'image"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details0.html" className="details-link" title="Voir le projet en détails"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="./vendor/img/portfolio-3.jpg" className="img-fluid" alt="application_web_Miecolo" width="1048" height="1048"/>
            <div className="portfolio-info">
              <h4>Application Miecolo</h4>
              <p>Développement du site internet miecolo.com</p>
              <a href="./vendor/img/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Agrandir l'image"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details00.html" className="details-link" title="Voir le projet en détails"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PortFolio;