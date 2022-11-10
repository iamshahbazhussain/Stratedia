import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updatePasswordAPI } from "../../../../../API/register";

// MUI
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

// CSS :
import "./ResetPassword.scss";

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

const ResetPassword = () => {
  const [enteredData, setEnteredData] = useState({
    password: "",
    cPassword: "",
  });

  const enteringData = (event) => {
    let { name, value } = event.target;
    setEnteredData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const savePassword = async () => {
    if (enteredData.password != enteredData.cPassword) {
      toast.warn("Confirm Password Doesn't Match", {
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
      let res = await updatePasswordAPI(enteredData.password);
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
        localStorage.clear();
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      }
    }
  };

  return (
    <div className="resetleft_content">
      <div className="title">Create Your New Password.</div>
      <div className="input_group">
        <label>New Password</label>

        <BootstrapInput
          type="password"
          name="password"
          value={enteredData.password}
          onChange={enteringData}
        />
      </div>
      <div className="input_group">
        <label>Confirm Password</label>

        <BootstrapInput
          type="password"
          name="cPassword"
          value={enteredData.cPassword}
          onChange={enteringData}
        />
      </div>

      <Button onClick={savePassword}>Update</Button>
    </div>
  );
};

export default ResetPassword;
