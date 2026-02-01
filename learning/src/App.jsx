import React from 'react'
import Card from './Card'
import Students from './pages/Students'
const App = () => {
  return (
    <>
    <Card/>
    <Students name="sravan" age={21}/>
    </>
  )
}

export default App