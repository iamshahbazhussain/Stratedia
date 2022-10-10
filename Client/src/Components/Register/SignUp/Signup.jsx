import React from 'react';
import { useNavigate } from 'react-router-dom';

// ICONS :
import { BsGoogle } from 'react-icons/bs';
// ASSETS :
import right from '../../../Assets/right.jpg';

// CSS :
import './Signup.scss';





const Signup = () => {
  let Navigate = useNavigate()

  return (
    <>
      <div className="main_signup">
        <div className="signup_content">
          <div className="signup_left">
            <div className="left_content">
              <div className="title">Welcome to monday.com</div>
              <div className="para">Get started - it's free. No credit card needed.</div>
              <div className="input_group">
                <label>Enter Email</label>
                <input type='email' placeholder='name@company.com' />
              </div>
              <button>Continue</button>
              <div className="or">OR</div>
              <div className="google_btn"> <BsGoogle /> Continue With Google</div>
              <div className="already">Already have an account?<span onClick={() => Navigate("/")}>Log in</span></div>
            </div>
          </div>
          <div className="signup_right"><img src={right} alt='Image Error' /></div>
        </div>
      </div>
    </>
  )
}

export default Signup
