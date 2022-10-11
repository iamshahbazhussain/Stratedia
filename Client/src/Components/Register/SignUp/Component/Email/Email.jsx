import React from 'react';
import { Link } from 'react-router-dom';

// picture 
import right from '../../../../../Assets/right.jpg';

// icons 
import { BsGoogle } from 'react-icons/bs';

// Css 
import './Email.scss';




const Email = () => {

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
              <div className="google_btn"> <BsGoogle /> Continue With Google</div>
              <div className="already">Already have an account?<span>Log in</span></div>
            </div>
          </div>
          <div className="signup_right"><img src={right} alt='Image Error' /></div>
        </div>
      </div>
    </>
  )
}

export default Email