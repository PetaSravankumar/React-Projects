import React,{useState} from 'react'
import AddStudents from './pages/AddStudents'
const App = () => {
  const [studentlist,setstudentlist]=useState([])

  const addstudent=(student)=>{
    setstudentlist([...studentlist,student])
  }
  return (
    <>
    <AddStudents addstudent={addstudent}/>
    {studentlist.map((s,index)=>(
      <div key={index}>
        {s.username} - {s.email}
      </div>
    ))}
    </>
  )
}

export default App