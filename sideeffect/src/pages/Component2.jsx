
import React,{ useEffect } from 'react'

const Component2 = () => {
    useEffect(()=>{
        console.log("componet2 mounted")
        return()=>{
            console.log("component 2 is unmounted");
            
        }
        
        
    },[])
  return (
    <>
    <div style={{padding:"500px",border:"5px solid red"}}>
        <h1>THis is component 2 pages</h1>
    </div>
    </>
  )
}

export default Component2