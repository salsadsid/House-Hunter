const express = require('express');
const router =express.Router()
const houseController =  require('../controllers/house.controller');
const verifyToken = require('../middlewares/verifyToken');


router.route('/add').post(verifyToken,houseController.addHouse)
router.route('/all').get(verifyToken,houseController.getHouses)

router.route('/').get(houseController.getAllHouses)

router.route('/update/:id').patch(verifyToken,houseController.updateAHouse)
router.route('/delete/:id').delete(verifyToken,houseController.removeAHouse)

router.route('/:id').get( houseController.getAHouse)

module.exports = router;
