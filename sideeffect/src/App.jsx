// import React,{useEffect,useState} from 'react'

// const App = () => {
//   const [user,setuser]=useState([]) 
//   useEffect(()=>{
//     fetch("https://api.github.com/users")
//     .then(x=>x.json())
//     .then(y=>setuser(y))
//     .catch(err=>console.log(err)
//     )
//   },[])
//   return (
//     <>
//     <center><h1>User</h1></center>
//     {user.map((x)=>{
//       return <div>
//         <h2>ID:{x.id}</h2>
//         <img height={"150px"} src={x.avatar_url} alt="" />
//         <h2>Name:{x.login}</h2>2
//       </div>
//     })}
//     </>
//   )
// }

// export default App

import React from 'react'
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Nav from './components/Nav'
import Component1 from './pages/component1'
import Component2 from './pages/component2'
const App = () => {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/component1' element={<Component1/>} />
        <Route path='/component2' element={<Component2/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App