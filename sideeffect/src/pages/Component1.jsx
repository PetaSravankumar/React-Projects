
import React,{ useEffect } from 'react'

const Component1 = () => {
    useEffect(()=>{
        console.log("componet1 mounted")
        return()=>{
            console.log("component 1 is unmounted");
            
        }
        
        
    },[])
  return (
    <>
    <div style={{padding:"500px",border:"5px solid red"}}>
        <h1>THis is component 1 pages</h1>
    </div>
    </>
  )
}

export default Component1