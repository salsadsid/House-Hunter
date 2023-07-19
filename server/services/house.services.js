const House = require("../models/House");


exports.addHouseService = async (houseInfo) => {
    const result = await House.create(houseInfo)
    return result;
}

exports.getHousesService=async(userEmail)=>{
    console.log(userEmail);
    const result =await House.find({"owner.email":userEmail})
    return result
}

exports.getHousesService=async(userEmail)=>{
    console.log(userEmail);
    const result =await House.find({"owner.email":userEmail})
    return result
}

exports.updateAHouseService = async (houseId, data) => {
    const result = await House.updateOne({ _id: houseId }, { $set: data }) 
    return result
}
