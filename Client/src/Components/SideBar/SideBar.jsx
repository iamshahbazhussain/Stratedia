import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"

//////////////////Imgs////////////////
import Logo from "../../Assets/logo.png";

//////////////////Components////////////////
import OTP from '../Register/SignUp/Component/OTP/OTP'

//////////////////Sidebar data/////////////////////////////////
import { SidebarData } from "./Data";

//////////////////Framer motion animation /////////////////////
import { motion } from "framer-motion";

///////////////////Icons////////////// 
import { UilBars } from "@iconscout/react-unicons";
import { MdClose } from 'react-icons/md';

import { useSelector } from "react-redux"

////////////////////CSS//////////////////
import "./SideBar.scss";



const SideBar = () => {
    let Navigate = useNavigate()

    let userData = useSelector((state) => state.userData)

    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(false);

    const sidebarVariants = {
        true: {
            left: "0",
        },
        false: {
            left: "-100%",
        },
    };
    console.log(window.innerWidth);
    return (
        <>
            <div
                className="bars"
                // style={expanded ? { left: "280px" } : { left: "5%" }}
                onClick={() => setExpaned(true)}
            >
                <UilBars />
            </div>
            <motion.div
                className="sidebar"
                variants={sidebarVariants}
                animate={window.innerWidth <= 1200 ? `${expanded}` : ""}
            >
                {/* logo */}
                <div className="logo">

                    <img src={Logo} alt="logo" onClick={() => Navigate("/")} />
                    <MdClose className="close" onClick={() => setExpaned(false)} />
                </div>

                <div className="menu">
                    {SidebarData.map((item, index) => {
                        if (userData?.role == "admin") {
                            return (
                                <Link to={item.path} key={index} style={{ color: 'unset' }}>
                                    <div
                                        className={selected === index ? "menuItem active" : "menuItem"}
                                        key={index}
                                        onClick={() => setSelected(index)}
                                    >

                                        <item.icon />
                                        <span>{item.heading}</span>
                                    </div>
                                </Link>
                            );
                        } else {
                            if (item.heading != "Users") {
                                return (
                                    <Link to={item.path} key={index} style={{ color: 'unset' }}>
                                        <div
                                            className={selected === index ? "menuItem active" : "menuItem"}
                                            key={index}
                                            onClick={() => setSelected(index)}
                                        >

                                            <item.icon />
                                            <span>{item.heading}</span>
                                        </div>
                                    </Link>
                                );
                            }
                        }
                    })}

                    <div className="menuItem"></div>
                </div>
            </motion.div>
        </>
    );
};

export default SideBar;
