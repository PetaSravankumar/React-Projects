import React, { useState } from 'react'

const Mycomponent = () => {
  const [food,setfood]=useState(["apple","orange","Banana"]);
  
  return (
    <div>
      <h2>List of fruits</h2>
      <ul>
        {food.map((items,index)=><li key={index}>{items}</li>)}
      </ul>
    </div>
  )
}

export default Mycomponent