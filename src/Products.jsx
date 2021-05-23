import React, { useState } from 'react';
import './App.css';

const MUSIC = 'music';
const MERCHANDISE = 'merchandise';

export default function Products({ setCart, cart }) {
    //An array that's mapped to generate what's inside here to jsx (also not setting products anywhere which means that I only use the initial state)
    //Basically This loops over some state inside of the jsx component
    const [products] = useState([
    {
        category: MUSIC,
        name: 'Deaf Dumb Blind',
        cost: 9.50,
        image: 'https://i.scdn.co/image/ab67616d0000b273102c1974ec4add4a1ca869fb',
    },
    {
        category: MERCHANDISE,
        name: 'Use Your Brain T-Shirt',
        cost: 18.50,
        image: 'https://i.etsystatic.com/23994092/d/il/ac3dbb/2622052831/il_340x270.2622052831_dt34.jpg?version=0',
    },
    ]);

    //Adds products to the cart
    const addToCart = (product) => {
    let newCart = [...cart];

    //Checks if there is any items in the cart, and if so, enabling so that one can increase/decrease the quantity of items inside the cart
    //Basically if the item exists, increase the quantity, if is doesn't exist, it adds it with the quantity of 1, and then it sets to a new cart
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        itemInCart = {...product, quantity: 1,};
        newCart.push(itemInCart);
    }
    setCart(newCart);
    };

    //Setup for categorising items in products page
    const [category, setCategory] = useState(MERCHANDISE);
    const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
    };

    return (
    <>
        <h1>Products</h1>
        Select a category
        {/* Setup for categorising items in products page */}
        <select onChange={(e) => setCategory(e.target.value)}>
            <option value={MERCHANDISE}>{MERCHANDISE}</option>
            <option value={MUSIC}>{MUSIC}</option>
        </select>

        {/* This is a callback function that loops over the products array and returns jsx */}
        <div className="products">
        {getProductsInCategory().map((product, index) => (
            <div className="product" key={index}> {/* You need to have a "key" prop to every child in a list when you're creating a list from an array with JSX */}
                <h3>{product.name}</h3>
                <h4>${product.cost}</h4>
                <img src={product.image} alt={product.name} />
                <button className="btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        ))}
        </div>
    </>
    );
}