import React,{ useState,useEffect } from 'react'
import { Link,withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import Badge from '@material-ui/core/Badge';
import { logout } from "../redux/actions/userActions";
import '../styles/Header.scss'

function Header({location,history}) {

    const [showUser, setShowUser] = useState(false)
    const [lang,setLang] = useState('en')
    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.userLogin);

    const logoutHandler = () => {
        dispatch(logout());
        history.push("/")
    };

    useEffect(() => {
        setShowUser(false)
        console.log(userInfo)
        let wi = window.innerWidth
        if(wi < 478){
            setSearch(false)
        }
    }, [location])

    useEffect(() => {
        window.addEventListener('resize', ()=>{
            let wi = window.innerWidth
            if(wi < 578){
                setSearch(false)
            } else{
                setSearch(true)
            }
        });
    }, [window.innerHeight])

    const { t } = useTranslation();
    
    // HANDLE CHANGE LANGUAGE
    const handleLanguage = (Language)=> {
        i18n.changeLanguage(Language)
    }

    useEffect(() => {
        handleLanguage(lang)
    }, [lang])

    const [search, setSearch] = useState(true)
    const showSearch = ()=>{ setSearch(!search) }

    const [productSearch, setProductSearch] = useState('')

    // const handleSearch = () =>{
    //     dispatch(searchProduct(productSearch))   
    // }

    return (
        <div className="header">
            <div className="header__top">
                <div className="menu">
                    <Link to='/'><h3>Akaguriro</h3></Link>
                    { search &&
                    <div className="searchBar">
                        <input value={productSearch} onChange={(e)=>setProductSearch(e.target.value)} placeholder="Search your product here" type="text"/>
                        <SearchRoundedIcon/>
                    </div>
                    }
                </div>
                
                <div className="tools">
                    <SearchRoundedIcon className="showSearch" onClick={showSearch}/>
                    <div className="tools__login">
                        { userInfo ? 
                            <>
                            <div className="user" onClick={()=>setShowUser(!showUser)}>
                                <PersonRoundedIcon/>
                                <h4>{userInfo.name}</h4>
                            </div>
                            
                            
                            {showUser && 
                            <ul className="userInfo">
                                <li onClick={logoutHandler}>{t('Logout')}</li>
                                <Link to="/profile"><li>{t('Profile')}</li></Link>
                                {userInfo.isAdmin && 
                                <>
                                <Link to="/users"><li>{t('Users')}</li></Link>
                                <Link to="/products"><li>{t('Products')}</li></Link>
                                </>}
                            </ul>}

                            </> : <Link to="login"><h4>{t('Login')}</h4></Link>
                        }
                    </div>
                    <Link to='/myCart'>
                        <Badge badgeContent={cartItems.reduce((acc, item) => acc + item.qty, 0)} color="secondary">
                            <ShoppingCartRoundedIcon/>
                        </Badge>
                        <h4>Cart</h4>
                    </Link>
                    <div className="tools__language">
                        { lang === 'fr' ? 
                            <img src="/england-icon.png" onClick={()=>setLang('en')}/> 
                            : <img src="/france-icon.png" onClick={()=>setLang('fr')}/>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)
