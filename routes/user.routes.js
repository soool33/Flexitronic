const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const { contact } = require('../controllers/contact.controller');
const userController = require('../controllers/user.controller');
const contactController = require('../controllers/contact.controller')

// Authentification
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user crud
router.get('/:id', userController.userInfo);
router.delete('/:id', userController.deleteUser);

// contact
//router.post('/contact', contactController.contact);

module.exports = router;