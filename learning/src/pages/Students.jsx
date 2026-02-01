import React from 'react'
import "../styles/props.css"
const Students = (props) => {
  return (
    <div className="student">
        <p>Name:{props.name}</p>
        <p>age:{props.age}</p>
    </div>
  )
}

export default Students