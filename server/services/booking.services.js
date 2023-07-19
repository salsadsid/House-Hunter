const Booking = require("../models/Booking");

exports.addBookingService = async (bookingInfo) => {
    const result = await Booking.create(bookingInfo)
    return result;
}

exports.getBookingService = async (email) => {
    const result = await Booking.find({"rentedBy.email":email})
    return result;
}
exports.removeBookingService = async (id) => {
    const result = (await Booking.deleteOne({_id:id}))
    return result;
}

