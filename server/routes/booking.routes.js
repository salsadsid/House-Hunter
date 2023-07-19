const express = require('express');
const router =express.Router()
const bookingController =  require('../controllers/booking.controller');
const verifyToken = require('../middlewares/verifyToken');

router.route('/add').post(verifyToken,bookingController.addBooking)

module.exports= router;