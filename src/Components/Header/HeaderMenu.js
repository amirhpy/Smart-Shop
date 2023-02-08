import React from 'react';

const HeaderMenu = ({ isScroll, menuOpen }) => {
    return (
        <ul className={menuOpen} style={{ color: isScroll ? '#000' : '#FFF' }}>
            <li className='header__menu-item'>Home</li>
            <li className='header__menu-item'>Gallery</li>
            <li className='header__menu-item'>Features</li>
            <li className='header__menu-item'>Reviews</li>
            <li className='header__menu-item'>Shop</li>
        </ul>
    );
};

export default HeaderMenu;