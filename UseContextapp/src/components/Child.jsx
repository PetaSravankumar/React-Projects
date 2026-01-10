import React, { useContext } from 'react'
import { Data } from '../context/Data'
const Child = () => {
    let name=useContext(Data)
  return (
    <>
    <h1>This is child ....{name}</h1>
    </>
  )
}

export default Child