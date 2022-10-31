import React from 'react';
import { Link } from 'react-router-dom';



// Css 
import './Password.scss';





const Password = ({enterData, setEnterData}) => {

  const enteringData = (e) => {
    console.log(e)
    setEnterData({
      ...enterData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <div className="password_container">
        <div className="title">Set up your account</div>
        <div className="para">Fill in your profile details</div>
        <div className="input_group">
          <label>First Name</label>
          <input onChange={enteringData}  name='firstName' value={enterData.firstName} type='text' />
        </div>
        <div className="input_group">
          <label>Last Name</label>
          <input onChange={enteringData} name='lastName' value={enterData.lastName} type='text' />
        </div>
        <div className="input_group">
          <label>Create a Password</label>
          <input onChange={enteringData} name='password' value={enterData.password} type='text' />
        </div>
        <div className="input_group">
          <label>Confirm Password</label>
          <input onChange={enteringData} name='cPassword' value={enterData.cPassword} type='text' />
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
    </>
  )
}

export default Password