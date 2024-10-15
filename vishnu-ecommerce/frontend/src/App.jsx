import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Signup from './components/signup.jsx'; // Ensure proper import of Signup component
import PrivateComponents from "./components/Privatecomponents.jsx"; 
import Login from './components/login.jsx';
import Profile from './components/profile.jsx';
import AddProduct from './components/AddProduct.jsx';
import Cart from './components/Cart.jsx';
import ProductCard from './components/ProductCard.jsx';
function App() {
    return (
        <div className="App">
            
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {/* Use the imported PrivateComponents correctly */}
                    <Route element={<PrivateComponents />}>
                        <Route path="/" element={<div>Home</div>} />
                        <Route path="/addproduct" element={<AddProduct/>} />
                        <Route path="/update" element={<div>Update Product</div>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/logout" element={<div>Logout</div>} />
                        <Route path="/addtocart" element={<Cart/>} />
                        <Route path="/products" element={<ProductCard />} />
                    </Route>
                    <Route path="/signup" element={<Signup />} /> 
                    <Route path="/login" element={<Login />} /> 
                    
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}
export default App;

