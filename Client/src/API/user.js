import axios from "../AxiosInstance";

const getAllUsersAPI = async () => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/user",
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

export { getAllUsersAPI }