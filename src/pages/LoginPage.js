import React, { useState, useEffect }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userActions.js";
import { Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import '../styles/Login.scss'
import { Link } from 'react-router-dom'

function LoginPage({ location, history }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showMdp, setShowMdp] = useState(false);
  
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
  
    const redirect = location.search ? location.search.split("=")[1] : "/";
  
    useEffect(() => {

      if (userInfo && userInfo?.success !== false ) {
        history.push(redirect);
      }
    }, [history, userInfo, redirect]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password));

    };
    
    return (
        <div className="login">
            <h2>Sign In</h2>
            {error && <p className="error">{error}</p >}
            {loading && <CircularProgress color="inherit"/>}
            <form className="login__form" onSubmit={submitHandler}>
                <label htmlFor='email'>Email adress</label>
                <input type='email' placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <label htmlFor='password'>Password</label>
                <div className="mdpInput">
                  <input type={showMdp ?"text" : "password" } placeholder="*********" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <div onClick={()=>setShowMdp(!showMdp)}>{showMdp ? <VisibilityOffIcon/>: <VisibilityIcon/> } </div>
                </div>
                

                <Button type='submit'>Sign In</Button>
            </form>
            <p>New customer? <Link to="/register">register</Link></p>
        </div>
    )
}

export default LoginPage
