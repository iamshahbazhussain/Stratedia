const NotificationsModal = require("../Models/notifications")

const createNotification = async ({ title, details }, req, res) => {
    try {
        let addNotification = new NotificationsModal({
            user: req.user._id,
            title,
            details
        })
        await addNotification.save()

        return true
    } catch (err) {
        res.status(400).json({
            message: "Notification Creation Failed",
            err
        })
    }
}

module.exports = createNotification;