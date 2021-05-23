import React, { useState } from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  {/* Pushes the product into the cart when you click on one of the "Add to Cart"-buttons */}
  const [cart, setCart] = useState([]); 

  {/* Toggles between what view that you're at/toggles what component is displayed (initial page is the products page) */}
  const [page, setPage] = useState(PAGE_PRODUCTS); 

  //Function that makes so that you can switch between product page list and cart page when you click one of those buttons
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  //Sums up the value of all the items in the cart
  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    {/* The actual buttons that navigates between the product page and the cart page */},
    <div className="App">
      <header>
        <button className="btn-primary" onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({getCartTotal()})</button>
        <button className="btn-primary" onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>

      {/* Calling the right components and props etc. */}
      {page === PAGE_PRODUCTS && (<Products cart={cart} setCart={setCart} />)}
      {page === PAGE_CART && (<Cart cart={cart} setCart={setCart} />)}
    </div>
  );
}

export default App;
