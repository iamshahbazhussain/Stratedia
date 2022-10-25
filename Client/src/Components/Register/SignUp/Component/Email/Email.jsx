import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';

// picture 
import right from '../../../../../Assets/right.jpg';

// icons 
import { BsGoogle , BsFacebook } from 'react-icons/bs';

// Css 
import './Email.scss';




const Email = () => {
  let Navigate = useNavigate()

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
      <div className="main_email">
        <div className="signup_content">
          <div className="signup_left">
            <div className="left_content">
              <div className="title">Welcome to Stratedia</div>
              <div className="para">Get started - it's free. No credit card needed.</div>
              <div className="input_group">
                <label>Enter Email</label>
                <input type='email' placeholder='name@company.com' />
              </div>
              <Link to='/register/password' style={{ textDecoration: 'none' }} >
                <button>Continue</button>
              </Link>
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
              <div className="already">Already have an account? <span onClick={() => Navigate("/login")}> Log in</span></div>
            </div>
          </div>
          <div className="signup_right"><img src={right} alt='Image Error' /></div>
        </div>
      </div>
    </>
  )
}

export default Email