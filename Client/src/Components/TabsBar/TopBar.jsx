import React from "react";
import { useNavigate } from "react-router-dom";

///////////////Ant Design//////////////////
import { Avatar } from 'antd';
import 'antd/dist/antd.css';

///////////////////ICONS///////////////////////
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLogout } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";


//////////////////////CSS//////////////
import "./TopBar.scss";



const TopBar = ({ tabs, selectedTab, setSelectedTab }) => {
  let Navigate = useNavigate()

  const logOut = () => {
    localStorage.clear();
    Navigate("/")
  }

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
            <abbr title="Logout" onClick={logOut}>
              <AiOutlineLogout />
            </abbr>
          </div>
          <div className="action">
            <abbr title="Settings">
              <FiSettings />
            </abbr>
          </div>
          <div className="action">
            <abbr title="Notification">
              <BsFillBellFill />
            </abbr>
          </div>
          <div className="action">
            <abbr title="Profile">
              <Avatar size={30} src='https://joeschmoe.io/api/v1/random' />
            </abbr>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
