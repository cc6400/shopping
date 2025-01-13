import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import OrderHistory from './components/OrderHistory';
import Cart from './components/Cart'; // 导入 Cart 组件
import './App.css';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const timestamp = new Date().toISOString();
        setCart((prevCart) => [...prevCart, { ...product, timestamp }]); // 将产品及其时间戳添加到购物车中
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id)); // 移除指定产品
    };

    const clearCart = () => {
        setCart([]); // 清空购物车
    };

    return (
        <Router>
            <nav>
                <div className="nav-buttons">
                    <Link to="/register"><button>注册</button></Link>
                    <Link to="/login"><button>登录</button></Link>
                    <Link to="/products"><button>挑选产品</button></Link>
                    <Link to="/order-history"><button>购物车历史</button></Link>
                    <Link to="/cart"><button>购物车</button></Link> {/* 新增购物车按钮 */}
                    <Link to="/"><button>主页</button></Link>
                </div>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/products">
                    <ProductList addToCart={addToCart} />
                </Route>
                <Route path="/order-history">
                    <OrderHistory orders={cart} clearCart={clearCart} />
                </Route>
                <Route path="/cart">
                    <Cart cartItems={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
                </Route> {/* 新增购物车路由 */}
            </Switch>
        </Router>
    );
}

export default App;
