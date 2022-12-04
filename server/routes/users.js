const router = require('express').Router();
const usersController = require('../controllers/usersController');
const authorize = require('../middleware/authorize');

router
    .route('/register')
    .post(usersController.register);
    
router
    .route('/login')
    .post(usersController.login);


router
    .route('/current')
    .get(authorize, usersController.current);

module.exports = router;