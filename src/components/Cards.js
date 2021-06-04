import React from 'react';
import ProductCard from './ProductCard'
import '../styles/Card.scss'


function Cards({cards}) {
    return (
        <div className="container">
            { cards.map( card =>{
                return (<ProductCard key={card._id} product={card}/>)
            }) }
        </div>
    )
}

export default Cards
