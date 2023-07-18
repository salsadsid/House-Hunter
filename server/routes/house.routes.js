const express = require('express');
const router =express.Router()
const houseController =  require('../controllers/house.controller');

router.route('/add').post(houseController.addHouse)



module.exports = router;
