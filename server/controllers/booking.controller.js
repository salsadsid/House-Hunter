const { addBookingService, bookingCountService, getBookingService, removeBookingService } = require("../services/booking.services")

exports.addBooking=async(req,res,next)=>{
    try {
        const moddedData= {
            rentedBy:req.body.rentedBy,
            house:req.body.house
        }
        const result2 = await getBookingService(req.body.rentedBy.email)
        if(result2.length==2){
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


exports.getBooking=async(req,res,next)=>{
    try {
        const result = await getBookingService(req.user.email)
        return res.status(200).json({
            status: "Success",
            message:"Successfully get booking info.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Can't get booking.",
            error: error.message
        })
    }
}


exports.removeBooking=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const result = await removeBookingService(id)
        return res.status(200).json({
            status: "Success",
            message:"Successfully Delete booking info.",
            data: result
        })
    }catch(error){
        res.status(400).json({
            status: "Fail",
            message: "Can't Delete booking.",
            error: error.message
        })
    }
}