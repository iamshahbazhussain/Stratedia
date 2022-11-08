import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { genrateResetOTPAPI, verifyResetOTPAPI } from '../../../../../API/register';

// CSS :
import '../LoginContent/LoginContent.scss'


const Email = ({ setStepper }) => {

  const [enteredData, setEnteredData] = useState({
    email: "",
    otp: ""
  })
  const [enterOtp, setEnterOtp] = useState(false)

  const enteringData = (event) => {
    let { name, value } = event.target;
    setEnteredData((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  const genrateOtp = async () => {
    let res = await genrateResetOTPAPI(enteredData.email)
    if (res.error) {
      toast.error(res.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setEnterOtp(true)
    }
  }
  const confirmOtp = async () => {
    let res = await verifyResetOTPAPI(enteredData)
    if (res.error) {
      toast.error(res.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      localStorage.setItem("token", res.data.token)
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setStepper(2)
    }
  }



  return (
    <div className="left_content">
      <div className="title">Enter Your Email</div>
      <div className="input_group">
        <label>Email</label>
        <input type='email' name='email' value={enteredData.email} onChange={enteringData} />
      </div>
      <div className="input_group">
        <label>OTP</label>
        <input type='number' name='otp' value={enteredData.otp} onChange={enteringData} disabled={!enterOtp} />
      </div>
      {
        enterOtp ?
          <button onClick={confirmOtp}>Verify</button>
          :
          <button onClick={genrateOtp}>Genrate OTP</button>
      }


    </div>
  )
}

export default Email