import React, { useState } from 'react'

const ColorPicker = () => {
  const [color,setcolor]=useState("#fffffff")
  function handelcolor(event){
    setcolor(event)
  }
  return (
   <div className="colorpicker-container" >
    <h1>Pick a color</h1>
    <div className="colorpicker" style={{backgroundColor:color}}>
      <p>Selected color </p>
    </div>
    <label >Select  a color</label>
    <input type="color" value={color} onChange={handelcolor} />
   </div>
  )
}

export default ColorPicker