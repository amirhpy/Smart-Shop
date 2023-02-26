import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import MoveSectionMenuLi from './MoveSectionMenuLi';

const HeaderMenu = ({ isScroll, menuOpen }) => {
    const [menuList] = useState([
        { id: 1, className: 'header__menu-item', dataSection: 'gallery', innerTag: 'Gallery' },
        { id: 2, className: 'header__menu-item', dataSection: 'features', innerTag: 'Features' },
        { id: 3, className: 'header__menu-item', dataSection: 'review', innerTag: 'Reviews' }
    ])

    return (
        <ul className={menuOpen} style={{ color: isScroll ? '#000' : '#FFF' }}>
            <li className='header__menu-item'>
                <Link to='/'>Home</Link>
            </li>
            {menuList.map(li => <MoveSectionMenuLi key={li.id} {...li} />)}
            <li className='header__menu-item'>
                <Link to='/shop'>Shop</Link>
            </li>
        </ul>
    );
};

export default HeaderMenu;