import React from 'react'
import Card from './Card'
import Students from './pages/Students'
const App = () => {
  return (
    <>
    <Card/>
    <Students name="sravan" age={21} islogoedin={true}/>
    <Students name="Kumar" age={22}/>
    </>
  )
}

export default App