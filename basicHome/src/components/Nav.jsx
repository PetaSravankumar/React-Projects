import React from 'react'
import "../styles/nav.css"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <div className="nav">
        <div className="left">
            <h2>Logo</h2>
        </div>
        <div className="right">
            <Link to={'/signup'}><h2>SignUp</h2></Link>
            <Link to={'/home'}><h2>Home</h2></Link>
            <Link to={'/login'}><h2>Login</h2></Link>
            <Link to={'/settings'}><h2>Settings</h2></Link>
            <Link to={'/profile'}><h2>Profile</h2></Link>
            
        </div>
    </div>
    </>
  )
}

export default Nav