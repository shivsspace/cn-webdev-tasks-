import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Define fetchCart outside of useEffect
    const fetchCart = async () => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const result = await fetch(`http://localhost:5000/cart/${userId}`);
        const data = await result.json();
        setCartItems(data.items);
    };

    useEffect(() => {
        fetchCart(); // Call fetchCart when the component mounts
    }, []);

    const handleRemoveFromCart = async (productId) => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        try {
            const response = await fetch(`http://localhost:5000/api/cart/remove`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, productId }),
            });

            const data = await response.json();
            if (response.ok) {
                // Update the cart items after removal
                setCartItems((prevItems) => prevItems.filter(item => item.productId !== productId));
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const addToCartHandler = async (productId) => {
        const userId = JSON.parse(localStorage.getItem('user'))._id; // Assuming you store the user info in localStorage
        try {
            const response = await fetch('http://localhost:5000/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, productId }),
            });

            const result = await response.json();
            if (response.ok) {
                console.log('Product added to cart:', productId);
                // Optionally refresh cart items after adding
                await fetchCart(); // Call fetchCart to refresh the cart
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.productId}>
                            Product ID: {item.productId}, Quantity: {item.quantity}
                            <button onClick={() => handleRemoveFromCart(item.productId)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {/* Example of adding a product to the cart */}
            <button onClick={() => addToCartHandler('productIdHere')}>Add Product</button>
        </div>
    );
};

export default Cart;
