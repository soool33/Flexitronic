module.exports.signUpErrors = (err) => {
    let errors = { pseudo: "", email: "", password: "" };
  
    if (err.message.includes("pseudo"))
        errors.pseudo = "Pseudo inexistant.";
  
    if (err.message.includes("email")) errors.email = "Email incorrect";
  
    if (err.message.includes("password"))
        errors.password = "Le mot de passe doit faire 6 caractères minium";
  
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
        errors.pseudo = "Ce pseudo est déjà pris";
  
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
        errors.email = "Cet email est déjà enregistré";
    return errors;
};
  

module.exports.signInErrors = (error) => {
    var errors = { email: "", password: ""}
  
    if (error.message.includes("email")) errors.email = "Email inconnu";
    
    if (error.message.includes("password")) errors.password = "Le mot de passe ne correspond pas"
  
    return errors;
}