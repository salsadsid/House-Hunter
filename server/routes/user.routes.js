const express = require('express');
const router =express.Router()
const userController =  require('../controllers/user.controllers');

router.route('/sign').post(userController.signup)
router.route('/login').post(userController.login)


module.exports = router;

