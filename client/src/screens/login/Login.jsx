import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label htmlFor="">Email</label>
                <input type="text" className="loginInput"  placeholder='Enter your Email...'/>
                <label htmlFor="">Password</label>
                <input type="password" className="loginInput" placeholder='Enter your password...'/>
                <button className="loginButton">Login</button>
            </form>
            <Link to='/register'>
            <button className="loginRegisterButton">Register</button>
            </Link>
        </div>
    )
}

export default Login
