import React from 'react';
import bannerImage from './images/xiaomi-15.jpg'; // 导入图片

function Home() {  
    return (  
        <div style={{ textAlign: 'center', padding: '20px' }}>  
            <h1>欢迎来到网络商店</h1>  
            <p>这里是选购最佳商品的一站式商店！</p>  
            <p>浏览我们的商品分类，注册一个账户，或者登录后开始购物吧！</p>  
            <img 
                src={bannerImage} 
                alt="商店横幅" 
                style={{ width: '100%', height: 'auto', maxWidth: '600px', borderRadius: '10px' }} 
            />  
        </div>  
    );  
}  

export default Home;
