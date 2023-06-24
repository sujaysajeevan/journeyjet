//import mongoose

const mongoose = require('mongoose')

//define schema for user collection
 
const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
     
    phone:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true,
        unique:true//new added
    }
})
//create a model to store data
const users = new mongoose.model("users",userSchema)

//export model
module.exports=users