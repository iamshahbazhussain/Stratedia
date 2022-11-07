import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import JWTDECODE from "jwt-decode";

// Components :
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

// ASSETS :
import buffer from '../../../Assets/buffer.svg'
import Logo from "../../../Assets/logo.png"
import { BsFacebook, BsGoogle } from 'react-icons/bs';

// APIs :
import { checkEmailAPI, loginAPI } from '../../../API/register';
import { toast } from "react-toastify"

// CSS :
import './Login.scss';





const Login = () => {
    let Navigate = useNavigate()

    const [enteredData, setEnteredData] = useState({
        email: "",
        password: ""
    })

    const enteringData = (event) => {
        let { name, value } = event.target;

        setEnteredData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    };

    const login = async () => {
        const res = await loginAPI(enteredData)
        if (res.error != null) {
            toast.error(res.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            localStorage.setItem("token", res.data.token)
            toast.success("Login Success", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                window.location.href = "/dashboard"
            }, 2500);
        }
    }
    const handleGoogleLogin = async (response) => {
        if (response.credential) {
            let userObject = JWTDECODE(response.credential)
            let res = await checkEmailAPI(userObject.email, true)
            if (res.error != null) {
                toast.error(res.error, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                if (res.data.registered == true) {
                    localStorage.setItem("token", res.data.token)
                    toast.success("Login Success", {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        window.location.href = "/dashboard"
                    }, 2500);
                } else {
                    Navigate("/register", { state: { userData: { email: userObject.email, firstName: userObject.given_name, lastName: userObject.family_name }, step: 1 } })
                }
            }
        }
    }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleGoogleLogin
        })
        google.accounts.id.renderButton(
            document.getElementById("googleDiv"),
            { theme: "filled_blue", size: "large", text: "signup_with", width: "100%" }
        )
    }, []);
    return (
        <>
            <Navbar />
            <div className='main_login'>
                <div className="login_left">
                    <div className="left_content">
                        <div className="title">Login</div>
                        <div className="input_group">
                            <label>Email</label>
                            <input type='email' name='email' value={enteredData.email} onChange={enteringData} />
                        </div>
                        <div className="input_group">
                            <label>Password</label>
                            <input type='password' name='password' value={enteredData.password} onChange={enteringData} />
                        </div>
                        <button onClick={login}>Log in</button>
                        <div className="agree">
                            <div className="buffer">Did You <span>Forgot Your Password </span>?</div>
                            <div className="already" onClick={() => Navigate("/register")}>Don't have an account?</div>
                        </div>
                        <div className="or">OR</div>
                        <div id="googleDiv"></div>
                    </div>
                </div>
                <div className="login_right">
                    <div className="para">
                        “To all my friends in business I will advise you to contact Steve Bibby & his company Stratedia to get your website done or upgraded. It’s amazing how much contact I get from google & my website dfwraps.com he’s great at getting your business name out there. It has worked great for us & we couldn’t be happier. DF WRAPS, Don Guyton”
                    </div>
                    <div className="name">DON GAYTON</div>
                    <div className="prof">CEO</div>
                    <div className="prof">DF WRAPS</div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
