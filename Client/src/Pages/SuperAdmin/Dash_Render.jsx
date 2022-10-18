import React from 'react'

import SideBar from '../../Components/SideBar/SideBar'
import Dashboard from '../../Pages/SuperAdmin/Dashboard/Dashboard'



import { Route } from 'react-router-dom'

import './Dash_Render.scss'

const Dash_Render = () => {
  return (
    <div className="main_container">
    <SideBar />
<Dashboard/>
</div>
  )
}

export default Dash_Render