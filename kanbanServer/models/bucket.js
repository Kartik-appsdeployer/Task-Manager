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
    cards: [{ 
        type: mongoose.Types.ObjectId, 
        ref: "cards" 
    }],

})

const BucketDB = mongoose.model("bucket", Bucket);
module.exports = BucketDB;