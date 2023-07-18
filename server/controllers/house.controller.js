const { addHouseService, getHousesService } = require("../services/house.services")



exports.addHouse=async(req,res,next)=>{
console.log(req.body);
   try {
    const result = await addHouseService(req.body)
    res.status(200).json({
        status: "Success",
        message: "Successfully Added",
        data: {
            result
        }
    })
   } catch (error) {
    res.status(500).json({
        status: "Fail",
        error,
    })
   }
}


exports.getHouses =async(req,res,next)=>{
    try {
        const properties = await getHousesService(req.user.email)
        console.log(properties.length)
        res.status(200).json({
            status: "Success",
            message: "Sign Up Successful",
            data: {
                properties
            },
          });
    } catch (error) {
        console.log(error)
    }
}