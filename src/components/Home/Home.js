import React, { useState } from "react";
import Cart from "../Cart/Cart";
import useWatches from "../../hooks/useWatches";
import "./Home.css";
import Watch from "../Product/Watch";

const Home = () => {
    const [watches, setWatches] = useWatches();
    const [cart, setCart] = useState([]);

    const handleAddCart = (selectedItem) => {
        const exists = cart.find((watch) => watch.id === selectedItem.id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        } else{
            alert('already added')
        }

        
    };

    const handleRemoveFromCart = (selectedItem) => {
        console.log(selectedItem);
        const rest = cart.filter((watch) => watch.id !== selectedItem.id);
        setCart(rest);
    };
    return (
        <div className="home-container">
            <div className="product-container">
                {watches.map((watch) => (
                    <Watch
                        key={watch.id}
                        handleAddCart={handleAddCart}
                        watch={watch}
                    ></Watch>
                ))}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
