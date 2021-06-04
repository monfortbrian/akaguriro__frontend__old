import React, { useState, useEffect} from 'react'
import {useTranslation} from "react-i18next"
import i18n from '../i18n'
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions.js";
import { Link } from 'react-router-dom'
import ProductSlider from '../components/ProductSlider'
import Cards from '../components/Cards'
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/homePage.scss'

function HomePage({cards}) {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const { t } = useTranslation();
    
    return (
        <div className="feed">
            <div className="feed__category">
                <Link to="/">{t('Gadgets')}</Link>
                <Link to="/">{t('Home appliance')}</Link>
                <Link to="/">{t('Grocery')}</Link>
                <Link to="/">{t('Fashion')}</Link>
                <Link to="/">{t('Furniture')}</Link>
            </div> 
            <div className="feed__content">
                <ProductSlider/>

                {
                    loading ? <div className="loader"><CircularProgress color='inherit'/></div>:
                    error ? <div>{error}</div>:
                    products && products?.products?.length > 0 ? <Cards cards={products?.products}/>:
                    <div className="error">{t('This list is empty')}</div>
                }
                
            </div>           
        </div>
    )
}

export default HomePage