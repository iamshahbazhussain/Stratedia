import React from "react";
import { Routes, Route } from "react-router-dom";

// components 
import Login from "./Components/Register/Login/Login"
import SignUp from "./Components/Register/SignUp/Signup"
import Password from "./Components/Register/SignUp/Component/Password/Password";
import Account from "./Components/Register/SignUp/Component/Accounts/Account";
import Home from "./Components/Home/Home";

// css
import "./App.scss";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/register/password" element={<Password />} />
        <Route path="/register/password/account" element={<Account />} />
      </Routes>
    </>
  );
};

export default App;