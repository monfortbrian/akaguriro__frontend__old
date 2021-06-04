import React from 'react'
import { Button } from '@material-ui/core'
import '../styles/Login.scss'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="login">
            <h2>Register</h2>
            <form className="login__form">
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder="Enter your name here"/>

                <label htmlFor='email'>Email adress</label>
                <input type='email' placeholder="Enter tour email here"/>

                <label htmlFor='password'>Password</label>
                <input type='password' placeholder="*********"/>

                <label htmlFor='password'>Confirm password</label>
                <input type='password' placeholder="*********"/>

                <Button type='submit'>Register</Button>
            </form>
            <p>Already sign in? <Link to="/login">login here</Link></p>
        </div>
    )
}

export default Register