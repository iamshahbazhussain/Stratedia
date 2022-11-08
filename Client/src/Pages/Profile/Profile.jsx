import React, { useState, useRef, useEffect } from "react";

// Icons 
import { MdEdit } from "react-icons/md";

// Pics 
import profile from "../../Assets/profile.webp";

// API
import { getUserDataAPI, updateUserDataAPI } from "../../API/register";
import { toast } from "react-toastify";

// CSS 
import "./Profile.scss";


const Profile = () => {

  // Image Upload States 

  const fileuploadref = useRef(null);
  const [enteredData, setEnteredData] = useState({
    firstName: "",
    lastName: "",
    profileImg: "",
    email: "",
    number: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
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
        profileImg: stringFile,
      };
    });
  };


  const saveProfile = async () => {
    let res = await updateUserDataAPI(enteredData)
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
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      gettingProfileData()
    }
  }

  const gettingProfileData = async () => {
    let res = await getUserDataAPI()
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
      setEnteredData(res.data.data)
    }
  }
  useEffect(() => {
    gettingProfileData()
  }, [])

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
          {enteredData.profileImg ? (
            <>
              <img src={enteredData.profileImg} alt="Image not upload" />
            </>
          ) : (
            <img src={profile} />
          )}

          <MdEdit className="icon" />
        </div>
        <div className="input_group1">
          <label>
            First Name
            <input type="text" name="firstName" value={enteredData.firstName} onChange={enteringData} />
          </label>
          <label>
            Last Name
            <input type="text" name="lastName" value={enteredData.lastName} onChange={enteringData} />
          </label>
        </div>
        <div className="input_group2">
          <label>
            Email
            <input type="email" name="email" value={enteredData.email} onChange={enteringData} />
          </label>
        </div>
        <div className="input_group2">
          <label>
            Contact Number
            <input type="number" name="number" value={enteredData.number} onChange={enteringData} />
          </label>
        </div>
        <div className="input_group2">
          <label>
            Address
            <input type="email" name="address" value={enteredData.address} onChange={enteringData} />
          </label>
        </div>

        <div className="input_group1">
          <label>
            City
            <input type="text" name="city" value={enteredData.city} onChange={enteringData} />
          </label>

          <label>
            State
            <input type="text" name="state" value={enteredData.state} onChange={enteringData} />
          </label>
        </div>

        <div className="input_group1">
          <label>
            Zip Code
            <input type="text" name="zipCode" value={enteredData.zipCode} onChange={enteringData} />
          </label>

          <label>
            Country
            <input type="text" name="country" value={enteredData.country} onChange={enteringData} />
          </label>
        </div>
        <div className="btn_sec">
          <button onClick={saveProfile}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
