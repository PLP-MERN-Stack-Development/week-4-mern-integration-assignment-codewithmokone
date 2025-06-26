const { body, param } = require('express-validator');

exports.validateCategory = [
    body('title')
        .notEmpty()
        .withMessage('Title is required')
        .isLength({ min: 2 })
        .withMessage('Title must be at least 2 characters long'),
    
    body('description')
        .optional()
        .isLength({ max: 500 })
        .withMessage('Description can be at most 500 characters'),
];

exports.validateCategoryId = [
    param('id')
        .isMongoId()
        .withMessage('Invalid category ID'),
];