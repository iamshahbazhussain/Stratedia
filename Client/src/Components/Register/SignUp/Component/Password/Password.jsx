import React from 'react';
import { Link } from 'react-router-dom';

// picture 
import right from '../../../../../Assets/right.jpg';

// Css 
import './Password.scss';





const Password = () => {

  return (
    <>
      <div className="main_password">
        <div className="signup_content">
          <div className="signup_left">
            <div className="title">Set up your account</div>
            <div className="para">Fill in your profile details</div>
            <div className="input_group">
              <label>First Name</label>
              <input type='email' />
            </div>
            <div className="input_group">
              <label>Last Name</label>
              <input type='email' />
            </div>
            <div className="input_group">
              <label>Create a Password</label>
              <input type='password' />
            </div>
            <div className="input_group">
              <label>Confirm Password</label>
              <input type='text' />
            </div>
            <div className="already">
              <input type='checkbox' />
              I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>
            </div>
            <div className="btn_sec">
              <Link to='/register/password/account' style={{ textDecoration: 'none' }} >
                <button>Continue</button>
              </Link>
            </div>
          </div>
          <div className="signup_right"><img src={right} alt='Image Error' /></div>
        </div>
      </div>
    </>
  )
}

export default Password