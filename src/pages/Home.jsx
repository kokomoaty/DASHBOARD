import React, { useContext, useState } from 'react'
import { userContext } from '../context/UserContext'

function Home() {
    const {userInfo}=useContext(userContext);
  return (
    <div className="home dash-board-page">
        <h1 className="heading">
            Welcome, {userInfo?.name}
        </h1>
        <p className="date">
            <img src="/assets/date.png" alt="" />
            {new Date().toDateString()}
        </p>
        <div className="admin-info">
            <table className="admin-table">
                <tr>
                    <th>Name</th>
                    <td>{userInfo?.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{userInfo?.email}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{userInfo?.phone}</td>
                </tr>
                <tr>
                    <th>Role</th>
                    <td>{userInfo?.role}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Home