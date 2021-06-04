import React from 'react'
import Button from '@material-ui/core/Button';
import '../styles/MyCart.scss'
import { useTranslation } from 'react-i18next';

function MyCart({cards}) {
   const {t}= useTranslation()
    return (
        <div className="myCart">
            <div className="myCart__table">
                <table className="myCart__list">
                    <thead>
                        <tr>
                            <td>{t('Product')}</td>
                            <td>{t('Price')}  </td>
                            <td>{t('Quantity')}</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cards.length > 0 ? 
                            cards.map( card =>{
                                return(
                                    <tr>
                                        <td className="product"><img src={card.img}/>{card.name}</td>
                                        <td>BIF 5000</td>
                                        <td><input type="number" placeholder="1" min="1" max="10"/></td>
                                    </tr>
                                )
                            }): <div>Your cart is empty</div>
                        }
                    </tbody>
                </table>
            </div>
            <div className="myCart__total">
                <h3>Cart total</h3>
                <p>Subtotal :<span>BIF 5000</span></p>
                <p>{t('Shipping')} :<span>Free Shipping</span></p>
                <p>Subtotal :<span>BIF 9500</span></p>
                <Button>{t('Proceed to checkout')}</Button>
            </div>
        </div>
    )
}

export default MyCart
