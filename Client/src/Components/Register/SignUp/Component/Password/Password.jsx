import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { toast } from "react-toastify";
import { registerAPI } from '../../../../../API/register';

// Css 
import './Password.scss';





const Password = ({ enterData, setEnterData }) => {
  let Navigate = useNavigate();
  const [confirmPasswordError, setConfirmPasswordError] = useState(null)

  const enteringData = (e) => {
    setEnterData({
      ...enterData,
      [e.target.name]: e.target.value
    });
    setConfirmPasswordError(null)
  }

  const registerUser = async () => {
    if (!enterData.firstName || !enterData.lastName || !enterData.password) {
      toast.warning("Please fill all the fields", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return
    }
    if (enterData.password != enterData.cPassword) {
      setConfirmPasswordError("Password did not match")
      return
    }
    const res = await registerAPI(enterData)
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
      toast.success("User Register Success", {
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
        Navigate("/login")
      }, 3000);
    }
  }

  return (
    <>
      <div className="password_container">
        <div className="title">Set up your account</div>
        <div className="para">Fill in your profile details</div>
        <div className="input_group">
          <label>First Name</label>
          <input onChange={enteringData} name='firstName' value={enterData.firstName} type='text' />
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
          <p className="error">{confirmPasswordError && confirmPasswordError}</p>
        </div>
        <div className="already">
          <input type='checkbox' />
          I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>
        </div>
        <div className="btn_sec">
          <button onClick={registerUser}>Continue</button>
        </div>
      </div>
    </>
  )
}

export default Password