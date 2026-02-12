import React, { useState } from 'react'

const SignUp = () => {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
  return (
    <>
    <h2>SignUp Page</h2>
    <form action="">
        <input type="text" placeholder='Enter the User Name' required value={name} onChange={(e)=>(setname.target.value)}/>
        <input type="text" placeholder='Enter mailId' required value={email} onChange={(e)=>(setemail.target.value)} />
        <input type="password" placeholder='Enter Password' required value={password} onChange={(e)=>(setpassword.target.value)} />
    </form>
    </>
  )
}

export default SignUp