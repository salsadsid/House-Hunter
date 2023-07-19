const Booking = require("../models/Booking");

exports.addBookingService = async (bookingInfo) => {
    const result = await Booking.create(bookingInfo)
    return result;
}

exports.bookingCountService = async (email) => {
    const result = (await Booking.find({"rentedBy.email":email})).length
    return result;
}