import React from 'react';
import "./Watch.css";

const Watch = ({ watch, handleAddCart }) => {
    const { name, img, price, brand, quantity } = watch;
    return (
        <div className="watch-container">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddCart(watch)}>Add to Cart</button>
        </div>
    );
};

export default Watch;