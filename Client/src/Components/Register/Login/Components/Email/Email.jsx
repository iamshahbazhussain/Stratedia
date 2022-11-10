import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  genrateResetOTPAPI,
  verifyResetOTPAPI,
} from "../../../../../API/register";

// MUI
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

// CSS :
import "./Email.scss";

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

const Email = ({ setStepper }) => {
  const [enteredData, setEnteredData] = useState({
    email: "",
    otp: "",
  });
  const [enterOtp, setEnterOtp] = useState(false);

  const enteringData = (event) => {
    let { name, value } = event.target;
    setEnteredData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const genrateOtp = async () => {
    let res = await genrateResetOTPAPI(enteredData.email);
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
      setEnterOtp(true);
    }
  };
  const confirmOtp = async () => {
    let res = await verifyResetOTPAPI(enteredData);
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
      localStorage.setItem("token", res.data.token);
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
      setStepper(2);
    }
  };

  return (
    <div className="otpleft_content">
      <div className="title">Enter Your Email</div>
      <div className="input_group">
        <label>Email</label>
        <BootstrapInput
          type="email"
          name="email"
          value={enteredData.email}
          onChange={enteringData}
        />
      </div>
      <div className="input_group">
        <label>OTP</label>
        <BootstrapInput
          type="number"
          name="otp"
          value={enteredData.otp}
          onChange={enteringData}
          disabled={!enterOtp}
        />
      </div>

      {enterOtp ? (
        <Button onClick={confirmOtp}>Verify</Button>
      ) : (
        <Button onClick={genrateOtp}>Genrate OTP</Button>
      )}
    </div>
  );
};

export default Email;
