import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import JWTDECODE from "jwt-decode";





// CSS :
import '../LoginContent/LoginContent.scss'


const OTPLog = () => {


    

  return (
    <div className="left_content">
    <div className="title">Enter OTP We Sent To Your Email.</div>
    <div className="input_group">
        <label>OTP</label>
        <input type='text' name='otp'/>
    </div>
   
    <button>Continue</button>
   

</div>
  )
}

export default OTPLog