import React,{useState} from 'react'
import './styles/global.css'

const App = () => {
  const [count,setCount]=useState(0)
  function increse(){
    setCount(count+1)
  }
  function decreae(){
    if (count>0){
      setCount(count-1)
    }
  }
  function reset(){
    setCount(0)
  }
  return (
    <center>
      <div className="container">
    <h1>{count}</h1>
    <button onClick={increse}>Increament</button>
    <button onClick={decreae}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </div>
    </center>
    
    
  )
}

export default App