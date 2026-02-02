import React from 'react'
import PropTypes from 'prop-types'
import "../styles/props.css"
const Students = (props) => {
   if (props.islogoedin){
      return <h2>Welcome to {props.name}</h2>
    }
    else{
      return <h2>Try to Login In</h2>
    }
  return (
    <div className="student">
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