import React,{useState} from 'react'
import axios from 'axios'
const user = () => {
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")

    function handelForm(e){
        e.preventDefault()
        const data={username,email}
        axios.post("http://localhost:5000/user",data)
        .then(()=>{
            setusername('')
            setemail("")
            alert("data saved")
        })
        .catch(err=>console.log(err)
        )
    }

  return (
    <> 
    <center><h1>User Registeration</h1></center>
    <center>
        <form action="" onSubmit={handelForm}>
        <input type="text" placeholder='Enter User name' required value={username} onChange={(e)=>{
            setusername(e.target.value)
        }}/> <br /><br />
        <input type="text" placeholder='Enter the Email' required value={email} onChange={(e)=>setemail(e.target.value)}/> <br /> <br />
        <button>Register</button>
        </form>
    </center>
    </>
  )
}

export default user