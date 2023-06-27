const mongoose = require("mongoose");
const { Schema } = mongoose;

const Card = Schema({
    cardName: {
        type: String,
        required: true
    },
    buckedId: {
        type: mongoose.Types.ObjectId,
        ref: "bucket"
    },
    createdAt: { type: Date, default: new Date() },
})

const CardDB = mongoose.model("cards", Card);
module.exports = CardDB;