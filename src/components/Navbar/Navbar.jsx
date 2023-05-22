import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContexts/AuthContext'

const getActiveStyle = ({isActive}) => ({

  margin : "1rem 0",
  fontWeight : isActive ? "600" : "200",
  padding : isActive ? "1rem" : "0.5rem",
  color : isActive ? "red" : ""

})

const Navbar = () => {
  
 const {isLoggedIn,handleLogin} = useContext(AuthContext);
 
 
  
  return (
    <nav>
        <NavLink style={getActiveStyle} to="/">Home</NavLink>
       
        <NavLink style={getActiveStyle} to="/wishlist">wishlist</NavLink>
        <NavLink style={getActiveStyle} to="/store">store</NavLink>
        <NavLink style={getActiveStyle} to="/cart">cart</NavLink>
        <NavLink style={getActiveStyle} to="/login"><button onClick={handleLogin}>{isLoggedIn ? "logout" : "login" }</button></NavLink>
    </nav>
  )
}

export default Navbar