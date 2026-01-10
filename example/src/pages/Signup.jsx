import React,{useState} from 'react'
import axios from 'axios'
const Signup = () => {
    const [username,setusername]=useState("")
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [phone,setphone]=useState("")
    function handelform(e){
        e.preventDefault()
        const data={username,name,email,password,phone}
        axios.post("http://localhost:5000/user",data)
        .then(()=>{
            setusername("")
            setname("")
            setemail("")
            setpassword("")
            setphone("")
            alert("data saved")
        })
        .catch(err=>console.log(err)
        )
    }
  return (
    <>
    <center><h1>SignUp Form</h1></center>
    <center>
        <form onSubmit={handelform}>
            <input type="text" placeholder='Enter UserName' required value={username} onChange={(e)=>{setusername(e.target.value)}}/><br /><br />
            <input type="text" placeholder='Enter Name' required  value={name} onChange={(e)=>{setname(e.target.value)}}/> <br /><br />
            <input type="text"  placeholder='Enter Email' required value={email} onChange={(e)=>{setemail(e.target.value)}}/><br /><br />
            <input type="text" placeholder='Enter Password' required value={password} onChange={(e)=>{setpassword(e.target.value)}} /><br /><br />
            <input type="number" placeholder='Enter Phone Number' required value={phone} onChange={(e)=>{setphone(e.target.value)}} /><br /><br />
            <button type='submit'>SignUp</button>
        </form></center>
    </>
  )
}

export default Signup