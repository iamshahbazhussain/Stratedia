const express = require("express");

const Authrization = require("../Middleware/authenticator")

const UserModal = require("../Models/user");

const Router = express.Router();


Router.get("/", Authrization, async (req, res) => {
    try {
        let currentUser = req.user;
        if (currentUser.role == "admin") {
            let allUsers = await UserModal.find()
            res.status(200).json({
                message: "Users Found",
                data: allUsers
            })
        } else {
            res.status(403).json({
                message: "Unauthorized Access",
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Error at Getting UsersData",
            err
        })
    }
})


module.exports = Router;