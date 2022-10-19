import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

//////////////////Imgs////////////////
import Logo from "../../Assets/logo.png";

//////////////////Sidebar data/////////////////////////////////
import { SidebarData } from "./Data";

//////////////////Framer motion animation /////////////////////
import { motion } from "framer-motion";

///////////////////Icons////////////// 
import { UilBars } from "@iconscout/react-unicons";

////////////////////CSS//////////////////
import "./SideBar.scss";



const SideBar = () => {
    let Navigate = useNavigate()

    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true);

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
                style={expanded ? { left: "280px" } : { left: "5%" }}
                onClick={() => setExpaned(!expanded)}
            >
                <UilBars />
            </div>
            <motion.div
                className="sidebar"
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ""}
            >
                {/* logo */}
                <div className="logo" onClick={()=>Navigate("/")}>
                    <img src={Logo} alt="logo" />
                </div>

                <div className="menu">
                    {SidebarData.map((item, index) => {
                        return (
                            <div
                                className={selected === index ? "menuItem active" : "menuItem"}
                                key={index}
                                onClick={() => setSelected(index)}
                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </div>
                        );
                    })}

                    <div className="menuItem"></div>
                </div>
            </motion.div>
        </>
    );
};

export default SideBar;
