import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
    return (
        <Link to={`/product/${product._id}`} className="card">
            <div className="content">
                <h3>{ product.productName }</h3>
                <img src={product.images[0]} alt=''/>
                <p>{product.description}</p>
            </div>
        </Link>
    )
}

export default ProductCard
