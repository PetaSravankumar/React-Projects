import React from 'react'
import Nav from './components/Nav'
import Home from './pages/home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </Router>
    
    
    </>
  )
}

export default App