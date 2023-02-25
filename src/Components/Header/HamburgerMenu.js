import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'

// Context
import { cartContext } from '../../Contexts/CartContextProvider';

// React Icon
import { BsBasket } from 'react-icons/bs'


// Components
import HeaderMenu from './HeaderMenu';

const HamburgerMenu = ({ isScroll }) => {

    const { state } = useContext(cartContext)

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
            <div className='nav_line-basket'>
                <div className={hamburgerMenu} onClick={openMenuHandler}>
                    <div className='nav_toggle-line'></div>
                </div>
                <Link to='/carts'>
                    <div className='basket-query'>
                        <BsBasket />
                        <span className='basket-counter-query'>{state.itemsCounter}</span>
                    </div>
                </Link>

            </div>
        </>
    );
};

export default HamburgerMenu;