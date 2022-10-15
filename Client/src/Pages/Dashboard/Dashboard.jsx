import React from 'react'
import './Dashboard.scss'
import Sidebar from './Sidebar/Sidebar'
import MainDash from './MainDash/MainDash'

const Dashboard = () => {
  return (
    <div className="Dashboard_main">
 
    <div className="Dashboard_glass">
    <Sidebar/>
      <MainDash/>
   
    </div>
  </div>
  )
}

export default Dashboard