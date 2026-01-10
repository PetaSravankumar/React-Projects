import React from "react";
import "../styles/global.css"
const Nav=()=>{
    return(
        <div className="nav">
            <div className="left">
                <h2>Logo</h2>
            </div>
            <div className="right">
                <h2>Login</h2>
                <h2>Signup</h2>
            </div>
        </div>
    )
}
export default Nav;