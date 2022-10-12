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

    <>
      {formSubmit ? (
        <>
          <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (

        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="pseudo">Nom</label>
          <br />
          <input
            type="text"
            name="name"
            id="pseudo"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="from"
            id="email"
            onChange={(e) => setFrom(e.target.value)}
            value={from}
          />
          <div className="email error"></div>
          <br />
          <label htmlFor="password">Sujet</label>
          <br />
          <input
            type="text"
            name="subject"
            id="password"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <div className="password error"></div>
          <br />
          <label htmlFor="password-conf">Votre message</label>
          <br />
          <input
            type="text"
            name="text"
            id="password-conf"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <div className="password-confirm error"></div>
          <br />
          <input type="submit" value="Envoyer" />
        </form>
      )}
    </>
  );
};

export default ContactForm;
