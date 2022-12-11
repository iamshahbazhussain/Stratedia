const express = require("express");
const AppError = require("../Utils/AppError");

const Authrization = require("../Middleware/authenticator")

const NotificationsModal = require("../Models/notifications");

const Router = express.Router();


Router.get("/", Authrization, async (req, res) => {
    try {
        let allNotifications = await NotificationsModal.find();
        res.status(200).json({
            message: "All Notifications",
            data: allNotifications
        })
    } catch (err) {
        res.status(500).json({
            message: "Error at Getting Notifications",
            err
        })
    }
})

Router.get("/my", Authrization, async (req, res) => {
    try {
        let allNotifications = await NotificationsModal.find({ user: req.user._id });
        res.status(200).json({
            message: "All Notifications",
            data: allNotifications
        })
    } catch (err) {
        res.status(500).json({
            message: "Error at Getting Notifications",
            err
        })
    }
})

Router.get("/read", Authrization, async (req, res) => {
    try {
        let readAllNotifications = await NotificationsModal.updateMany({ user: req.user._id }, { $set: { status: "read" } });
        res.status(200).json({
            message: "All Notifications Read",
            data: readAllNotifications
        })
    } catch (err) {
        res.status(500).json({
            message: "Error at Reading All Notifications",
            err
        })
    }
})

module.exports = Router;