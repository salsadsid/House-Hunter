const { addHouseService, getHousesService, updateAHouseService, getHouseService, getAllHousesService, removeHouseService } = require("../services/house.services")



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
exports.getAllHouses =async(req,res,next)=>{
    try {
        const properties = await getAllHousesService()
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

exports.updateAHouse=async(req,res,next)=>{
    try {
        const { id } = req.params;
        console.log(id);
        console.log(req.body);
        const result = await updateAHouseService(id, req.body);
        console.log(result)
        res.status(200).json({
            status: "Success",
            message:"Successfully update the house info.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Can't update the data.",
            error: error.message
        })
    }
}

exports.getAHouse=async(req,res,next)=>{
   try {
    const id = req.params.id;
    const result = await getHouseService(id)
    res.status(200).json({
        status: "Success",
        message:"Successfully get the house info.",
        data: result
    })
   } catch (error) {
    res.status(400).json({
        status: "Fail",
        message: "Can't get the data.",
        error: error.message
    })
   }
}


exports.removeAHouse=async(req,res,next)=>{
    try{
        const id=req.params.id;
        console.log(id);
        const result = await removeHouseService(id)
        return res.status(200).json({
            status: "Success",
            message:"Successfully Delete House info.",
            data: result
        })
    }catch(error){
        res.status(400).json({
            status: "Fail",
            message: "Can't Delete House.",
            error: error.message
        })
    }
}