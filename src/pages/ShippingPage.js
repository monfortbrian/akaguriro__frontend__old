import React,{ useState } from 'react'
import { Button } from '@material-ui/core'
import Indicator from '../components/Indicator'
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../redux/actions/cartActions.js";
import '../styles/shipping.scss'
import { useTranslation } from 'react-i18next';

function ShippingPage({history}) {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const {t}= useTranslation()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [adress, setAdress] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault();
        // dispatch(saveShippingAddress({ address, phoneNumber}));
        history.push('/payment')
    }

    return (
        <div className="shipping">
            <Indicator shipping />
            <form className="shipping__form" onSubmit={submitHandler}>
                <h2>{('Shipping')}</h2>
                <label htmlFor='text'>Phone Number/WhatsApp number</label>
                <input type='text' placeholder="Type here" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>

                <label htmlFor='password'>{t('Password')}</label>
                <input type="text" placeholder="Enter your adress here" value={adress} onChange={(e)=>setAdress(e.target.value)}/>

                <Button type='submit'>Continue</Button>
            </form>
        </div>
    )
}

export default ShippingPage
