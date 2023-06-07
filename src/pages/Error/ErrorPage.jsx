import React from 'react'
import { NavLink } from 'react-router-dom'
import "./errorPage.css"
const ErrorPage = () => {
  return (
    <div>
        <div className="error-container">
            <div>
                <h3>Oh! Page Not Found! 404</h3>
                <p>The page you are looking for does not exist</p>
                <NavLink to="/">
                <button className='btn'>Go back To Home Page</button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage