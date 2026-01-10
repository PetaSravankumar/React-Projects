import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddStudent = () => {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [department,setdepartment]=useState("")
    const [course,setcourse]=useState("")

    const navigate=useNavigate()

    function handelForm(e){
        e.preventDefault()
        let data={name,email,department,course}
        axios.post("http://localhost:5000/users",data)
        .then(()=>{
            setname("")
            setemail("")
            setdepartment("")
            setcourse("")
            navigate("/viewstudent")
        })
        .catch(err=>console.log(err))
    }
  return (
    <>
    <center><h2>Add Student</h2></center>
    <center>
    <form action="" onSubmit={handelForm}>
        <input type="text" placeholder='Enter Name' required value={name} onChange={(e)=>{
            setname(e.target.value)}} /><br />
        <input type="text" placeholder='Enter Email' required value={email} onChange={(e)=>{setemail(e.target.value)}}/><br />
        <input type="text" placeholder='Enter Department' required value={department} onChange={(e)=>{setdepartment(e.target.value)}}/><br />
        <input type="text" placeholder='Enter Course' required value={course} onChange={(e)=>{setcourse(e.target.value)}} /><br />
        <button>Add Student </button>
    </form>
    </center>
    </>
  )
}

export default AddStudent