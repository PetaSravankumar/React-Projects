import React from 'react'
import Parent from './Parent'
const Grandparent = () => {
  return (
   <>
   <h2>this is grand parent</h2>
   <Parent/>
   </>
  )
}

export default Grandparent