import axios from "../AxiosInstance";

const getAllNotificationsAPI = async () => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/notifications",
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        resolved.data = res.data
    } catch (err) {
        if (err.response) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
};

const getMyNotificationsAPI = async () => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/notifications/my",
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        resolved.data = res.data
    } catch (err) {
        if (err.response) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
};

const readAllNotificationsAPI = async () => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/notifications/read",
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        resolved.data = res.data
    } catch (err) {
        if (err.response) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
};


export { getAllNotificationsAPI, getMyNotificationsAPI, readAllNotificationsAPI }