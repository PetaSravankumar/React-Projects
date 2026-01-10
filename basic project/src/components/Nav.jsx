import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/global.css"
const Nav = () => {
  return (
    <>
    <div className="nav">
        <div className="left">
            <h2>Logo</h2>
        </div>
        <div className="right">
            <Link to={'/Home'} ><h2>Home</h2></Link>
            <Link to={'/profile'}><h2>Profile</h2></Link>
            <Link to={"/settings"}><h2>Settings</h2></Link>
            <Link to={'/reels'}><h2>Reels</h2></Link>
        </div>
    </div>
    </>
  )
}

export default Nav