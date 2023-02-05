import React from 'react';

// Style
import './Header.css'

// Component
import HeaderMenu from '../HeaderMenu/HeaderMenu';

// Image
import logo from '../../assets/image/Jevelin_logo.png'

// React Icon
import { BsBasket } from 'react-icons/bs'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__logo-wrapper'>
                    <a href='www.google.com'>
                        <img src={logo} alt='logo' className='header__logo' />
                    </a>
                </div>
                <HeaderMenu />
                <div className='header__basket'>
                    <BsBasket />
                    <span className='basket__item-counter'>0</span>
                </div>
            </div>
        </header>
    );
};

export default Header;