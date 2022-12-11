const mongoose = require("mongoose");


const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String
    },
    details: {
        type: String
    },
    status: {
        type: String,
        default: "unRead"
    },
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema)