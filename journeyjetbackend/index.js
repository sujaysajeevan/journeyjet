//load file automatically
require('dotenv').config()

//import
const express=require('express')

//cors
const cors=require('cors')

//db
require('./db/connection')

const router=require('./routes/router')

//server app
const server=express()
//store
const PORT=5000
//use in server
server.use(cors())
server.use(express.json())
server.use(router)

// // route
// server.get('/',(req,res)=>{
//     res.status(200).json('tour server response')
// })
// to run server
server.listen(5000,()=>{
    console.log('server listening on port '+PORT);
})