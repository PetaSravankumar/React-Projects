import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/signup.css'
const SignUp = () => {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const handelsubmit=(e)=>{
        e.preventDefault()
        const userdata={
            name,
            email,
            password
        }
        console.log(name,email,password);
        localStorage.setItem("user",JSON.stringify(userdata))
        alert("Signup Sucessfull")
        setname("")
        setemail("")
        setpassword("")
        
    }
  return (
    <div className="container">
    <div className="loginclass">
        <h2>Hello Back</h2>
        <p>Already have an account</p>
        <Link to={'/'} className='loginbutton'>Login</Link>
    </div>
    <div className="signupclass">
    <h2>SignUp Page</h2>
    <form onSubmit={handelsubmit}>
        <input type="text" placeholder='Enter the User Name' required value={name} onChange={(e)=>(setname(e.target.value))}/> <br />
        <input type="text" placeholder='Enter mailId' required value={email} onChange={(e)=>(setemail(e.target.value))} /> <br />
        <input type="password" placeholder='Enter Password' required value={password} onChange={(e)=>(setpassword(e.target.value))} /> <br />
        <button type='submit'>Submit</button>
    </form>
    
    </div>
    </div>
  )
}

export default SignUp