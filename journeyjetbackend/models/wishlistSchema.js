const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
      
      },
      place: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
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
      
});
//create a model to store data
const wishlists = mongoose.model('wishlists', wishlistSchema);

module.exports = wishlists
