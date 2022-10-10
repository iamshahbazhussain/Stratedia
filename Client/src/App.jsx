import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Components/Register/Login/Login"
import SignUp from "./Components/Register/SignUp/Signup"


import "./App.scss";

const App = () => {
  return (
   <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/register" element={<SignUp/>} />
   </Routes>
  );
};

export default App;
