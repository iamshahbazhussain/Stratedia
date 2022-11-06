import React, { useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';

import JWTDECODE from "jwt-decode";

// ICONS : 
import { BsGoogle, BsFacebook } from 'react-icons/bs';

// APIs :
import { checkEmailAPI } from '../../../../../API/register';
import { toast } from "react-toastify"

// CSS : 
import './Email.scss';





const Email = ({ setStepper, enterData, setEnterData }) => {
  let Navigate = useNavigate()

  const [emailError, setEmailError] = useState(null)

  const enteringData = (e) => {
    setEmailError(null)
    setEnterData({
      ...enterData,
      [e.target.name]: e.target.value
    });
  }

  const checkEmail = async () => {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(enterData.email)) {
      setEmailError(null)
      let res = await checkEmailAPI(enterData.email, false)
      if (res.error) {
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
        console.log(res.data);
        if (res.data.registered == true) {
          toast.warn(res.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setEmailError(res.data.message)
        } else {
          setStepper(1);
        }
      }
    } else {
      setEmailError("Invalid Email")
    }
  }
  const handleGoogleLogin = async (response) => {
    console.log(response);
    if (response.credential) {
      let userObject = JWTDECODE(response.credential)
      console.log(userObject);
      let res = await checkEmailAPI(userObject.email, true)
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
        if (res.data.registered == true) {
          localStorage.setItem("token", res.data.token)
          toast.success("Login Success", {
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
            window.location.href = "/dashboard"
          }, 2500);
        } else {
          setEnterData((preVal) => {
            return {
              ...preVal,
              email: response.email,
              firstName: userObject.given_name,
              lastName: userObject.family_name,
            }
          })
          setStepper(1);
        }
      }
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleGoogleLogin
    })
    google.accounts.id.renderButton(
      document.getElementById("googleDiv"),
      { theme: "filled_blue", size: "large", text: "signup_with", width: "100%" }
    )
  }, []);

  return (
    <>
      <div className='email_container'>
        <div className="title">Welcome to Stratedia</div>
        <div className="para">Get started - it's free. No credit card needed.</div>
        <div className="input_group">
          <label>Enter Email</label>
          <input name='email' onChange={enteringData} value={enterData.email} type='email' placeholder='name@company.com' />
          <p className="error">{emailError && emailError}</p>
        </div>
        <button onClick={checkEmail}>Continue</button>
        <div className="or">OR</div>
        <div id="googleDiv"></div>
        <div className="already">Already have an account? <span onClick={() => Navigate("/login")}> Log in</span></div>
      </div>
    </>
  )
}

export default Email