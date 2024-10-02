import React from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label htmlFor='username'>Username</label>
            <input type="text" 
            className="registerInput"
            id="username" placeholder="Enter your username..."/>

            <label htmlFor='email'>Email</label>
            <input type="text" 
            className="registerInput"
            id="email" placeholder="Enter your email..."/>

            <label>Password</label>
            <input type="password" 
            className="registerInput"
            placeholder='Enter your password...'/>

            <button className="registerButton">Register</button>
            
        </form>
        <Link className="link" to="/login">Login</Link>
    </div>
  )
}

export default Register