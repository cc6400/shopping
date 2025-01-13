// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'; // 引入CSS样式

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Logging in with', email, password);
    };

    return (
        <div className="login-container">
            <h1>登录</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div>
                    <label>邮箱:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>密码:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">登录</button>
            </form>
        </div>
    );
}

export default Login;
