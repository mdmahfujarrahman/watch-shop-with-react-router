import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    let command;
    if (cart.length === 0) {
        command = <p>Please add some item</p>;
    } else if (cart.length === 1) {
        command = (
            <p>
                <small>plea add more items....</small>
            </p>
        );
    } else {
        command = (
            <p>
                <small>Thanks for add adding item</small>
            </p>
        );
    }
    return (
        <div>
            <h2>Watch Selected {cart.length}</h2>

            {cart.map((watch) => (
                <p>
                    {watch.name}
                    <button onClick={() => handleRemoveFromCart(watch)}>
                        X
                    </button>
                </p>
            ))}
            {cart.length === 0 || <p className="orange">YaY! you are buying</p>}
            {cart.length ===3 && <div className="orange">
                <h3>Trigonal</h3>
                <p>gift dibo 3 jon ke</p>
                </div>}
            {command}
            {cart.length !==4 ? <p>Keep adding</p>: <button >Remove all</button>}
        </div>
    );
};

export default Cart;
