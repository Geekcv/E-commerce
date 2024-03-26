import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected to routes token base
export const reuiresignin = async(req,res,next)=>{
    try {
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRT
        )
        req.user=decode
        next()
        
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            error,
            message:"error is admin middelware"
        })
    }
}


//admin access
export const isadmin = async (req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role!==1) {
            return res.status(401).send({
                success:false,
                message:"unauthorized access"
            })
        }else{
            next()
        }
    } catch (error) {
        console.log(error)
    }
}