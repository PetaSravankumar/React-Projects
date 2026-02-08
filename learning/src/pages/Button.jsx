import React from 'react'

const Button = () => {
    function handelevent(){
        console.log("helloe every one");
        
        
    }
    const handelevent2=(name)=>{
        console.log(`${name} hit me hard bro`);
        
    }
  return (
    <>
    <button onClick={()=>handelevent2("sravan")}>click me ❤️😍</button>
    </>
  )
}

export default Button