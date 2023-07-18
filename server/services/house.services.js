const House = require("../models/House");


exports.addHouseService = async (houseInfo) => {
    const result = await House.create(houseInfo)
    return result;
}