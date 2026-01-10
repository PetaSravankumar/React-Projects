import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const UpdateStudent = () => {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [department,setdepartment]=useState("")
    const [course,setcourse]=useState("")
    let navigate=useNavigate()

    let {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:5000/users/${id}`)
        .then((x)=>{
            setname(x.data.name)
            setemail(x.data.email)
            setdepartment(x.data.department)
            setcourse(x.data.course)

        })
        .catch(err=>console.log(err)
        )
    },[])

    function handelData(e){
        e.preventDefault()
        const data={name,email,department,course}
        axios.put(`http://localhost:5000/users/${id}`)
        .then(()=>{
            navigate("/viewstudent")
        })
        .catch(err=>console.log(err)
        )
    }

  return (
    <>
    <center><h2>Update Student</h2></center>
    <center>
    <form action="" >
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

export default UpdateStudent