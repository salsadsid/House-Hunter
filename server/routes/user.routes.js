const express = require('express');
const router =express.Router()
const userController =  require('../controllers/user.controllers');

router.route('/sign').post(userController.signup)


module.exports = router;

