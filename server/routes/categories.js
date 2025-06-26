const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoriesController');

router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);