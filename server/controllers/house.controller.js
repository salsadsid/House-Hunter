const { addHouseService } = require("../services/house.services")



exports.addHouse=async(req,res,next)=>{
    const result = await addHouseService(req.body)
    console.log(result);
}