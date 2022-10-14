import React, { useState } from 'react' 
import axios from "axios";

const ContactForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const nameError = document.querySelector(".pseudo.error");
    const fromError = document.querySelector(".email.error");
    const subjectError = document.querySelector(".password.error");
    const textError = document.querySelector(
      ".password-confirm.error"
    );


    if (!name) nameError.innerHTML = "veuillez saisir votre nom"
    if (!from) fromError.innerHTML = "veuillez saisir votre email"
    if (!subject) subjectError.innerHTML = "veuillez indiquer le sujet"
    // if (password !== controlPassword || !terms.checked) {
    //     if (password !== controlPassword)
    //         passwordConfirmError.innerHTML =
    //             "Les mots de passe ne correspondent pas";

    //     if (!terms.checked)
    //         terms = "Veuillez valider les conditions générales";
    // } 
    else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/contact`,
        data: {
          name,
          from,
          subject,
          text,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            nameError.innerHTML = res.data.errors.name;
            fromError.innerHTML = res.data.errors.from;
            subjectError.innerHTML = res.data.errors.subject;
            textError.innerHTML = res.data.errors.text;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Contact</h3>
          <p className="section-description">Retrouvez-nous </p>
        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5660.8362021740195!2d-0.5562774829927346!3d44.81304629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7df72cfff31ae12f!2zQ2l0w6kgTnVtw6lyaXF1ZQ!5e0!3m2!1sfr!2sfr!4v1654760431469!5m2!1sfr!2sfr" title="carte" allowFullScreen></iframe>

      <div className="container mt-5">
        <div className="row justify-content-center">

          <div className="col-lg-3 col-md-4">

            <div className="info">
              <div>
                <i className="bi bi-geo-alt"></i>
                <p>2 Rue Marc Sangnier <br/>33130 Bègles</p>
              </div>

              <div>
                <i className="bi bi-envelope"></i>
                <p><a href="mailto:contact@flexitronic.com">contact@flexitronic.com</a></p>
              </div>

              <div>
                <i className="bi bi-phone"></i>
                <p>06 67 07 11 05</p>
              </div>
            </div>

            <div className="social-links">
              <a href="/" target="_blank" rel="noopener noreferrer" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>

          </div>

          <div className="col-lg-5 col-md-8">
            <div className="form">
            <>
              {formSubmit ? (
                <>
                  <span></span>
                  <h4 className="success">
                    Message envoyé avec succes, nous vous répondrons dans les plus brefs delais
                  </h4>
                </>
              ) : (

                <form action="" onSubmit={handleRegister} id="sign-up-form" className='php-email-form'>
                  <div className='form-group'>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="votre nom"
                      id="pseudo"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <div className="pseudo error"></div>
                  </div>
                  <div className='form-group mt-3'>
                    <input
                      className="form-control"
                      type="text"
                      name="from"
                      id="email"
                      placeholder="Votre Email"
                      onChange={(e) => setFrom(e.target.value)}
                      value={from}
                    />
                    <div className="email error"></div>
                  </div>

                  <div className='form-group mt-3'>
                    <input
                      className="form-control"
                      type="text"
                      name="subject"
                      id="password"
                      placeholder="Sujet"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                    />
                    <div className="password error"></div>
                  </div>

                  <div className='form-group mt-3'>
                    <textarea
                      className="form-control"
                      type="text"
                      name="text"
                      placeholder="message"
                      id="password-conf"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                    />
                    <div className="password-confirm error"></div>
                  </div>
                  <div className='form-group mt-3'></div>
                  <div className="text-center"><button type="submit">Envoyer le message</button></div>
                </form>
              )}
            </>
            </div>
          </div>

        </div>
      </div>
    </section>
    
  );
};

export default ContactForm;
