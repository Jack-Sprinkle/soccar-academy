const router = require('express').Router();
const mmrController = require('../controllers/mmrController');
const authorize = require('../middleware/authorize');

router
    .route('/:userId')
    .get(authorize, mmrController.getMMR)
    .post(authorize, mmrController.updateMMR);

module.exports = router;