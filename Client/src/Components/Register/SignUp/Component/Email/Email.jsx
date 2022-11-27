import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import JWTDECODE from "jwt-decode";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"

// ICONS : 
import { BsGoogle, BsFacebook } from 'react-icons/bs';
import { FaFacebookF } from "react-icons/fa"

// MUI
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// ANTD Design 
import { Button } from 'antd';

// APIs :
import { checkEmailAPI } from '../../../../../API/register';
import { toast } from "react-toastify"

// CSS : 
import './Email.scss';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));


const Email = ({ setStepper, enterData, setEnterData }) => {
  let Navigate = useNavigate()

  const [emailError, setEmailError] = useState(null)
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings(prevLoadings => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };


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
  const responseFacebook = async (response) => {
    if (response.email) {
      let res = await checkEmailAPI(response.email, true);
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
          localStorage.setItem("token", res.data.token);
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
            window.location.href = "/dashboard";
          }, 2500);
        } else {
          setEnterData((preVal) => {
            return {
              ...preVal,
              email: response.email,
              firstName: response.name,
              lastName: "",
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
          <BootstrapInput name='email' onChange={enteringData} value={enterData.email} type='email' placeholder='name@company.com' />
          <p className="error">{emailError && emailError}</p>
        </div>
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)} onClick={checkEmail}>
          Continue
        </Button>
        <div className="or">OR</div>
        <div className="line_col">

          <div id="googleDiv"></div>
          <FacebookLogin
            appId="3249415381989998"
            autoLoad={false}
            fields="name,email,picture"
            scope="public_profile,email,user_friends"
            callback={responseFacebook}
            render={renderProps => (
              <Button size="small" onClick={renderProps.onClick} className="facobook_btn" > <FaFacebookF className="icon" /> Continue with Facebook </Button>
            )}
          />
        </div>
        <div className="already">Already have an account? <span onClick={() => Navigate("/login")}> Log in</span></div>
      </div>
    </>
  )
}

export default Email