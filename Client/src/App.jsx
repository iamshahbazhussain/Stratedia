import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// components 
import Login from "./Components/Register/Login/Login"
import SignUp from "./Components/Register/SignUp/Signup"
import Account from "./Components/Register/SignUp/Component/Accounts/Account";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/SuperAdmin/Dash_Render";

import { ToastContainer } from "react-toastify"

// css
import "./App.scss";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/register/password/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;