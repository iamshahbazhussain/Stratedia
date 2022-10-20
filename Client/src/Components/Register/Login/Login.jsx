import React from 'react';
import { useNavigate } from 'react-router-dom';

// ASSETS :
import buffer from '../../../Assets/buffer.svg'
import Logo from "../../../Assets/logo.png"
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

// CSS :
import './Login.scss';





const Login = () => {
    let Navigate = useNavigate()

    const login = () => {
        Navigate("/dashboard")
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
                    </div>
                </div>
                <div className="login_right">
                    <div className="para">
                        “With Stratedia I can build social content out as far as
                        I want into the future but also tailor campaigns if we see
                        certain trends within the industry.”
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
