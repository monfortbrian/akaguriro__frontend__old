import React, { useEffect }  from 'react'
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import '../styles/MyCart.scss'
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CartPage({match, history, location}) {

    const {t}= useTranslation()

    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        dispatch(addToCart(productId, qty));
        console.log(cart)
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };
    const checkouthandler = (id) => {
        history.push("/login?redirect=shipping");
    };
    
    return (
        <div className="myCart">
            <div className="myCart__table">
                <table className="myCart__list">
                    <thead>
                        <tr>
                            <td>{t('Product')}</td>
                            <td>{t('Name')}</td>
                            <td>{t('Price')}</td>
                            <td>{t('Quantity')}</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems && cartItems.length > 0 ? 
                            cartItems.map( product =>{
                                return(
                                    <tr key={product.id}>
                                        <td className="product"><img src={product.images[0]}/></td>
                                        <td>{product.name}</td>
                                        <td>{ product.price }BIF</td>
                                        <td>
                                            <select value={product.qty} onChange={(e) => {dispatch(addToCart(product.id, Number(e.target.value)));}}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </td>
                                    </tr>
                                )
                            }): <div>Your cart is empty</div>
                        }
                    </tbody>
                </table>
            </div>
            <div className="myCart__total">
                <h3>{t('Cart total')}</h3>
                <p>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</p>
                <p>Shipping :<span>Free Shipping</span></p>
                <p>Subtotal :{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)} BIF</p>
                <Button onClick={checkouthandler}>{t('Proceed to chekout')}</Button>
            </div>
        </div>
    )
}

export default withRouter(CartPage)
