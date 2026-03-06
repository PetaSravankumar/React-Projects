import React, { useState } from 'react'

const App = () => {
  const [text,setText]=useState("")
  function countChar(event){
    setText(event.target.value) 
  }
  

  return (
    <>
    <input type="text" required placeholder='enter the input' value={text} onChange={countChar} />
    <h2 >{text}</h2>
    <h2>{text.length}</h2>
   
    </>
  )
}

export default App