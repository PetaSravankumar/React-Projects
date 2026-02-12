import React, { useState } from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'
const Login = () => {
    const [name,setname]=useState("")
    const [Password,setpassword]=useState("")
    const handelform=(e)=>{
        e.preventDefault()
        const storedata=JSON.parse(localStorage.getItem("user"))
        if(!storedata){
            alert("no user data please signup")
        }
        if (name===storedata.name && Password===storedata.password){
            alert("Login sucessfull")
        }
        else{
            alert("Invalid credientals")
        }
        console.log(name,Password);
        
        setname("")
        setpassword("")
    }
  return (
    <div className="parent">
   <div className="loginclass">
   <h2>Login Page</h2>
   <form onSubmit={handelform} >
    <input type="text" placeholder='Enter the UserName' required value={name} onChange={(e)=>setname(e.target.value)}/> <br />
    <input type="password" placeholder='Enter password' required value={Password} onChange={(e)=>setpassword(e.target.value)}/> <br />
    <button type='submit'>Submit</button>
    
   </form>
   </div>
   <div className='signuplogin'>
    <h2>Hello Welcome !</h2>
    <p>don't have an account </p>
    <Link to="/signup" className="registerbtn">Register</Link>
   </div>
   </div>
  )
}

export default Login