import React, { useState } from 'react';
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signup);
    const [signInModal, setSignInModal] = useState(props.signin);

    const handleModals = (e) => {
        if (e.target.id === "register"){
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true);
        }
    }

    return (
        <div>
            <div className="connection-form">
                <div className="form-container">
                    <ul>
                        <li onClick={handleModals} id="login" className={signInModal ? "active-btn" : null}>se connecter</li>
                        <li onClick={handleModals} id="register" className={signUpModal ? "active-btn" : null}>s'inscrire</li>
                    </ul>
                    {signUpModal && <SignUpForm />}
                    {signInModal && <SignInForm />}
                </div>
            </div>
        </div>
    )
}

export default Log;