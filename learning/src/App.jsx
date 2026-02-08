import React from 'react'
import Card from './Card'
import Students from './pages/Students'
import List from './pages/List'
import buttons from './pages/buttons'
const App = () => {
  return (
    <>
    <Card/>
    <Students name="sravan" age={21} isloggedin={true}/>
    <Students name="Kumar" age={22}/>
    <List/>
    
    </>
  )
}

export default App