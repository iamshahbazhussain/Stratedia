const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
    {
        members: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
    },
    { timestamps: true }
);

ConversationSchema.pre(/^find/, function (next) {
    this.populate({path:'members'});
    next();
});

module.exports = mongoose.model("ConversationModal", ConversationSchema);