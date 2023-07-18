const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const houseSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"]
    },
    address:{
        type:String,
        required:[true,"Address is Required"]
    },
    city:{
        type:String,
        required:[true,"City is Required"]
    },
    bedroom:{
        type:String,
        required:[true,"Bedroom Number is Required"]
    },
    roomSize:{
        type:String,
        required:[true,"Room Size is Required"]
    },
    picture:{
        type:String,
        required:[true,"Picture URL is Required"]
    },
    availableDate:{
        type:String,
        required:[true,"Available Date is Required"]
    },
    rent:{
        type:String,
        required:[true,"Rent Per month is Required"]
    },
    phone:{
        type:String,
        required:[true,"Phone number is Required"]
    },
    description:{
        type:String,
        required:[true,"Description is Required"]
    },
    owner:{
        fullName: {
            type: String,
            required: true,
        },
        email:{
            type:String,
            required:true,
        },
        id: {
            type: ObjectId,
            ref: "User",
            required: true
        }
    }
})

const House = mongoose.models.House || mongoose.model("House", houseSchema);

module.exports = House;