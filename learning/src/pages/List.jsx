import React from 'react'

const List = () => {
    const fruits=['orange','mango','apple','bananna']
    const fruitsList=fruits.map(e=><li>{e}</li>)
  return (
    <ul>{fruitsList}</ul>
  )
}

export default List
