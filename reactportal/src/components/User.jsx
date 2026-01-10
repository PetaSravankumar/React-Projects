import React from 'react'
import ReactDOM from "react-dom"
const User = () => {
  return ReactDOM.createPortal(<div>
    <h1>this is React portal</h1>
  </div>,document.getElementById("portal"))
}

export default User