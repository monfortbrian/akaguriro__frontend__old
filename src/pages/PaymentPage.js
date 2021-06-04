import React from 'react'
import Indicator from '../components/Indicator'
import Button from '@material-ui/core/Button';
import '../styles/payment.scss'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

function PaymentPage({history}) {

    const submitHandler = (e)=>{
        e.preventDefault();
        history.push('/checkout')
    }
    const { t } = useTranslation();
    
    return (
        <div className="payment">
            <Indicator shipping payment/>
            <form className="payment__form" onSubmit={submitHandler}>
                <h2>{('Payment')}</h2>
                <input type="radio" name="payment" value="paypal" id="paypal"/><label htmlFor="paypal">Paypal</label><br/>
                <input type="radio" name="payment" value="lumitel" id="lumitel"/><label htmlFor="lumitel">Lumitel</label><br/>
                <input type="radio" name="payment" value="ecocash" id="ecocash"/><label htmlFor="ecocash">Ecocash</label>
                <Button type='submit'>Continue</Button>
            </form>
        </div>
    )
}

export default PaymentPage
