import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// APIs :
import { registerAPI } from '../../../../../API/register';
import { toast } from "react-toastify";

// MUI
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// ANTD Design 
import { Button } from 'antd';

// CSS :
import './Password.scss';


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


const Password = ({ enterData, setEnterData }) => {
  let Navigate = useNavigate();
  const [confirmPasswordError, setConfirmPasswordError] = useState(null)
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
    setEnterData({
      ...enterData,
      [e.target.name]: e.target.value
    });
    setConfirmPasswordError(null)
  }

  const registerUser = async () => {
    if (!enterData.email || !enterData.firstName || !enterData.lastName || !enterData.password) {
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
          <BootstrapInput onChange={enteringData} name='firstName' value={enterData.firstName} type='text' />
        </div>
        <div className="input_group">
          <label>Last Name</label>
          <BootstrapInput onChange={enteringData} name='lastName' value={enterData.lastName} type='text' />
        </div>
        {
          enterData?.facebookUserID &&
          <div className="input_group">
            <label>Email</label>
            <BootstrapInput onChange={enteringData} name='email' value={enterData.email} type='text' />
          </div>
        }
        <div className="input_group">
          <label>Create a Password</label>
          <BootstrapInput onChange={enteringData} name='password' value={enterData.password} type='password' />
        </div>
        <div className="input_group">
          <label>Confirm Password</label>
          <BootstrapInput onChange={enteringData} name='cPassword' value={enterData.cPassword} type='password' />
          <p className="error">{confirmPasswordError && confirmPasswordError}</p>
        </div>
        <div className="already">
          <input type='checkbox' />
          I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>
        </div>
        <div className="btn_sec">
          <Button type="primary" loading={loadings[0]} onClick={registerUser}>Continue</Button>
        </div>
      </div>
    </>
  )
}

export default Password;