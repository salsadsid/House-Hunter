const { signupService } = require("../services/user.services")


exports.signup = async(req,res,next)=>{
    console.log(req.body)
    const result = await signupService(req.body)
    console.log(result);
}