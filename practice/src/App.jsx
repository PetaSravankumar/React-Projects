import React, { useState } from 'react'

const App = () => {
  const [state,setState]=useState(false)
  function changeState(){
    if(!state){
      setState(true)
    }
    else{
      setState(false)
    }
  }
  return (
    <>
    <button onClick={changeState}>{state}</button>
    </>
  )
}

export default App