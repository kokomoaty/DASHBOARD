import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

function DashBoard() {
  return (
    <div className="dash-board">
        <SideBar/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default DashBoard