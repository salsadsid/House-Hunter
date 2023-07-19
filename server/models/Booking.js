const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const bookingSchema= mongoose.Schema({
    house:{
        name: {
            type: String,
            required: true,
        },
        address:{
            type:String,
            required:true,
        },
        id: {
            type: ObjectId,
            ref: "House",
            required: true
        }
    },
    rentedBy:{
        fullName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        }
    }
})

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

module.exports = Booking;