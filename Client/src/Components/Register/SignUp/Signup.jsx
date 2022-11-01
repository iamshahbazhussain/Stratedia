import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';


// Picture :
import right from '../../../Assets/right.jpg';


// Components : 
import Email from './Component/Email/Email';
import Password from './Component/Password/Password';


// SCSS :      
import './SignUp.scss'



const SignUp = () => {
  let Navigate = useNavigate()

  const [stepper, setStepper] = useState(0)
  const [enterData, setEnterData] = useState({
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    cPassword:'',
    facebook:null,
    google:null
  })

  const register = ()=>{
    
  }

  const currentStep = () => {
    switch (stepper) {
      case 0:
        return (<Email enterData={enterData} setEnterData={setEnterData} setStepper={setStepper} />);
        break;
      case 1:
        return (<Password register={register} enterData={enterData} setEnterData={setEnterData} setStepper={setStepper} />);
        break;
      default:
        return (<Email enterData={enterData} setEnterData={setEnterData} setStepper={setStepper} />);
        break;
    }
  }

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
