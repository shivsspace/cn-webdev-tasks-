import React, { useState, useEffect } from "react";
import './signup.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminCode, setAdminCode] = useState("");
    const [adminCodeError, setAdminCodeError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const collectData = async (e) => {
        e.preventDefault();
        setAdminCodeError("");

        if (isAdmin && adminCode !== "271103") {
            setAdminCodeError("Invalid admin code");
            return;
        }

        try {
            let response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, phoneNumber, address, isAdmin })
            });
            if (response.ok) {
                let result = await response.json();
                console.warn(result);
                localStorage.setItem("user", JSON.stringify(result));
                navigate('/');
            } else {
                let errorResult = await response.json();
                console.error("Registration failed:", errorResult.error);
                alert("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error occurred:", error);
            alert("An error occurred while registering. Please try again.");
        }
    }

    return (
        <div className="signup-outer-container">
            <div className="signup-container">
                <h3>REGISTER USER</h3>
                <form onSubmit={collectData}>
                    <div className="cred">
                        <label htmlFor="name">Name:</label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Enter Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                        
                        <label htmlFor="email">Email:</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Enter Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        
                        <label htmlFor="phone">Phone Number:</label>
                        <input 
                            id="phone" 
                            type="tel" 
                            placeholder="Enter Phone Number" 
                            value={phoneNumber} 
                            onChange={(e) => setPhoneNumber(e.target.value)} 
                            required 
                        />
                        
                        <label htmlFor="password">Password:</label>
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="Enter Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        
                        <label htmlFor="address">Address:</label>
                        <textarea 
                            id="address" 
                            placeholder="Enter Address" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            required 
                        />

                        <div className="admin-section">
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={isAdmin} 
                                    onChange={(e) => setIsAdmin(e.target.checked)} 
                                /> 
                                Register as Admin
                            </label>
                            {isAdmin && (
                                <>
                                    <input 
                                        type="text" 
                                        placeholder="Enter Admin Code" 
                                        value={adminCode} 
                                        onChange={(e) => setAdminCode(e.target.value)}
                                        required
                                    />
                                    {adminCodeError && <p className="error">{adminCodeError}</p>}
                                </>
                            )}
                        </div>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
