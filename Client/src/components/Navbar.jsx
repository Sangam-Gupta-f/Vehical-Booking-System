import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'));  
  return (
    <div>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/logout">Logout</Link>
          <Link to="/check-vehicle">Book Vehicle</Link>
          <Link to="/add-vehicle">Add Vehicle</Link>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  )
}

export default Navbar