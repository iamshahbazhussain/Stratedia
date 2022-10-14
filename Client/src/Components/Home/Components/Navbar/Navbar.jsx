import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ant design components 
import { Button, Drawer } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";

// images 
import logo from "../../../../Assets/logo.png";

// icons 
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

// css 
import "./Navbar.scss";


// ant design dropdown function 

const menu = (
  <Menu
    items={[
      {
        label: <a href="#">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="#">2nd menu item</a>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);




const Navbar = () => {
  let Navigate = useNavigate()

  // drawer function and states 
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const [changeNavbar, setChangeNavBar] = useState(false);
  const changingNavBar = () => {
    if (window.scrollY >= 80) {
      setChangeNavBar(true);
    } else {
      setChangeNavBar(false);
    }
  };
  window.addEventListener("scroll", changingNavBar);

  return (
    <>
    <div className="nav_back"></div>
      <div className="main_nav" style={changeNavbar ? {boxShadow:"0px 4px 4px rgb(29 140 242 / 8%)"} : {}}>
        <div className="nav_content">
          <div className="nav_text">
            <img src={logo} />
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Products
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Use cases
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Features
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Resources
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div className="nav_text2">
            <div>Pricing</div>

            <div>Contact sales</div>
            <div onClick={() => Navigate("/login")}>Log in</div>
            <button onClick={() => Navigate("/register")}>
              Get Started
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* mobile navbar  */}

      <div className="drawer">
        <Button type="primary" onClick={showDrawer}>
          <AiOutlineMenu />
        </Button>
        <Drawer placement="top" onClose={onClose} open={open}>
          <div className="nav_start">
            <img src={logo} />

            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Products
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Use cases
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Features
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Resources
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <div className="per">Pricing</div>

            <div className="per">Contact sales</div>
            <div className="per" onClick={() => Navigate("/login")}>Log in</div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
