import React from 'react'
import profilepic from './assets/shirt.jpg'
const Card = () => {
  return (
    <div className="card">
        <img src={profilepic} alt="This is The Profile pic" />
        <h2>Sravan Kumar</h2>
        <p>I am learning React Js</p>
    </div>
  )
}

export default Card