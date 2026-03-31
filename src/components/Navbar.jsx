import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
       <nav style={{backgroundColor:"gold" , display:"flex" ,gap:"20px"}}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  )
}

export default Navbar
