import React from "react";
const FilterExample=()=>{
    const numbers=[10,20,30,40,50]
    const filteredData=numbers.filter((x)=>{
        return x>30;
    })
    return(
        <>
        <h1>Filte Example</h1>
        <ul>
            {filteredData.map((x)=>{
            return <li>{x}</li>
        })}
        </ul>
        
        </>
    )
}
export default FilterExample