import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/img/pizza-logo.svg';
import CartButton from './CartButton';
import Search from './Search/Search';

const Header = () => {

    const {pathname} = useLocation();

    return (
        <div className="header">
            <div className="container">
                <Link to='/' className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </Link>
                {pathname === '/' && <Search/>}
                <CartButton/>
            </div>
        </div>
    );
};

export default Header;