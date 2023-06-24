const express=require('express')
const packageController=require('../controllers/packageController')
const userController=require('../controllers/userController')
const wishlistController=require('../controllers/wishlistController')

const bookingController=require('../controllers/bookingController')

const router=new express.Router()



router.get('/packages/iallpackages',packageController.getAllPackages)
//api for particular product
router.get('/packages/view-package/:id',packageController.viewPackage)
//path for register
router.post('/main/register',userController.register)
//for login
router.post('/main/login',userController.login)
//for wishlist databasse
router.post('/wishlist/addtowishlist',wishlistController.addtowishlist)
//for getting details from wishlist database
router.get('/wishlist/getwishlist',wishlistController.getwishlist)
//delete
router.delete('/wishlist/removewishlist/:id',wishlistController.removewishlist)


//addbooking
router.post('/main/bookings/:id', bookingController.addbookings);
//get
router.get('/getbooking/:email',bookingController.getBookings)

router.delete('/cancel/:email/:packageid/:arrival/:departure', bookingController.cancelbooking);


//export router
module.exports=router