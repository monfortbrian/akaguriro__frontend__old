import React from 'react'
import { Link } from 'react-router-dom'
import ProductSlider from './ProductSlider'
import Cards from './Cards'
import '../styles/homePage.scss'

function Feed({cards}) {
    
    return (
        <div className="feed">
            <div className="feed__category">
                <Link to="/">Gadgets</Link>
                <Link to="/">Home appliance</Link>
                <Link to="/">Grocery</Link>
                <Link to="/">Fashion</Link>
                <Link to="/">Furniture</Link>
            </div> 
            <div className="feed__content">
                <ProductSlider/>
                <Cards cards={cards}/>
            </div>           
        </div>
    )
}

export default Feed
