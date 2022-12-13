import axios from "../AxiosInstance";

const getMyConversationsAPI = async () => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/chat/conversation",
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

const getConversationAPI = async (userID) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/chat/conversation/create",
            method: "POST",
            data: { userID },
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

const chatWithAdminAPI = async () => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/chat/conversation/withAdmin",
            method: "POST",
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

const getAllMessagesAPI = async (conversationID) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: `/chat/messages/${conversationID}`,
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

const saveMessagesAPI = async (data) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: `/chat/messages`,
            method: "POST",
            data,
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

export { getMyConversationsAPI, getConversationAPI, chatWithAdminAPI, getAllMessagesAPI, saveMessagesAPI }