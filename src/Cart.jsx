import React from 'react';
import './App.css';

export default function Cart({ cart, setCart }) {
    //Sums up the value of all the items in the cart
    const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
    };

    //Clears out all the items from the cart
    const clearCart = () => {
    setCart([]);
    };

    //Enables so that you can change the quantity of items in the input box in the cart
    const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
    };

    //Removes separate products from cart
    const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
    };

    return (
    <>
        <h1>Cart</h1>
        {/* Clears out all the items from the cart, and shows the button only if there are any products in the cart */}
        {cart.length > 0 && (<button className="btn-primary" onClick={clearCart}>Clear Cart</button>)}
        
        {/* Basically the same callback function as the ont in Products.jsx that loops over the products array and returns jsx */}
        <div className="products">
        {cart.map((product, index) => (
            <div className="product" key={index}> {/* You need to have a "key" prop to every child in a list when you're creating a list from an array with JSX */}
                <h3>{product.name}</h3>
                <h4>${product.cost}</h4>

                {/* Input box where you can increase or decrease the quantity of the items in the cart */}
                <input className="cart-quantity" type="number" value={product.quantity} onChange={(e) =>setQuantity(product, parseInt(e.target.value))} />
                <img src={product.image} alt={product.name} />
                <button className="btn-primary" onClick={() => removeFromCart(product)}>Remove</button> {/* "remove"-button removes separate products from cart */}
            </div>
        ))}
        </div>

        {/* Sums up the value of all the items in the cart */}
        <div>Total Cost: ${getTotalSum()}</div>
    </>
    );
}


