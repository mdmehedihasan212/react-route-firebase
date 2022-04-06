import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/shop'}>Shop</Link>
            <Link to={'/order-review'}>Order Review</Link>
        </nav>
    );
};

export default Header;