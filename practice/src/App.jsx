import React, { useState } from 'react'

const App = () => {
  const [count,setcount]=useState(0)
 
  function addition(){
    setcount(count+1)
  }
  function dec(){
    setcount(count-1)
  }
  return (
    <>
    <p>count</p>
    <p>{count}</p>
    <button onClick={addition}>+</button>
    <button onClick={dec}>-</button>

    </>
  )
}

export default App