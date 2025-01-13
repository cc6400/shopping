import React from 'react';

function OrderHistory({ orders, clearCart }) {
    return (
        <div className="container">
            <h1>购物历史</h1>
            <button onClick={clearCart} className="clear-cart">清空购物车</button>
            <ul>
                {orders.length > 0 ? (
                    orders.map(order => (
                        <li key={order.id}>
                            {order.name} - 加入时间: {new Date(order.timestamp).toLocaleString()} {/* 显示时间戳 */}
                        </li>
                    ))
                ) : (
                    <li>购物车为空</li> // 如果购物车为空，显示提示信息
                )}
            </ul>
        </div>
    );
}

export default OrderHistory;
