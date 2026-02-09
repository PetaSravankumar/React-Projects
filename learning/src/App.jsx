import React from 'react'
import Card from './Card'
import Students from './pages/Students'
import List from './pages/List'
import Button from './pages/Button'
import Onchange from './pages/Onchange'
const App = () => {
  return (
    <>
    <Card/>
    <Students name="sravan" age={21} isloggedin={true}/>
    <Students name="Kumar" age={22}/>
    <List/>
    <Button/>
    <Onchange/>
    </>
  )
}

export default App