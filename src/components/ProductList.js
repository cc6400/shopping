import React, { useState } from 'react';
import './ProductList.css'; // 引入CSS样式

// 导入所有图片
import huaweiMate70 from './images/huawei-mate70.jpg';
import xiaomi15 from './images/xiaomi-15.jpg';
import oppoReno12 from './images/oppo-reno12.jpg';
import vivoX200 from './images/vivo-x200.jpg';
import lenovoYoga9i from './images/lenovo-yoga9i.jpg';
import dellXPS13 from './images/dell-xps13.jpg';
import huaweiMateBook14 from './images/huawei-matebook14.jpg';
import xiaomiTablet6 from './images/xiaomi-tablet6.jpg';
import honorMagicBook15 from './images/honor-magicbook15.jpg';
import mideaAirConditioner from './images/midea-air-conditioner.jpg';
import haierFridge from './images/haier-fridge.jpg';
import whirlpoolWasher from './images/whirlpool-washer.jpg';
import xiaomiRobotVacuum from './images/xiaomi-robot-vacuum.jpg';
import honorRouter from './images/honor-router.jpg';
import razerMouse from './images/razer-mouse.jpg';
import huaweiWatchGT2 from './images/huawei-watch-gt2.jpg';
import xiaomiSmartHome from './images/xiaomi-smart-home.jpg';
import geelyBoyu from './images/geely-boyu.jpg';
import bydHan from './images/byd-han.jpg';
import greatWallHavalH6 from './images/great-wall-haval-h6.jpg';

function ProductList({ addToCart }) {
    const [searchTerm, setSearchTerm] = useState('');

    const products = [
        { id: 1, name: '华为 Mate 70', price: '5999元', description: '华为最新旗舰手机，强大的摄像头和性能。', imageUrl: huaweiMate70 },
        { id: 2, name: '小米 15', price: '3999元', description: '小米的高性能智能手机，极致的性价比。', imageUrl: xiaomi15 },
        { id: 3, name: 'OPPO Reno 12', price: '2999元', description: '时尚的设计，出色的拍照能力。', imageUrl: oppoReno12 },
        { id: 4, name: 'Vivo X200', price: '3499元', description: '专业级摄影体验，搭载 Zeiss 光学镜头。', imageUrl: vivoX200 },
        { id: 5, name: '联想 Yoga 9i', price: '10999元', description: '高性能笔记本，适合工作与娱乐。', imageUrl: lenovoYoga9i },
        { id: 6, name: '戴尔 XPS 13', price: '9999元', description: '超薄轻巧设计，强大的性能。', imageUrl: dellXPS13 },
        { id: 7, name: '华为 MateBook 14', price: '7999元', description: '精美的设计，出色的性能与续航。', imageUrl: huaweiMateBook14 },
        { id: 8, name: '小米平板 6', price: '1999元', description: '大屏幕平板，适合娱乐与学习。', imageUrl: xiaomiTablet6 },
        { id: 9, name: '荣耀 MagicBook 15', price: '4999元', description: '轻薄便携，适合学生和商务人士。', imageUrl: honorMagicBook15 },
        { id: 10, name: '美的空调', price: '2999元', description: '节能环保，智能控制，舒适的居住环境。', imageUrl: mideaAirConditioner },
        { id: 11, name: '海尔冰箱', price: '3299元', description: '大容量，智能温控，保持食材新鲜。', imageUrl: haierFridge },
        { id: 12, name: '华凌洗衣机', price: '2399元', description: '高效洗涤，节水节能。', imageUrl: whirlpoolWasher },
        { id: 13, name: '小米米家扫地机器人', price: '1999元', description: '智能清洁，自动回充，省时省力。', imageUrl: xiaomiRobotVacuum },
        { id: 14, name: '荣耀路由器', price: '699元', description: '高速稳定的无线网络连接。', imageUrl: honorRouter },
        { id: 15, name: '雷蛇游戏鼠标', price: '499元', description: '高精度，适合游戏玩家使用。', imageUrl: razerMouse },
        { id: 16, name: '华为 Watch GT 2', price: '1299元', description: '长续航，健康监测，运动伴侣。', imageUrl: huaweiWatchGT2 },
        { id: 17, name: '小米米家智能家居套件', price: '999元', description: '智能控制，提升生活品质。', imageUrl: xiaomiSmartHome },
        { id: 18, name: '吉利博越 SUV', price: '139800元', description: '高性价比的家庭SUV，空间大，性能好。', imageUrl: geelyBoyu },
        { id: 19, name: '比亚迪汉 EV', price: '219800元', description: '纯电动豪华轿车，续航远，配置高。', imageUrl: bydHan },
        { id: 20, name: '长城哈弗 H6', price: '109800元', description: '最佳销量SUV，适合家庭出行。', imageUrl: greatWallHavalH6 },
    ];

    // 过滤产品
    const filteredProducts = products.filter(product =>
        product.name.includes(searchTerm) || product.description.includes(searchTerm)
    );

    return (
        <div className="container">
            <h1>产品列表</h1>
            <input
                type="text"
                placeholder="搜索产品..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-box"
            />
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div className="product-card" key={product.id}>
                            <img src={product.imageUrl} alt={product.name} className="product-image" />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>价格: {product.price}</p>
                            <button className="add-to-cart" onClick={() => addToCart(product)}>加入购物车</button>
                        </div>
                    ))
                ) : (
                    <p>没有找到该产品</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;
