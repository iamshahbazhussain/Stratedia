import React from "react";

///////////////////Components//////////////
import SideBar from "../../Components/SideBar/SideBar";
import Dashboard from "../../Pages/SuperAdmin/Dashboard/Dashboard";


////////////////////////CSS
import "./Dash_Render.scss";


const Dash_Render = () => {
  return (
    <div className="main_container">
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default Dash_Render;
