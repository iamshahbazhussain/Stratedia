import axios from "../AxiosInstance";

const checkEmailAPI = async (email, googleContinue) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/auth/check",
            method: "POST",
            data: {
                email,
                googleContinue
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

const loginAPI = async (data) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/auth/login",
            method: "POST",
            data
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

const registerAPI = async (data) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/auth/register",
            method: "POST",
            data
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


const continueWithGoogleAPI = async (data) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/auth/continue/google",
            method: "POST",
            data
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

const continueWithFacebookAPI = async (data) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/auth/continue/facebook",
            method: "POST",
            data
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

const genrateEmailOTPAPI = async (data) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/auth/genrateOtp",
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

const verifyEmailOTPAPI = async (otp) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/auth/confirmOtp",
            method: "POST",
            data: { otp },
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

const getUserDataAPI = async (otp) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/auth",
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

const updateUserDataAPI = async (data) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/auth",
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            data
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


export { checkEmailAPI, loginAPI, registerAPI, continueWithGoogleAPI, continueWithFacebookAPI, verifyEmailOTPAPI, genrateEmailOTPAPI , getUserDataAPI , updateUserDataAPI }