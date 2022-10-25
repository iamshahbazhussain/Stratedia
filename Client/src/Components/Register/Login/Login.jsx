import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';

// ASSETS :
import buffer from '../../../Assets/buffer.svg'
import Logo from "../../../Assets/logo.png"
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

// CSS :
import './Login.scss';





const Login = () => {
    let Navigate = useNavigate()

    const login = () => {
        Navigate("/dashboard")
    }

    const handleSuccessGoogleLogin = (event) => {
        console.log("--------- LOGIN SUCCESS ------------", event);
        Navigate("/dashboard")
    }
    const handleFailGoogleLogin = (event) => {
        console.log("--------- LOGIN Failed ------------", event);
        // Navigate("/dashboard")
    }
    return (
        <>
            <Navbar />
            <div className='main_login'>
                <div className="login_left">
                    {/* <img src={Logo} alt='Image Error' /> */}
                    <div className="left_content">
                        <div className="title">Login</div>
                        <div className="input_group">
                            <label>Email</label>
                            <input type='email' />
                        </div>
                        <div className="input_group">
                            <label>Password</label>
                            <input type='password' />
                        </div>
                        <button onClick={login}>Log in</button>
                        <div className="agree">
                            <div className="buffer">I agree to <span>Terms of Service</span></div>
                            <div className="already" onClick={() => Navigate("/register")}>Don't have an account?</div>
                        </div>
                        <div className="or">OR</div>

                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login"
                            render={renderProps => (
                                <button className="google_btn" onClick={renderProps.onClick} disabled={renderProps.disabled}> <BsGoogle /> Continue With Google</button>
                            )}
                            onSuccess={handleSuccessGoogleLogin}
                            onFailure={handleFailGoogleLogin}
                            cookiePolicy={'single_host_origin'}
                        />

                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login"
                            render={renderProps => (
                                <button className="google_btn" onClick={renderProps.onClick} disabled={renderProps.disabled}> <BsFacebook /> Continue With Facebook</button>
                            )}
                            onSuccess={handleSuccessGoogleLogin}
                            onFailure={handleFailGoogleLogin}
                            cookiePolicy={'single_host_origin'}
                        />

                    </div>
                </div>
                <div className="login_right">
                    <div className="para">
                        “To all my friends in business I will advise you to contact Steve Bibby & his company Stratedia to get your website done or upgraded. It’s amazing how much contact I get from google & my website dfwraps.com he’s great at getting your business name out there. It has worked great for us & we couldn’t be happier. DF WRAPS, Don Guyton”
                    </div>
                    <div className="name">Steve Bibby</div>
                    <div className="prof">CEO</div>
                    <div className="prof">Foster Coffee Company</div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
