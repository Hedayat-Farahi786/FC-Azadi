import React from 'react'
import { Link } from 'react-router-dom'
import "./Admin.css"
import Footer from './Footer'
import logo from "./images/logo.png"

const Admin = () => {
  return (
    <div className='admin'>
        <div className="admin__inputs">
            <Link to={"/"}><img src={logo} alt="" /></Link>
            <div className="admin__input">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="admin__input">
                <label htmlFor="username">Password</label>
                <input type="password" id="username" />
            </div>
            <button className='admin__button'>Login</button>
        </div>
    </div>
  )
}

export default Admin