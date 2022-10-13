import React, { useState } from "react";

import "antd/dist/antd.css";

import { Button, Drawer } from "antd";

import logo from "../../../../Assets/logo.png";

import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

import "./Navbar.scss";

const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
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
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="main_nav">
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
            <div>Log in</div>
            <button>
              Get Started
              <svg
                width="14"
                height="18"
                viewBox="0 0 9 7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="drawer">
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
        <Drawer placement="left" onClose={onClose} open={open}></Drawer>
      </div>
    </>
  );
};

export default Navbar;
