import React, { useState } from 'react'

const Button = () => {
    function handelevent1(){
        console.log("helloe every one");
        
        
    }
    const handelevent2=(name)=>{
        console.log(`${name} hit me hard bro`);
        
    }
    const [handelevent,sethandelevent]=useState
  return (
    <>
    <button onClick={()=>handelevent2("sravan")}>click me ❤️😍</button>
    </>
  )
}

export default Button