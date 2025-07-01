const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoriesController');
const { validateCategory, validateCategoryId } = require('../middleware/validator');
const validate = require('../middleware/validate');

router.post('/', validateCategory, validate, categoryController.createCategory);
router.get('/:category', categoryController.fetchCategory);
router.put('/:id', validateCategoryId, validate, categoryController.updateCategory);

module.exports = router;