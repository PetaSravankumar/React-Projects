import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const ViewStudent = () => {
    const [users,setUser]=useState([])
    const navigate=useNavigate()
    function fetchData(){
        axios.get("http://localhost:5000/users")
        .then(x=>setUser(x.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetchData()
    },[])

    function handelUpdate(id){
        navigate(`/updatestudent/${id}`)
    }

  return (
    <>
    <center><h1>View Student</h1></center>
    {users.map((x)=>{
        return <div>
            <h2>Name :{x.name}</h2>
            <h2>Email :{x.email}</h2>
            <h2>Departement :{x.department}</h2>
            <h2>Course :{x.course}</h2>
            <button onClick={()=>{handelUpdate(x.id)}}>Edit</button>
            <button>Delete</button>
        </div>
    })}
    </>
  )
}

export default ViewStudent