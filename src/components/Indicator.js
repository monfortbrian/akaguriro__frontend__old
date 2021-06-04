import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/indicator.scss'

function Indicators(props) {

    const { shipping, payment, placeorder } = props
    const { t } = useTranslation();
   
        
    return (
        <div className="indicator">
            <h4><Link to="/login">{t('Sign in')}</Link></h4>
            <h4><Link to="/shipping" className={ !shipping ? "disabled" : undefined }>{t('Shiping')}</Link></h4>
            <h4><Link to="/payment" className={ !payment ? "disabled" : undefined }>{t('Payment')}</Link></h4>
            <h4><Link to="/checkout" className={ !placeorder ? "disabled" : undefined }>{t('Place order')}</Link></h4>
        </div>
    )
}

export default Indicators
