const express = require('express');
const router =express.Router()
const bookingController =  require('../controllers/booking.controller');
const verifyToken = require('../middlewares/verifyToken');

router.route('/add').post(verifyToken,bookingController.addBooking)
router.route('/get').get(verifyToken,bookingController.getBooking)
router.route('/delete/:id').delete(verifyToken,bookingController.removeBooking)

module.exports= router;