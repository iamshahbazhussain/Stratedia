import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import JWTDECODE from "jwt-decode";

// MUI
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

// APIs :
import { checkEmailAPI, loginAPI } from "../../../../../API/register";
import { toast } from "react-toastify";

// CSS :
import "./LoginContent.scss";

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

const LoginContent = ({ setStepper }) => {
  let Navigate = useNavigate();

  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
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

  const login = async () => {
    const res = await loginAPI(enteredData);
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
    }
  };
  const handleGoogleLogin = async (response) => {
    if (response.credential) {
      let userObject = JWTDECODE(response.credential);
      let res = await checkEmailAPI(userObject.email, true);
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
          Navigate("/register", {
            state: {
              userData: {
                email: userObject.email,
                firstName: userObject.given_name,
                lastName: userObject.family_name,
              },
              step: 1,
            },
          });
        }
      }
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleGoogleLogin,
    });
    google.accounts.id.renderButton(document.getElementById("googleDiv"), {
      theme: "filled_blue",
      size: "large",
      text: "signup_with",
      width: "100%",
    });
  }, []);

  return (
    <div className="left_content">
      <div className="title">Login</div>

      <div className="input_group">
        <label>Email</label>
        <BootstrapInput
          name="email"
          value={enteredData.email}
          onChange={enteringData}
        />
      </div>
      <div className="input_group">
        <label>Password</label>
        <BootstrapInput
          type="password"
          name="password"
          value={enteredData.password}
          onChange={enteringData}
        />
      </div>

      <Button onClick={login}>Log in</Button>

      <div className="agree">
        <div className="already" onClick={() => setStepper(1)}>
          Did You <span>Forgot Your Password </span>?
        </div>
        <div className="already" onClick={() => Navigate("/register")}>
          Don't have an account <span>SignUP</span>?
        </div>
      </div>
      <div className="or">OR</div>
      <div id="googleDiv"></div>
    </div>
  );
};

export default LoginContent;
