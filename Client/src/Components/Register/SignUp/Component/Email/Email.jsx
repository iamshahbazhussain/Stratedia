import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';

// icons 
import { BsGoogle, BsFacebook } from 'react-icons/bs';

// Css 
import './Email.scss';




const Email = ({ setStepper, enterData, setEnterData }) => {
  let Navigate = useNavigate()

  const handleSuccessGoogleLogin = (event) => {
    console.log("--------- LOGIN SUCCESS ------------", event);
    Navigate("/dashboard")
  }
  const handleFailGoogleLogin = (event) => {
    console.log("--------- LOGIN Failed ------------", event);
    // Navigate("/dashboard")
  }

  const enteringData = (e) => {
    console.log(e)
    setEnterData({
      ...enterData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <div className='email_container'>
        <div className="title">Welcome to Stratedia</div>
        <div className="para">Get started - it's free. No credit card needed.</div>
        <div className="input_group">
          <label>Enter Email</label>
          <input name='email' onChange={enteringData} value={enterData.email} type='email' placeholder='name@company.com' />
        </div>
        <button onClick={() => setStepper(1)}>Continue</button>
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
    </>
  )
}

export default Email