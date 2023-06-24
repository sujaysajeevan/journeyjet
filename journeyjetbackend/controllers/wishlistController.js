const wishlists=require('../models/wishlistSchema')

//wish list logic
exports.addtowishlist=async(req,res)=>{
    //get package detail from request
    
    //using destructuring
     const {id,place,price,description,images}=req.body
    //logic
    try{
    //check if the prooduct in the mongodb
    const item=await wishlists.findOne({id})
    if(item){
    res.status(403).json("item already exist in the wishlist")
    }
    else{
        //add the item to the wishlist
        const newpackage=new wishlists({id,place,price,description,images})
        //to store into the mongodb
          await newpackage.save()
          res.status(200).json("package added to the wishlist")
        
    }
    }
    catch(error){
        res.status(401).json(error)
    
    }
    
    }

    //get package from wishlist
    exports.getwishlist=async(req,res)=>{

        try{
            const allwishlist=await wishlists.find()
            res.status(200).json(allwishlist)

        }
        catch(error){
        res.status(401).json(error)

        }
    }

        exports.removewishlist=async(req,res)=>{
            //delete id
            const{id}=req.params
            try{
                const removewishlist=await wishlists.deleteOne({id})
                if(removewishlist){
                    //removing particular data then show remaining data
                    const allwishlist=await wishlists.find()
                    res.status(200).json(allwishlist)
                }

            }
            catch(error){
                res.status(401).json(error)
        
                }
        }
    
