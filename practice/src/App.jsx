import React, { useState } from 'react'

const App = () => {
  const [text,setText]=useState("")
  function countChar(event){
    setText(event.target.value) 
  }

  return (
    <>
    <input type="text" required placeholder='enter the input' />
    <h2 value={text} onChange={setText(countChar)}></h2>
    </>
  )
}

export default App