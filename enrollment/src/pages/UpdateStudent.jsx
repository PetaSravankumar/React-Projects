import React from 'react'

const UpdateStudent = () => {
  return (
    <>
    <center><h2>Add Student</h2></center>
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