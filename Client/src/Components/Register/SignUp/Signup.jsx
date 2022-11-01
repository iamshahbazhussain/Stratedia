import React, { useState } from 'react';
import { useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';


// Picture :
import right from '../../../Assets/right.jpg';


// Components : 
import Email from './Component/Email/Email';
import Password from './Component/Password/Password';


// SCSS :      
import './SignUp.scss'



const SignUp = () => {
  let Navigate = useNavigate()
  let location = useLocation()

  let isGoogleRegister = location.state?.userData ? location.state.userData : null

  const [stepper, setStepper] = useState(0)
  const [enterData, setEnterData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    cPassword: '',
    facebook: null,
    google: null
  })

  const currentStep = () => {
    switch (stepper) {
      case 0:
        return (<Email enterData={enterData} setEnterData={setEnterData} setStepper={setStepper} />);
        break;
      case 1:
        return (<Password enterData={enterData} setEnterData={setEnterData} setStepper={setStepper} />);
        break;
      default:
        return (<Email enterData={enterData} setEnterData={setEnterData} setStepper={setStepper} />);
        break;
    }
  }

  useEffect(() => {
    if (isGoogleRegister) {
      setEnterData((preVal) => {
        return {
          ...preVal,
          ...isGoogleRegister
        }
      })
      setStepper(1);
    }
  }, [])

  return (
    <>
      <div className="signup_container">
        <div className="signup_box">
          <div className="left_box">
            {
              currentStep()
            }
          </div>
          <div className="right_box"><img src={right} alt='Image Error' /></div>
        </div>
      </div>
    </>
  )
}

export default SignUp
