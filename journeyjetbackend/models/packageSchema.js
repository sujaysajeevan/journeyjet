const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
      },
      place: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      images: [
        {
          url: {
            type: String,
            required: true
          }
        }
      ],
      description: {
        type: String,
        required: true
      }
});

const Packages = mongoose.model('Packages', packageSchema);

module.exports = Packages;
