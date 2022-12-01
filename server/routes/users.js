const router = require('express').Router();
const usersController = require('../controllers/usersController')

router.post('/register', usersController.register)
// router.post('/login', usersController.login)
// router.get('/current', usersController.current)

module.exports = router;