// src/components/Register.js
import React, { useState } from 'react';
import './Register.css'; // 引入CSS样式

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add registration logic here
        console.log('Registering', name, email);
    };

    return (
        <div className="register-container">
            <h1>注册</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <div>
                    <label>用户名:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>邮箱:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>密码:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">注册</button>
            </form>
        </div>
    );
}

export default Register;
