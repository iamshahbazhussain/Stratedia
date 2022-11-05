import React, { useState, useRef } from "react";

// Icons 
import { MdEdit } from "react-icons/md";

// Pics 
import profile from "../../Assets/profile.webp";

// CSS 
import "./Profile.scss";


const Profile = () => {

  // Image Upload States 

  const fileuploadref = useRef(null);
  const [enteredData, setEnteredData] = useState({
    img: null,
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

  const onupload = () => {
    fileuploadref.current.click();
  };

  const uploadFile = async (event) => {
    let file = event.target.files[0];

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    let stringFile = await toBase64(file);

    setEnteredData((preVal) => {
      return {
        ...preVal,
        img: stringFile,
      };
    });
  };



  
  return (
    <div className="main_profile">
      <div className="profile_content">
        <div className="title">Edit Profile</div>

        <div className="img" onClick={onupload}>
          <input
            ref={fileuploadref}
            style={{ display: "none" }}
            type="file"
            onChange={uploadFile}
          />
          {enteredData.img ? (
            <>
              <img src={enteredData.img} alt="Image not upload" />
            </>
          ) : (
            <img src={profile} />
          )}

          <MdEdit className="icon" />
        </div>

        <div className="input_group1">
          <label>
            First Name
            <input type="text" />
          </label>

          <label>
            Last Name
            <input type="text" />
          </label>
        </div>
        <div className="input_group2">
          <label>
            Email
            <input type="email" />
          </label>
        </div>
        <div className="input_group2">
          <label>
            Contact Number
            <input type="number" />
          </label>
        </div>
        <div className="input_group2">
          <label>
            Address
            <input type="email" />
          </label>
        </div>

        <div className="input_group1">
          <label>
            City
            <input type="text" />
          </label>

          <label>
            State
            <input type="text" />
          </label>
        </div>

        <div className="input_group1">
          <label>
            Zip Code
            <input type="text" />
          </label>

          <label>
            Country
            <input type="text" />
          </label>
        </div>

        <div className="input_group2">
          <label>
            Password
            <input type="text" />
          </label>
        </div>

        <div className="btn_sec">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
