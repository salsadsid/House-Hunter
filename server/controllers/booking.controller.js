const { addBookingService, bookingCountService } = require("../services/booking.services")

exports.addBooking=async(req,res,next)=>{
    try {
        const moddedData= {
            rentedBy:req.body.rentedBy,
            house:req.body.house
        }
        const result2 = await bookingCountService(req.body.rentedBy.email)
        if(result2==2){
           return res.status(400).json({
                status: "Fail",
                message: "Already Booked two houses.",
            })
        }
        const result= await addBookingService(moddedData)

        return res.status(200).json({
            status: "Success",
            message:"Successfully add booking info.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Can't add booking.",
            error: error.message
        })
    }
}