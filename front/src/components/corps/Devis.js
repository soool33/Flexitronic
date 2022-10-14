import React from 'react';


const Devis = () => {
  return (
    <section id="call-to-action">
      <div className="container">
        <div className="row" data-aos="zoom-in">
          <div className="col-lg-9 text-center text-lg-start">
            <h3 className="cta-title">Demandez votre devis</h3>
            <p className="cta-text"> Nous adaptons nos services en fonction de vos besoins</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="/">Demande de devis gratuit</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Devis;