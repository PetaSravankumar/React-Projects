import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <Link to={'/component1'}> <h1>Component1</h1>  </Link>
    <Link to={'/component2'}> <h1>Component1</h1>  </Link>
    </>
  )
}

export default Nav