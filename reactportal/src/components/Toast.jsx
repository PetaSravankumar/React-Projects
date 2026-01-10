import React from 'react'
import ReactDOM from 'react-dom'
const Toast = (props) => {
 return ReactDOM.createPortal(<div 
 style={{
    position:'fixed',
    right:"30px",
    top:"30px",
    backgroundColor:"black",
    color:'white',
    padding:"20px 20px"
 }}
 >
    <h3>{props.message}</h3>
 </div>,document.getElementById("portal"))
}

export default Toast