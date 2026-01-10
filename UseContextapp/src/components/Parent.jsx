import React,{useContext} from 'react'
import Child from './Child'
import { Data } from '../context/Data'
const Parent = () => {
    let abc=useContext(Data)
  return (
    <>
    <h2>This parent ......{abc}</h2>
    <Child/>
    </>
  )
}

export default Parent