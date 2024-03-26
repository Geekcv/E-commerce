import mongoose, { connect, Mongoose } from "mongoose";
import  colors  from "colors";

const connectDB = async ()=>{
    try {
       const conn = await mongoose.connect(process.env.MONGO_CON)   
       console.log(`connected to mongodb ${conn.connection.host}`)
       
    } catch (error) {
        console.log(`error in mongodb ${error}`.bgRed.white)
    }
}

export default connectDB