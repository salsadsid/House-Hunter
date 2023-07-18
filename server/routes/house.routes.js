const express = require('express');
const router =express.Router()
const houseController =  require('../controllers/house.controller');
const verifyToken = require('../middlewares/verifyToken');


router.route('/add').post(houseController.addHouse)
router.route('/all').get(verifyToken, houseController.getHouses)



module.exports = router;
