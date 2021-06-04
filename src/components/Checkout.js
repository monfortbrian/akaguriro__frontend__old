import React from 'react'
import '../styles/Checkout.scss'
import Button from '@material-ui/core/Button';
import Indicator from './Indicator'

function Checkout() {
    return (
        <div className="checkout">
            <Indicator shipping payment placeorder/>
            <div className="checkout__body">
                <form className="form">
                    <h3>Billing details</h3>
                    <div className="input__group">
                        <input type="text" placeholder="Firstname"/>
                        <input type="text" placeholder="LastName"/>
                    </div>
                    <input type="text" placeholder="adress"/>
                    <input type="text" placeholder="Town city"/>
                    <input type="text" placeholder="Phone number"/>
                </form>
                <div className="order">
                    <h3>Your order</h3>
                    <table className="order__list">
                        <thead>
                            <tr>
                                <td>Product</td>
                                <td>Total</td>   
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="product">lorem ipsum</td>
                                <td>BIF 5000</td>
                            </tr>
                            <tr>
                                <td className="product">lorem ipsum</td>
                                <td>BIF 5000</td>
                            </tr>             
                        </tbody>
                    </table>
                    <div className="checkout__count">
                        <h4>Subtotal: <span>BIF 5000</span></h4>
                        <h4>Shipping: <span>Free shopping</span></h4>
                        <h4>Total: <span>BIF 4500</span></h4>
                    </div>
                    <div className="placeOrder">
                        <div className="payment_info">
                            <input id='payment' type='checkbox'/>
                            <label htmlFor='payment'>Cash on delivery</label>
                        </div>
                        <p className='alert'>Pay with cash upon delivery</p>
                        <p>Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!</p>
                        <Button>Place order</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
