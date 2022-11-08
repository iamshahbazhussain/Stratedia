import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Topbar from '../../Components/TabsBar/TopBar'
import Overview from "./Overview/Overview";
import Profile from "../Profile/Profile";
import Users from '../Users/Users';

import './SuperAdmin.scss'





let Tabs = ['Dashboard']

const SuperAdmin = () => {

  const [selectedTab, setSelectedTab] = useState('Dashboard')
  return (
    <>
      <div className="top_bar">
        <Topbar
          tabs={Tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="main_route">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/users" element={<Users />} />
          </Routes>
        </div>
      </div>


    </>
  )
}

export default SuperAdmin