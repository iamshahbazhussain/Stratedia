import React from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from "../../Assets/logo.png"

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { TbReport } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';


import "./SideBar.scss"



const SideBar = () => {
    let history = useNavigate()

    return (
        <>
            <div className="sidebar_container">
                <div className="logo_box" onClick={() => history("/dashboard")}>
                    <img src={Logo} alt="" />
                </div>
                <div className="links_box">
                    <div className="link" onClick={() => history.push("/dashboard")}>
                        <MdDashboard/>
                        <p>Dashboard</p>
                    </div>
                    <div className="link" onClick={() => history.push("/dashboard/details")}>
                       <FaFacebookF/>
                        <p>Facebook</p>
                    </div>
                    <div className="link">
                        <FaInstagram/>
                        <p>Instagram</p>
                    </div>
                    <div className="link">
                        <FaTwitter/>
                        <p>Twitter</p>
                    </div>
                    <div className="link">
                        <FaGoogle/>
                        <p>Google</p>
                    </div>
                    <div className="link">
                        <FaFacebookMessenger/>
                        <p>Messaging</p>
                    </div>
                    <div className="link">
                        <TbReport/>
                        <p>Reports</p>
                    </div>
                    <div className="link">
                        <BiSupport/>
                        <p>Support</p>
                    </div>
                    <div className="link">
                        <FiSettings/>
                        <p>Setting</p>
                    </div>
                    {/* <div className="link">
                        <img src={inventory} alt="" />
                        <p>Inventory</p>
                    </div>
                    <div className="link">
                        <img src={inan} alt="" />
                        <p>Inventory Analytics</p>
                    </div>
                    <div className="link">
                        <img src={info} alt="" />
                        <p>Inventory Forecast</p>
                    </div>
                    <div className="link">
                        <img src={locations} alt="" />
                        <p>Location</p>
                    </div>
                    <div className="link">
                        <img src={operators} alt="" />
                        <p>Operators</p>
                    </div>
                    <div className="link">
                        <img src={products} alt="" />
                        <p>Products</p>
                    </div>
                    <div className="link">
                        <img src={sales} alt="" />
                        <p>Sales Forecast</p>
                    </div>
                    <div className="link">
                        <img src={emoji} alt="" />
                        <p>Users</p>
                    </div>
                    <div className="link">
                        <img src={virtual} alt="" />
                        <p>Vertual Try on</p>
                    </div>
                    <div className="link">
                        <img src={performance} alt="" />
                        <p>Product Performance</p>
                    </div>
                    <div className="link">
                        <img src={mperformance} alt="" />
                        <p>Machine Performance</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default SideBar