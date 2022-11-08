const express = require("express");
const JWT = require("jsonwebtoken");
const Bcrypt = require("bcrypt");
const AppError = require("../Utils/AppError");
const EmailSender = require("../Middleware/emailSender")

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
            message: "Error at Getting UserData",
            err
        })
    }
})

Router.post("/", Authrization, async (req, res) => {
    try {
        const updateUser = await UserModal.findByIdAndUpdate(req.user._id, req.body, { new: true })
        res.status(200).json({
            message: "User Updated Success",
            data: updateUser
        })
    } catch (err) {
        res.status(500).json({
            message: "Error at Getting UserData",
            err
        })
    }
})

Router.post("/login", async (req, res, next) => {
    let { email, password } = req.body;
    try {
        let findUser = await UserModal.findOne({ email: email }).select("+password")
        if (findUser) {
            let deHash = await Bcrypt.compareSync(password, findUser.password)
            if (!deHash) {
                res.status(402).json({
                    message: "Wrong credentials"
                })
                return
            }
            let token = await JWT.sign({ data: { email: findUser.email, _id: findUser._id } }, process.env.JWT_SECRET)
            res.status(200).json({
                message: "Login Success",
                token,
                data: {
                    ...findUser._doc,
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
            message: "Error at Getting UserData",
            err
        })
    }
})
Router.post("/register", async (req, res) => {
    let { email, firstName, lastName, googleToken, facebookToken, password } = req.body;
    try {
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

    } catch (err) {
        res.status(500).json({
            message: "Error at Registering User",
            err
        })
    }
})

Router.post("/check", async (req, res) => {
    let { email, googleContinue } = req.body;
    try {
        let findUser = await UserModal.findOne({ email: email })
        if (findUser) {
            if (googleContinue) {
                let token = await JWT.sign({ data: { email: findUser.email, _id: findUser._id } }, process.env.JWT_SECRET)
                res.status(200).json({
                    message: "Login Success",
                    registered: true,
                    token,
                    data: {
                        ...findUser._doc,
                        password: undefined
                    }
                });
            } else {
                res.status(200).json({
                    message: "User already Exist , please login",
                    registered: true
                })
            }
        } else {
            res.status(200).json({
                message: "User not Found",
                registered: false
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Error at Checking UserData",
            err
        })
    }
})

Router.get("/genrateOtp", Authrization, async (req, res) => {
    try {
        let code = Math.round(Math.random() * 9999)
        console.log("---------CODE--------", code);
        let emailRes = await EmailSender({
            to: req.user.email,
            subject: "Verification OTP",
            text: `Your Verfication OTP = ${code}`
        }, req, res)

        const updateUser = await UserModal.findByIdAndUpdate(req.user._id, { $set: { "verifyToken": code } }, { new: true })
        console.log("---------------", updateUser);
        return
        res.status(200).json({
            message: emailRes
        });
    } catch (err) {
        res.status(500).json({
            message: "Error at Verifing Email",
            err
        })
    }
})

Router.post("/confirmOtp", Authrization, async (req, res) => {
    let { otp } = req.body;
    console.log(req.body);
    try {
        if (req.user.verifyToken == otp) {
            let updateUser = await UserModal.findByIdAndUpdate(req.user._id, { $set: { emailVerified: true } })
            res.status(200).json({
                message: "Email verified Success"
            })
        } else {
            res.status(400).json({
                message: "Wrong OTP"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Error at Verifing Email",
            err
        })
    }
})

module.exports = Router;