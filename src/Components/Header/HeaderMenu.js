import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = ({ isScroll, menuOpen }) => {
    return (
        <ul className={menuOpen} style={{ color: isScroll ? '#000' : '#FFF' }}>
            <li className='header__menu-item'>
                <Link to='/'>Home</Link>
            </li>
            <li className='header__menu-item'>Gallery</li>
            <li className='header__menu-item'>Features</li>
            <li className='header__menu-item'>Reviews</li>
            <li className='header__menu-item'>
                <Link to='/shop'>Shop</Link>
            </li>
        </ul>
    );
};

export default HeaderMenu;