import React from 'react'

const List = () => {
    const fruits=['orange','mango','apple','bananna']
  
  return (
    <ul>
        {fruits.map((e,i)=>(<li key={i}>{e}</li>))}
    </ul>
  )
}

export default List