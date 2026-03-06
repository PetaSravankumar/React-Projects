import React, { useState } from 'react'

const App = () => {
  const [state,setState]=useState(false)
  function changeState(){
    setState(!state)
  }
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '25px',
    border: 'none',
    transition: '0.3s', // Makes the color change smooth
    backgroundColor: state ? '#4CAF50' : '#ccc', // Green if ON, Gray if OFF
    color: 'white',
    width: '100px'
  }
  return (
    <>
    <button onClick={changeState} style={buttonStyle}>{state ? "ON" : "OFF" }</button>
    </>
  )
}

export default App