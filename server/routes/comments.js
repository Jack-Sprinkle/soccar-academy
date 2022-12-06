const router = require('express').Router();
const commentsController = require('../controllers/commentsController');
const authorize = require('../middleware/authorize');

router
    .route('/:postId')
    .get(authorize, commentsController.getComments)

module.exports = router;