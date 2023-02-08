import React, { useState } from 'react';

// React Icon
import { BsBasket } from 'react-icons/bs'


// Components
import HeaderMenu from './HeaderMenu';

const HamburgerMenu = ({ isScroll }) => {

    const [hamburgerMenu, setHamburgerMenu] = useState('nav__toggle-icon unclicked')
    const [menuOpen, setMenuOpen] = useState('header__menu')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenuHandler = () => {
        if (!isMenuOpen) {
            setHamburgerMenu('nav__toggle-icon clicked')
            setMenuOpen('header__menu menu--open')
            setIsMenuOpen(true)
        } else {
            setHamburgerMenu('nav__toggle-icon unclicked')
            setMenuOpen('header__menu')
            setIsMenuOpen(false)
        }
    }

    return (
        <>
            <HeaderMenu menuOpen={menuOpen} isScroll={isScroll} />
            {/* <div className={hamburgerMenu} onClick={openMenuHandler}>
                <div className='nav_toggle-line'></div>
            </div> */}
            <div className='nav_line-basket'>
                <div className={hamburgerMenu} onClick={openMenuHandler}>
                    <div className='nav_toggle-line'></div>
                </div>
                <div className='basket-query'>
                    <BsBasket />
                    <span className='basket-counter-query'>0</span>
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;