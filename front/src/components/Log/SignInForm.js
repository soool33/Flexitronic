import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `http://localhost:3303/api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/contact";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container mt-5'>
      <div className="row">
        <form action="" onSubmit={handleLogin} id="sign-up-form" className="offset-lg-2 col-lg-8">

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          <br />
          <div className="text-center">
            <input type="submit" value="Se connecter"/>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default SignInForm;