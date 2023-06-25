import React from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll'

const HeaderMenu = ({ isScroll, menuOpen }) => {
    return (
        <ul className={menuOpen} style={{ color: isScroll ? '#000' : '#FFF' }}>
            <li className='header__menu-item'>
                <Link to='/'>Home</Link>
            </li>
            <li className='header__menu-item'>
                <Scroll.Link
                    to='gallery'
                    smooth={true}
                >
                    Gallery
                </Scroll.Link>
            </li>
            <li className='header__menu-item'>
                <Scroll.Link
                    to='features'
                    smooth={true}
                >
                    Features
                </Scroll.Link>
            </li>
            <li className='header__menu-item'>
                <Scroll.Link
                    to='review'
                    smooth={true}
                >
                    Reviews
                </Scroll.Link>
            </li>
            <li className='header__menu-item'>
                <Link to='/shop'>Shop</Link>
            </li>
        </ul>
    );
};

export default HeaderMenu;