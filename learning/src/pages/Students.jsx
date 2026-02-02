import React from 'react'
import PropTypes from 'prop-types'
import "../styles/props.css"
const Students = (props) => {
 
  return (
    <div className="student">
      {props.isloggedin ?(<h1>Welcome to {props.name}</h1>):(<h1>Try To Login</h1>)}
        <p>Name:{props.name}</p>
        <p>age:{props.age}</p>
    </div>
   
  )
}

Students.PropTypes={
    name:PropTypes.string,
    age:PropTypes.number
}
Students.defaultProps={
    name:"Guest",
    age:0
}

export default Students