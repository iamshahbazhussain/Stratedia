const express = require("express");
const JWT = require("jsonwebtoken");
const Bcrypt = require("bcrypt");
const AppError = require("../Utils/AppError");

const Authrization = require("../Middleware/authenticator")

const UserModal = require("../Models/user");

const Router = express.Router();
const saltRound = 10;


Router.get("/", Authrization, async (req, res) => {
    try {
        res.status(200).json({
            message: "User Found",
            data: req.user
        })
    } catch (err) {
        res.status(500).json({
            message: "Eror at Getting UserData",
            err
        })
    }
})

Router.get("/login", Authrization, async (req, res, next) => {
    let { email, password } = req.body;
    try {
        let findUser = UserModal.findOne({ email }).select("password")
        if (findUser) {
            let deHash = await Bcrypt.compareSync(password, findUser.password)
            if (!deHash) {
                return next(
                    new AppError("Wrong Password", 400)
                );
            }
            let token = await JWT.sign({ data: { email: findUser.email, _id: findUser._id } }, process.env.JWT_SECRET)
            res.status(200).json({
                message: "Login Success",
                token,
                data: {
                    ...findUser,
                    password: undefined
                }
            });
        } else {
            res.status(404).json({
                message: "User not Found",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Eror at Getting UserData",
            err
        })
    }
})
Router.post("/register", async (req, res) => {
    let { email, firstName, lastName, googleToken, facebookToken, password } = req.body;
    try {
        if (googleToken || facebookToken) {

        } else {
            const hasedPass = await Bcrypt.hashSync(password, saltRound)
            const userData = new UserModal({
                email,
                firstName,
                lastName,
                password: hasedPass
            });
            await userData.save();

            res.status(200).json({
                message: "UserRegister Success",
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Eror at Getting UserData",
            err
        })
    }
})

module.exports = Router;