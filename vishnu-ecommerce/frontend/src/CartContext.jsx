// src/CartContext.js
import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create a CartProvider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add items to the cart
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    // Optional: Function to remove items from the cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
