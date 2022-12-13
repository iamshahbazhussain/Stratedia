const express = require("express");

const ConversationModal = require("../models/conversation");
const MessagesModal = require("../models/messages");
const UserModal = require("../Models/user");

const Authrization = require("../Middleware/authenticator")

const Router = express.Router();


Router.get("/conversation", Authrization, async (req, res) => {
    try {
        let currentUser = req.user;
        let findConversation = await ConversationModal.find({
            members: { $in: [currentUser._id] }
        })
        res.status(200).json({
            message: "Conversation Found",
            data: findConversation
        })

    } catch (err) {
        res.status(500).json({
            message: "Error at Geting Admin Conversations",
            err
        })
    }
});

Router.post("/conversation/create", Authrization, async (req, res) => {
    let { userID } = req.body;
    try {
        let currentUser = req.user;
        let findConversation = await ConversationModal.findOne({
            members: { $all: [userID, currentUser._id] }
        })
        if (findConversation) {
            res.status(200).json({
                message: "Conversation Found",
                data: findConversation
            })
        } else {
            const newConversation = new ConversationModal({
                members: [userID, currentUser._id],
            });

            await newConversation.save();
            let conversationData = await ConversationModal.findById(newConversation._id)
            res.status(200).json({
                message: "Conversation Created",
                data: conversationData
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Error at Creating Conversation by Admin",
            err
        })
    }
});

Router.post("/conversation/withAdmin", Authrization, async (req, res) => {
    try {
        let currentUser = req.user;
        let findAdmin = await UserModal.findOne({ role: "admin" })
        if (findAdmin) {
            let findConversation = await ConversationModal.findOne({
                members: { $all: [currentUser._id, findAdmin._id] }
            })
            if (findConversation) {
                res.status(200).json({
                    message: "Conversation Found",
                    data: findConversation
                })
            } else {
                const newConversation = new ConversationModal({
                    members: [currentUser._id, findAdmin._id],
                });

                await newConversation.save();
                let conversationData = await ConversationModal.findById(newConversation._id)
                res.status(200).json({
                    message: "Conversation Created",
                    data: conversationData
                });
            }
        } else {
            res.status(404).json({
                message: "Admin not Found",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Error at Creating Conversation by Customer",
            err
        })
    }
});

//get conv of a user

Router.get("/conversation/:userId", async (req, res) => {
    try {
        const conversation = await ConversationModal.find({
            members: { $in: [req.params.userId] },
        });
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get conv includes two userId

Router.get("/conversation/find/:firstUserId/:secondUserId", async (req, res) => {
    try {
        const conversation = await ConversationModal.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json(conversation)
    } catch (err) {
        res.status(500).json(err);
    }
});



Router.post("/messages", async (req, res) => {

    try {
        const newMessage = new MessagesModal(req.body);
        await newMessage.save();
        res.status(200).json({
            message: "Message Saved",
            data: newMessage
        })
    } catch (err) {
        res.status(500).json({
            message: "Error at saving Message",
            err
        })
    }
});

//get

Router.get("/messages/:conversationId", async (req, res) => {
    try {
        const messages = await MessagesModal.find({
            conversationId: req.params.conversationId,
        });
        res.status(200).json({
            message: "Messages Found",
            data: messages
        })
    } catch (err) {
        res.status(500).json({
            message: "Error at getting Messages",
            err
        })
    }
});

module.exports = Router;