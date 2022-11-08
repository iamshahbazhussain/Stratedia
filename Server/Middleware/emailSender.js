const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.EMAIL_API)

const emailSender = ({ to, subject, text }, req, res) => {

    const msg = {
        to: to, // Change to your recipient
        from: process.env.EMAIL_SENDER, // Change to your verified sender
        subject: subject,
        text: text,
        html: `<strong>${text}</strong>`,
    }
    sgMail
        .send(msg)
        .then((res) => {
            return "Email Sent Success"
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: ""
            })
        })
}

module.exports = emailSender;