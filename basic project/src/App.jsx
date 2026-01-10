// import React,{useState} from 'react'
// import Nav from './components/Nav'
// import Home from './pages/Home'
// import Profile from './pages/Profile'
// import Settings from './pages/Settings'
// import Reels from './pages/Reels'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// const App = () => {
//   const [state,setState]=useState(false)
//   function toggle(){
//     setState(!state)
//   }

//   return (
//     <>
//     {/* <Router>
//       <Nav/>
//       <Routes>
//         <Route path='/Home' element={<Home/>}/>
//         <Route path='/profile' element={<Profile/>} />
//         <Route path='/settings' element={<Settings/>}/>
//         <Route path='/reels' element={<Reels/>} />
//       </Routes>
//     </Router> */}
//     <h1>{state ?"welcome to the page" :"Please Login"}</h1>
//     <button onClick={toggle}>{state?"Logout":"Login"}</button>
//     </>
//   )
// }

// export default App

// import React,{useState} from 'react'

// const App = () => {
//   const [state,setState]=useState(false)
//   function toggle(){
//     setState(!state)
//   }
//   return (
//     <>
//     <h1>{state ?"welcome to the page" :"Please Login"}</h1>
//     <button onClick={toggle}>{state?"Logout":"Login"}</button>
//     </>
    
//   )
// }

// export default App


// import React,{useState} from 'react'

// const App = () => {

//   const [state,setState]=useState(false)
//   function toggle(){
//     setState(!state)
//   }

//   return (
//     <>
//     <img height={"200px"} width={"200px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQo3lcGCN9RfJvDgOvt3r-F-BbzULBTuVbA&s" alt="" />
//     <h2>Name:Oppo</h2>
//     <h2>Price:20000</h2>
//     <h2>Ratings</h2>
//     <button onClick={toggle}>{state?"View Less":"View More"}</button>
//     {state && <div>
//       <h3>Specifications</h3>
//       <h3><b>Battery:</b>5000mah</h3>
//       <h3><b>Camera:</b>50Mp</h3>
//     </div> }
//     </>
//   )
// }

// export default App

import React ,{useState} from 'react'

const App = () => {
  const [state,setstate]=useState("")
  const [email,setemail]=useState("")
  return (
    <>
    <h1>Namee :{state}</h1>
    <h1>Email :{email}</h1>
    <input type="text" value={state} onChange={(e)=>{
      setstate(e.target.value)
    }}/>
    <input type="text" value={email} onChange={(e)=>{
      setemail(e.target.value)
    }} />
    </>
  )
}

export default App