import React from "react";

///////////////////Components//////////////
import SideBar from "../../Components/SideBar/SideBar";


////////////////////////CSS
import "./Dash_Render.scss";
import SuperAdmin from "./SuperAdmin";





const Dash_Render = () => {

  return (
    <>
 
    <div className="main_container">
    <SideBar />
     <SuperAdmin/>
      
      </div>
      </>
  );
};

export default Dash_Render;
