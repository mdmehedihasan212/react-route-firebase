import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({ product }) => {
    console.log(product);
    const { name, picture, price } = product;
    return (
        <section className='product-container'>
            <article className="product-details">
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <h5>${price}</h5>
                <Link to={'/order-review'}>Shop Now</Link>
            </article>
        </section>
    );
};

export default Products;