const router = require('express').Router();
const usersController = require('../controllers/usersController');
const authorize = require('../middleware/authorize');

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.get('/current', authorize, usersController.current);

module.exports = router;