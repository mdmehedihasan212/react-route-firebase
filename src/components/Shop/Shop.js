import React from 'react';
import useProducts from '../../hooks/useProducts';
import Products from '../Products/Products';

const Shop = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>Shop</h1>
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

export default Shop;