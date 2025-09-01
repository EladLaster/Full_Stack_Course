const { body } = require('express-validator');

const validComment = [
  body('content')
    .isString().withMessage('Content must be a string')
    .isLength({ min: 5, max: 500 }).withMessage('Content must be 5-500 chars'),
  body('email')
    .isEmail().withMessage('Must be a valid email'),
];

module.exports = validComment;
