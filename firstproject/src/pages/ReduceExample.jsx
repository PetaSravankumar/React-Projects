import React from "react";
const ReduceExample=()=>{
    const number=[10,20,30,40,50]
    const total=number.reduce((acc,value)=>{
        return acc+value
    },0)

    return(
        <>
        <h1>Reduced Value</h1>
        {total}
        </>
    )
}
export default ReduceExample;
