const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    profileImg: {
        type: String,
    },
    email: {
        type: String,
        unique: [true, "Email Already Exist"]
    },
    password: {
        type: String,
        minlength: [8, "Enter Password with 8 or more Character"],
        select: false
    },
    number: {
        type: String
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    country: {
        type: String,
    },
    googleToken: {
        type: String
    },
    facebookToken: {
        type: String
    },
    facebookUserID: {
        type: String
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    verifyToken: {
        type: String
    },
    role: {
        type: String,
        default: "customer"
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema)