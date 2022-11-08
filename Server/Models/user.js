const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
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
    googleToken: {
        type: String
    },
    facebookToken: {
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
    }

}, { timestamps: true });

module.exports = mongoose.model("User.Modal", userSchema)