import React from 'react';
import UserData from './components/UserData';
const App=()=>{
    let name="Sravan"
    let email="sravan@gmail.com"
    let age=22
    let address={
        city:"Bengaluru",
        state:"Karntaka"
    }
    let skills=["HTML","CSS","JS","React js"]
  return(
    <>
    <UserData name={name} email={email} age={age} address={address} skills={skills.join(",")} />
    </>
  )
}
export default App;