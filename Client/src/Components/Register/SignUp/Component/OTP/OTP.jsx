import React, { useEffect, useState } from "react";

import { Modal } from "antd";

import {
  genrateEmailOTPAPI,
  verifyEmailOTPAPI,
} from "../../../../../API/register";

import "antd/dist/antd.css";
import "./OTP.scss";
import { toast } from "react-toastify";

const OTP = () => {
  const [openVerifyOtpModal, setOpenVerifyOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [genrated, setGenrated] = useState(false);

  const enteringOtp = (event) => {
    setOtp(event.target.value);
  };

  const closeVerifyOtpModal = () => {
    setOpenVerifyOtpModal(false);
  };
  const showVerifyOtpModal = () => {
    setOpenVerifyOtpModal(true);
  };

  const confirmOTP = async () => {
    let res = await verifyEmailOTPAPI(otp);
    if (res.error != null) {
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
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 3000);
    }
  };

  const genratingOtp = async () => {
    let res = await genrateEmailOTPAPI();
    if (res.error != null) {
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
      setGenrated(true);
    }
  };
  useEffect(() => {
    if (openVerifyOtpModal) {
      genratingOtp();
    }
  }, [openVerifyOtpModal]);

  return (
    <div>
      <Modal
        className="modal"
        open={openVerifyOtpModal}
        onCancel={closeVerifyOtpModal}
      >
        <div className="main_otplogin">
          <div className="title">Enter OTP</div>
          <p>
            Enter the confirmation code. We send to your email to verify your
            email.
          </p>
          <div className="input_sec">
            <input type="text" value={otp} onChange={enteringOtp} />
            <button className="log" onClick={confirmOTP}>
              Verify
            </button>
          </div>
        </div>
      </Modal>
      <div className="btn_otp">
        <div className="click"> Please click here to verify your email. </div>
        <button onClick={showVerifyOtpModal}>Verify</button>
      </div>
    </div>
  );
};

export default OTP;
