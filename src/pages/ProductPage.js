import React,{ useEffect,useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {useTranslation} from 'react-i18next'
import { listProductDetails } from "../redux/actions/productActions.js";
import Button from '@material-ui/core/Button';
import ImageZoom from 'react-medium-image-zoom'
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import '../styles/ProductDetail.scss'
import { Link } from 'react-router-dom';

function ProductPage({ history, match }) {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const {t}=useTranslation()
    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match]);

    const addToCartHandler = () => {
    history.push(`/myCart/${match.params.id}?qty=${qty}`);
    };

    useEffect(() => {
        window.scrollTo({top:0})
    }, [])

    return (
        
            loading ? <div className="loader"><CircularProgress color='none'/></div> :
            error ? <div>{error}</div>:
            product ? 
                <div className="productDetail">
                    <Link to="/" className="backBtn">
                        <ArrowBackOutlinedIcon/> <h4>{('Back')}</h4>
                    </Link>
                    <div className="productDetail__info">
                        <div className="picture">
                            <p>{t('Sale')}</p>
                            <ImageZoom
                                image={{
                                src: product.data.images[0] ,
                                alt: '',
                                className: 'img',
                                style: { width: '100%' }
                                }}
                                zoomImage={{
                                src: product.data.images[0] ,
                                alt: '',
                                }}
                            />
                        </div>
                        <div className="text">
                            <h2>{ product.data.productName }</h2>
                            <div className="price">
                                <p>{ product?.data.price } BIF</p>
                                <p><del>BIF 5000</del></p>
                            </div>
                            
                            <p>
                                {product.data.description}
                            </p>
                            <h4>21 {t('in Stock')}</h4>
                            <div className="cart">
                                <select onChange={(e)=>setQty(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                
                                <Button onClick={addToCartHandler}>{t('Add to cart')}</Button>
                            </div>
                            <p className="categories">
                                <span>{t('Categories')}: </span> {product?.data.category}
                            </p>
                        </div>
                    </div>
                    <div className="reviews">
                        <div className="pics">
                            <img src={product.data.images[1]}/>
                            <img src={product.data.images[2]}/>
                        </div>
                        <h1>{t('Reviews')}</h1>
                    </div>
                </div> : <div className="error">{t('Not available')}</div>
    )
}

export default ProductPage
