import React, {useState} from 'react'


import {Modal} from "antd";
import "antd/dist/antd.css";
import './OTP.scss'


const OTP = () => {

    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  return (
    <div>
              
    <Modal className="modal" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
       <div className="main_otplogin">
<div className="title">
  Enter OTP
</div>
<p>Enter the confirmation code. We send to your email to verify your email.</p>
<div className="input_sec">
  <input type="text" /> 
  <button className="log">Verify</button>
</div>

       </div>
      </Modal>

<button onClick={showModal2}> Show </button>

    </div>
  )
}

export default OTP
