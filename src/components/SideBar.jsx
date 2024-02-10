import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/UserContext'
function SideBar() {
    const {signOut}=useContext(userContext);
  return (
    <div className="side-bar">
        <div className="logo">
            <img src="/assets/chart.png" alt="" /> DashBoard
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <img src="/assets/home.png" alt="" /> Home
                        </Link>
                </li>
                <li>
                    <Link to="/products">
                        <img src="/assets/products.png" alt="" /> Products
                        </Link>
                </li>
                <li>
                    <Link to="/users">
                        <img src="/assets/users.png" alt="" /> Users
                        </Link>
                </li>
                <li>
                    <Link onClick={signOut}>
                    <img src="/assets/quit.png" alt="" /> Sign Out
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default SideBar