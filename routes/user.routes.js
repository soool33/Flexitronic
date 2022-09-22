const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

// creation user
router.post("/register", authController.signUp);

// user crud
router.delete('/:id', userController.deleteUser);

module.exports = router;