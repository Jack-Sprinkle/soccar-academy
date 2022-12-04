const router = require('express').Router();
const coachController = require('../controllers/coachController');
const authorize = require('../middleware/authorize');

router
    .route('/')
    .get(authorize, coachController.getCoaches)

module.exports = router;