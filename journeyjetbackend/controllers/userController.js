//import user collection
// const { response } = require('express')
const users=require('../models/userSchema')

//add to user logic
exports.register =async (req,res)=>{
    //get produce details from request
  
    //using destructuring
  
    const {username,email,phone,password}=req.body
  
    //logic
    try{
      //check if the email in the mongodb
      const user=await users.findOne({email})
      if (user) {
       res.status(401).json("Email already exist")
        
     }
     else{
        const newUser=new users({username,email,phone,password})
        await newUser.save()
        res.status(200).json("Registered successfully")
     }
   }
    catch(error){
      res.status(401).json(error)
    }
  
  }

  const Users = require('../models/userSchema')
// const jwt=require('jsonwebtoken')

exports.login = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await Users.findOne({email, password })
        if (user) {
            // const token=jwt.sign({loginUser:email},'superkey2023')
            // console.log(user.username);
            response={
                // token,
                user
            }
            res.status(200).json(response)
            
        }
        else {
            res.status(401).json("Invalid data")
        }
    }
    catch (error) {
        res.status(401).json(error)
}

}