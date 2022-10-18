import React from "react";

///////////////////ICONS///////////////////////
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";


//////////////////////CSS//////////////
import "./TopBar.scss";



const TopBar = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <>
      <div className="topbar_container">
        <div className="tabs_box">
          {tabs.map((data) => {
            return (
              <>
                <div
                  className="tab"
                  style={
                    selectedTab == data
                      ? { color: "#00caef", borderBottom: "2px solid #00caef" }
                      : null
                  }
                  onClick={() => setSelectedTab(data)}
                >
                  {data}
                </div>
              </>
            );
          })}
        </div>
        <div className="action_box">
          <div className="action">
            <AiOutlineUser />
          </div>
          <div className="action">
            <BsFillBellFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
