const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    
    },
    phonenumber: {
        type: String,
        required: true
    },
    arrival: {
        type: String,
        required: true
    },
    departure: {
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    packageid:{
        type: Number,
        required: true
    },
    place:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
      },
    images: [
        {
          url: {
            type: String,
            required: true
          }
        }
      ]
    

})

const bookings=mongoose.model('bookings',bookingSchema)
module.exports=bookings