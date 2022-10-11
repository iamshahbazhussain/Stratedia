import React from "react";
import { Routes, Route } from "react-router-dom";

// components 
import Login from "./Components/Register/Login/Login"
import SignUp from "./Components/Register/Signup/Signup"
import Email from "./Components/Register/Signup/Component/Email/Email";
import Password from "./Components/Register/Signup/Component/Password/Password";
import Account from "./Components/Register/Signup/Component/Accounts/Account";

// css 
import "./App.scss";



const App = () => {
  
  return (
   <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/register" element={<SignUp/>}/>
     <Route path="/register/password" element={<Password/>}/>
     <Route path="/register/password/account" element={<Account/>}/>
   </Routes>
  );
};

export default App;
