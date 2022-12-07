const router = require('express').Router();
const postsController = require('../controllers/postsController');
const authorize = require('../middleware/authorize');

router
    .route('/:category')
    .get(postsController.getPosts)
    .post(authorize, postsController.newPost)

module.exports = router;