//ES5
// const express = require('express')
// const colors = require('colors')

// After ES6
// add type: module in package.json
import express  from 'express'
import colors  from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/Db.js'
import authroutes from './routes/authroutes.js'
import cors from 'cors'
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";


//configure env
// if env file other location
// dotenv.config({path:''})
dotenv.config()


//db congig
connectDB();



//rest object
const app = express()


//middlwares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//rest api

// app.get('/',(req,res)=>{
//    res.send({
//     message:'welcome to ecommerce app'
//    })
// res.send("<h1>welcome to ecommerce app</h1>")
// })

//routes
app.use('/api/v1/auth',authroutes)
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);




//port
const PORT= process.env.PORT || 8080


//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white)
})