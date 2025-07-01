const express = require('express');
const authController = require('../controllers/authCotroller');
const router = express.Router();

// Register
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/profile', authController.profile);

module.exports = router;