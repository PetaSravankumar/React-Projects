import React, { useState } from 'react'
import Toast from './components/Toast'
const App = () => {
  const [toast,setToast]=useState("")
  function display(){
    setToast("Item add to cart")
    setTimeout(()=>{
      setToast("")
    },2000)
  }
  return (
    <>
    <button onClick={display}>Add Item</button>
    {toast && <Toast message={toast}/>}
    </>
  )
}

export default App