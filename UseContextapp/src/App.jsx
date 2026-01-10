import React from 'react'
import Grandparent from './components/Grandparent'
import { Data } from './context/Data'
const App = () => {
  let name="sravan"
  return (
    <>
    <Data.Provider value={name}>
      <Grandparent/>
    </Data.Provider>
    
    </>
  )
}

export default App