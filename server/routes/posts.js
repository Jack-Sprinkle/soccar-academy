const router = require('express').Router();
const postsController = require('../controllers/postsController');
const authorize = require('../middleware/authorize');

router
    .route('/:category')
    .get(authorize, postsController.getPosts)

module.exports = router;