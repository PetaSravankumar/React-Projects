import React, { useState } from 'react'
import '../styles/Todolist.css'
const ToDoList = () => {
    const [task,settask]=useState([])
    const [newtask,setnewtask]=useState("")
function handelevents(event){
    setnewtask(event.target.value)
}
function addtask(){
    if(newtask.trim()!=""){
        settask(t=>[...t,newtask])
        setnewtask("")
    }
    
}
function deletetask(index){
    const updatetask=task.filter((_,i)=>i!==index)
    settask(updatetask)
}
function uptask(index){
    if(index>0){
        const updatedtask=[...task];
        [updatedtask[index],updatedtask[index-1]]=[updatedtask[index-1],updatedtask[index]]
        settask(updatedtask)
    }
}
function downtask(index){
    if(index < task.length - 1){
    const updatedtask = [...task]
    ;[updatedtask[index], updatedtask[index + 1]] =
      [updatedtask[index + 1], updatedtask[index]]
    settask(updatedtask)
  }

}

  return (
    <div>
        <h2>To Do List</h2>
        <input type="text" placeholder='Enter the task ' value={newtask} onChange={handelevents}/>
        <button onClick={addtask}>ADD</button>

        <ul>
            {task.map((task,index)=><li key={index}>
                {task} <button onClick={()=>deletetask(index)}>Delete</button> <button onClick={()=>uptask(index)}>👆</button> <button onClick={()=>downtask(index)}>👇</button>
            </li>)}
        </ul>
    </div>
  )
}

export default ToDoList