import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userActions.js";
import { Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import '../styles/Login.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function RegisterPage({ location, history }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirm, setshowConfirm] = useState(false);
    const [showConfirm2, setshowConfirm2] = useState(false);
    const [message, setMessage] = useState("");
    const {t}=useTranslation()
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const redirect = location.search ? location.search.split("=")[1] : "/";

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Password do not match");
        } else {
            dispatch(register(name, email, password));
        }
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    };
    
    return (
        <div className="login">
            <h2>{t("Register")}</h2>
            {message ? <p className="error">{message}</p > :
            error ? <p className="error">{error}</p> : ''}
            {loading && <CircularProgress color="danger"/>}
            <form className="login__form" onSubmit={submitHandler}>
                <label htmlFor='name'>{t('Name')}</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name here"/>

                <label htmlFor='email'>{t('Email adress')}</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter tour email here"/>

                <label htmlFor='password'>{t('Password')}</label>
                <div className="mdpInput">
                  <input type={showConfirm ?"text" : "password" } placeholder="*********" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <div onClick={()=>setshowConfirm(!showConfirm)}>{showConfirm ? <VisibilityOffIcon/>: <VisibilityIcon/> } </div>
                </div>

                <label htmlFor='password'>{t('Password')}</label>
                <div className="mdpInput">
                  <input type={showConfirm2 ?"text" : "password" } placeholder="*********" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                  <div onClick={()=>setshowConfirm2(!showConfirm2)}>{showConfirm2 ? <VisibilityOffIcon/>: <VisibilityIcon/> } </div>
                </div>

                <Button type='submit'>{t('Register')}</Button>
            </form>
            <p>{t('Already sign in')}? <Link to="/login">{t('login here')}</Link></p>
        </div>
    )
}

export default RegisterPage