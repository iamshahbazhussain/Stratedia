import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import JWTDECODE from "jwt-decode";





// CSS :
import '../LoginContent/LoginContent.scss'


const Email = () => {


    

  return (
    <div className="left_content">
    <div className="title">Enter Your Email</div>
    <div className="input_group">
        <label>Email</label>
        <input type='email' name='email'  />
    </div>
   
    <button>Continue</button>
   

</div>
  )
}

export default Email