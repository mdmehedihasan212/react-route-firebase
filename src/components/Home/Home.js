import React from 'react';
import './Home.css';
import useProducts from '../../hooks/useProducts';
import Products from '../Products/Products';

const Home = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>Home</h1>
            <div className="products-container">
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default Home;