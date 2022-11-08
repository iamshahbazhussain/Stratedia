import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updatePasswordAPI } from '../../../../../API/register';

// CSS :
import '../LoginContent/LoginContent.scss'





const ResetPassword = () => {

  const [enteredData, setEnteredData] = useState({
    password: "",
    cPassword: ""
  })

  const enteringData = (event) => {
    let { name, value } = event.target;
    setEnteredData((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

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
      let res = await updatePasswordAPI(enteredData.password)
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
        localStorage.clear()
        setTimeout(() => {
          window.location.href = "/login"
        }, 3000);
      }
    }
  }

  return (
    <div className="left_content">
      <div className="title">Create Your New Password.</div>
      <div className="input_group">
        <label>New Password</label>
        <input type='password' name='password' value={enteredData.password} onChange={enteringData} />
      </div>
      <div className="input_group">
        <label>Confirm Password</label>
        <input type='password' name='cPassword' value={enteredData.cPassword} onChange={enteringData} />
      </div>

      <button onClick={savePassword}>Update</button>


    </div>
  )
}

export default ResetPassword