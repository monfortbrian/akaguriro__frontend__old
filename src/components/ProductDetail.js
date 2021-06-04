import React,{ useEffect,useState } from 'react'
import Button from '@material-ui/core/Button';
import ImageZoom from 'react-medium-image-zoom'
import '../styles/ProductDetail.scss'

const cards = [
    { id:1, name:'Nike air max', img:"https://c4.wallpaperflare.com/wallpaper/823/957/135/nike-photo-backgrounds-wallpaper-preview.jpg", category:"electronic" },
    { id:2, name:'Samsung Tv', img:"https://i.pinimg.com/originals/db/e5/6d/dbe56dacc14397721c2f17e15a6c09cf.jpg", category:"technology" },
    { id:3, name:'Iphone 11', img:"https://www.pngitem.com/pimgs/m/145-1453218_iphone-11-pro-max-hd-png-download.png", category:"others" },
    { id:4, name:'Iphone 11', img:"https://www.pngitem.com/pimgs/m/145-1453218_iphone-11-pro-max-hd-png-download.png", category:"electronic" },
]

function ProductDetail(props) {
    const [cardDetail, setCardDetail] = useState({})
    const id = Number(props.match.params.id)

    useEffect(() => {
        let detail = cards.find( card => card.id === id)
        setCardDetail(detail)
    }, [id])

    useEffect(() => {
        window.scrollTo({top:0})
    }, [])

    return (
        cardDetail ?
        <div className="productDetail">
            <div className="productDetail__info">
                <div className="picture">
                    <p>Sale</p>
                    {/* <img src={ cardDetail.img } alt=""/> */}
                    <ImageZoom
                        image={{
                        src: cardDetail.img ,
                        alt: '',
                        className: 'img',
                        style: { width: '100%' }
                        }}
                        zoomImage={{
                        src: cardDetail.img ,
                        alt: ''
                        }}
                    />
                </div>
                <div className="text">
                    <h2>{ cardDetail.name }</h2>
                    <div className="price">
                        <p>BIF 5000</p>
                        <p><del>BIF 5000</del></p>
                    </div>
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing .
                        Lorem ipsum dolor sit amet consectetur adipisicing .
                        consectetur adipisicing .
                        Lorem ipsum dolor sit amet consectetur adipisicing .
                        consectetur adipisicing .
                        Lorem ipsum dolor sit amet consectetur adipisicing .
                    </p>
                    <h4>21 in Stock</h4>
                    <div className="cart">
                        <input type="number" placeholder="1" min="1" max="10"/>
                        <Button>Add to cart</Button>
                    </div>
                    <p className="categories">
                        <span>Categories: </span> {cardDetail.category}
                    </p>
                </div>
            </div>
            <div className="reviews">
                <div className="pics">
                    <img src={cardDetail.img}/>
                    <img src={cardDetail.img}/>
                </div>
                <h1>Reviews</h1>
            </div>
        </div> :  <div>Not Available</div>
    )
}

export default ProductDetail
