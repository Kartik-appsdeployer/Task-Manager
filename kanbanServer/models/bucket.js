const mongoose = require("mongoose");
const { Schema } = mongoose;

const Bucket = Schema({
    bucketName: {
        type: String,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: new Date() 
    },
    userId: {
        type: mongoose.Types.ObjectId,
    },
    cards: [
        {
          cardName: {
            type: String
          },
          cardId: {
            type: mongoose.Types.ObjectId
          }
        }
      ]

})

const BucketDB = mongoose.model("bucket", Bucket);
module.exports = BucketDB;