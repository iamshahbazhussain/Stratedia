import React from "react";
import { Link, useNavigate } from "react-router-dom";

///////////////Ant Design//////////////////
import { Avatar } from "antd";
import "antd/dist/antd.css";

///////////////////ICONS///////////////////////
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { IconButton } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//////////////////////CSS//////////////
import "./TopBar.scss";

const TopBar = ({ tabs, selectedTab, setSelectedTab }) => {
  let Navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          {/* <div className="action">
            <abbr title="Settings">
              <FiSettings />
            </abbr>
          </div> */}
          <div className="action">
            <abbr title="Notification">
              <BsFillBellFill />
            </abbr>
          </div>
          <div className="action">
            <IconButton onClick={handleClick} aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}>
              <Avatar size={30} src="https://joeschmoe.io/api/v1/random" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => {
                Navigate("/dashboard/profile")
                handleClose()
              }}>Profile</MenuItem>
              <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
