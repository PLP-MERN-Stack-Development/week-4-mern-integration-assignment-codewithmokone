const express = require('express');
const authController = require('../controllers/authCotroller');
const router = express.Router();

// Register
router.post('/register', authController.registerUser);

module.exports = router;