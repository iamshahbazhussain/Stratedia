import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import JWTDECODE from "jwt-decode";





// CSS :
import '../LoginContent/LoginContent.scss'


const ResetPassword = () => {




  return (
    <div className="left_content">
      <div className="title">Create Your New Password.</div>
      <div className="input_group">
        <label>New Password</label>
        <input type='text' name='newpassword' />
      </div>
      <div className="input_group">
        <label>Confirm Password</label>
        <input type='text' name='confirmpassword' />
      </div>

      <button>Continue</button>


    </div>
  )
}

export default ResetPassword