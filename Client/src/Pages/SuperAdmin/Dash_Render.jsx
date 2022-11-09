import React from "react";

///////////////////Components//////////////
import SideBar from "../../Components/SideBar/SideBar";
import SuperAdmin from "./SuperAdmin";

////////////////////////CSS
import "./Dash_Render.scss";

const Dash_Render = () => {
  return (
    <>
      <div className="main_container">
        <SideBar />
        <SuperAdmin />
      </div>
    </>
  );
};

export default Dash_Render;
