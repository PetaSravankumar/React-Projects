import React,{useState} from 'react'

const AddStudents = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [dept,setDept]=useState("")
    const [college,setCollege]=useState("")
    const handelsubmit=(e)=>{
        e.preventDefault()
        const student={
        username,
        email,
        dept,
        college
    }
    console.log(student);
        
    }
    
    
  return (
    <>
    <form onSubmit={handelsubmit}>
        <input type="text" placeholder='Enter Student Name' required value={username} onChange={(e)=>setUsername(e.target.value)}/><br />
        <input type="email" placeholder='Enter Student Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
        <input type="text"  placeholder='Enter Department' required value={dept} onChange={(e)=>setDept(e.target.value)}/><br />
        <input type="text" placeholder='collegeName' required value={college} onChange={(e)=>setCollege(e.target.value)}/><br />
        <button>Submit</button>
    </form>
    </>
  )
}

export default AddStudents