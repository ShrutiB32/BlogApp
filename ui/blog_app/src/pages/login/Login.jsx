import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label htmlFor='email'>Email</label>
            <input type="text" 
            className="loginInput"
            id="email" placeholder="Enter your email..."/>
            <label>Password</label>
            <input type="password" 
            className="loginInput"
            placeholder='Enter your password...'/>
            <button className="loginButton">Log In</button>
            
        </form>
            <button className="registerButton"><Link className="link" to="/register">Register</Link></button>
    </div>
  )
}

export default Login