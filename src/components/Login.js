import React from 'react'
import { Button } from '@material-ui/core'
import '../styles/Login.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Login() {
    const {t}=useTranslation()
    return (
        <div className="login">
            <h2>Sign In</h2>
            <form className="login__form">
                <label htmlFor='email'>{t('Email adress')}</label>
                <input type='email' placeholder="Enter tour email here"/>

                <label htmlFor='password'>{t('Password')}</label>
                <input type='password' placeholder="*********"/>

                <Button type='submit'>{t('Sign In')}</Button>
            </form>
            <p>{t('New customer')}? <Link to="/register">{t('register')}</Link></p>
        </div>
    )
}

export default Login
