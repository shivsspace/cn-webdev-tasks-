import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./AddProduct.css";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(""); // New state for quantity
    
    const navigate = useNavigate();

    const addProductHandler = async (event) => {
        event.preventDefault(); // Prevents page refresh
        console.warn(name, price, category, description, quantity);
        
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            body: JSON.stringify({ 
                name, 
                price, 
                category, 
                description,
                quantity, // Add quantity to the request
                userId 
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        result = await result.json();
        console.warn(result);
        navigate('/products'); 
    };

    return (
        <div className="add-product-container">
            <h2>Add Product</h2>
            <form onSubmit={addProductHandler}>
                <input 
                    type="text" 
                    placeholder="Enter Product Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Enter Product Price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Enter Product Category" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Enter Product Quantity" 
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)} 
                />
                <textarea 
                    placeholder="Enter Product Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
