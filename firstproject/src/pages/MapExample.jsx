import React from "react";
const MapExample=()=>{
    const cartoon=["Ben 10","Chota Bheem","Motu Patlu","Jacky Chan","Hide"]

    return (
        <>
        <h1>Map Example</h1>
        <ol>
            {cartoon.map((x)=>{
                return <li>{x}</li>
            })}
        </ol>
        </>
    )
}
export default MapExample;