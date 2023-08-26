"use client"
import React, { useState } from 'react';

const LoginComponent = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        // Simulate successful login for demonstration purposes
        if (username === 'demo' && password === '1234') {
            onLogin(); // Call the onLogin prop to trigger login
        } 
        else if (username === 'pawan' && password === '4321') {
            onLogin(); // Call the onLogin prop to trigger login
        }
        else if (username === 'Harshita' && password === '0110') {
            onLogin(); // Call the onLogin prop to trigger login
        }
        else {
            alert('Invalid credentials');
        }
    };

    return (
        <div class='px4-py8'>
           <div class='header'><h2> Student Attendence System</h2></div>
            <form className='login-form' onsubmit={handleLogin}>
            <label for="Username">Username</label>
            <input
                type="text"
                placeholder="Username/Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label for="Password">Password</label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
         <button className='link-btn' onClick={handleLogin}>Login</button>
            <a href="#">Forgot Password?</a>
            </form>
        </div>
    );
};

export default LoginComponent;
