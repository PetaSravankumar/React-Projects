import React from 'react'
import Nav from './components/nav'
import Signup from './pages/Signup'
import Login from './pages/login'
import Home from './pages/Home'
import Error from './pages/Error'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Error/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App