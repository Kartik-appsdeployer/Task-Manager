const { boolean } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const Auth = Schema({
    Username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    joined_date: {
        type: String,
        default: Date.now()
    },
})

const AuthDB = mongoose.model("auth", Auth);
module.exports = AuthDB;