import React, { useState } from 'react'

const Button = () => {
    function handelevent1(){
        console.log("helloe every one");
        
        
    }
    const handelevent2=(name)=>{
        console.log(`${name} hit me hard bro`);
        
    }
    const gogelbutton=()=>{
      sethandelevent(!handelevent)
    }
    const [handelevent,sethandelevent]=useState(false)
    function eventhandel(){
      if (!handelevent){
        handelevent1()
        gogelbutton()
      }
      else{
        handelevent2("sravan")
        gogelbutton()
      }
      
    }
  return (
    <>
    <button onClick={eventhandel}>click me ❤️😍</button>
    </>
  )
}

export default Button