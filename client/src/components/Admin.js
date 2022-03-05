import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Admin.css"
import Footer from './Footer'
import logo from "./images/logo.png"

const Admin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(username === "azadi" && password === "azadi@321$"){
      window.location.href = "http://localhost:3000";
    } else {
      alert("Invalid username or password");
    }
  }


  return (
    <div className='admin'>
        <div className="admin__inputs">
            <Link to={"/"}><img src={logo} alt="" /></Link>
            <div className="admin__input">
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" id="username" />
            </div>
            <div className="admin__input">
                <label htmlFor="username">Password</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" id="username" />
            </div>
            <button onClick={handleLogin} className='admin__button'>Login</button>
        </div>
    </div>
  )
}

export default Admin