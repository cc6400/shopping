import React, { useState } from 'react';
import './Cart.css'; // 引入CSS样式

function Cart({ cartItems, removeFromCart, clearCart }) {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('元', '').replace(',', '')), 0);

    const handlePayment = () => {
        // 在这里可以添加实际的支付逻辑
        // 这里只是模拟支付成功
        setPaymentSuccess(true);
        clearCart(); // 清空购物车
    };

    return (
        <div className="cart-container">
            <h1>购物车</h1>
            {paymentSuccess && <p className="success-message">付款成功！感谢您的购买！</p>}
            {cartItems.length === 0 ? (
                <p>购物车为空</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <h3>{item.name}</h3>
                                <p>价格: {item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}>移除</button>
                            </li>
                        ))}
                    </ul>
                    <h2>总价: {totalPrice}元</h2>
                    <button onClick={handlePayment}>付款</button>
                    <button onClick={clearCart}>清空购物车</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
