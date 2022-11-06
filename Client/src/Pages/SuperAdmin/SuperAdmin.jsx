import React, {useState} from 'react'
import Topbar from '../../Components/TabsBar/TopBar'
import Overview from "./Overview/Overview";
import Profile from "../Profile/Profile";
import { Routes, Route } from "react-router-dom";

let Tabs = ['Dashboard']

const SuperAdmin = () => {
      
const [selectedTab, setSelectedTab] =useState('Dashboard')
  return (
    <>
    <div className="top_bar">
    <Topbar
        tabs={Tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
    />
</div>

<Routes>
<Route path="/" element={<Overview/>} />
<Route path="/profile" element={<Profile/>} />
</Routes>

    </>
  )
}

export default SuperAdmin