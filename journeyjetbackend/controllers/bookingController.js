const Booking = require('../models/bookingSchema');
const Package = require('../models/packageSchema');
const User = require('../models/userSchema');

// Controller for booking a tour package
exports.addbookings = async (req, res) => {
  const { username, email, phonenumber, arrival, departure, packageid } = req.body;
  const id = req.params.id;

  try {
    const package = await Package.findOne({ id: id });
    if (!package) {
      return res.status(401).json('Package not found');
    }

    const booking = await Booking.findOne({ packageid, arrival,departure });
    if (booking) {
      return res.status(401).json('Package already booked');
    }
    

    const currentDate = new Date();
    const Departure = new Date(departure);

    if (Departure <= currentDate) {
      return res.status(401).json('Please select a valid date');
    }

    if (departure <= arrival) {
      return res.status(401).json('Check-out date must be after the check-in date');
    }


    // Create a new booking
    const newBooking = new Booking({
      username,
      email,
      phonenumber,
      arrival,
      departure,
      amount: package.price,
      place:package.place,
      images:package.images,
      description:package.description,
      

      packageid,
    });

    // Save the booking to the database
    await newBooking.save();

    res.status(200).json('Tour package booked successfully');
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.getBookings = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json('User not found');
    }

    const bookings = await Booking.find({ email: email });

    if (bookings.length === 0) {
      return res.status(404).json('No bookings found for the user');
    }

    res.status(200).json(bookings);
  } 
  catch (error) {
    res.status(500).json(error);
  }
};


exports.cancelbooking = async (req, res) => {

  const { email } = req.params; 
  const {packageid}=req.params
  const { arrival,departure } = req.params

  try {
    const cancelbooking = await Booking.deleteOne({arrival,departure });
    // res.status(200).json('item deleted') // Update parameter name to "phnumber"
console.log(cancelbooking);

    if (cancelbooking.deletedCount!=0) {
      const remainingpackages = await Booking.find({email});
      // res.status(500).json('item deleted')
      res.status(200).json(remainingpackages);
    }
     else {
      res.status(401).json('item not found');
    }
  } catch (error) {
    res.status(401).json(error);
  }
}
