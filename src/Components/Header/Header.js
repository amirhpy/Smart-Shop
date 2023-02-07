import React, { useState } from 'react';

// Component
import HeaderMenu from './HeaderMenu';

// Image
import logoLight from '../../assets/image/Jevelin-light.png'
import logoDrak from '../../assets/image/Jevelin-dark.png'

// React Icon
import { BsBasket } from 'react-icons/bs'

const Header = () => {

    const [isScroll, setIsScroll] = useState(false)

    window.onscroll = function () {
        scrollTopHandler()
    }

    const scrollTopHandler = () => {
        if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
            setIsScroll(true)
        } else if (document.body.scrollTop <= 2 || document.documentElement.scrollTop <= 2) {
            setIsScroll(false)
        }
    }

    return (
        <header className={isScroll ? 'header header-scroll' : 'header'}>
            <div className='header__wrapper'>
                <div className='header__logo-wrapper'>
                    <a href='www.google.com'>
                        <img src={isScroll ? logoDrak : logoLight} alt='logo' className='header__logo' />
                    </a>
                </div>
                <HeaderMenu isScroll={isScroll} />
                <div className='header__basket'>
                    <BsBasket />
                    <span className='basket__item-counter'>0</span>
                </div>
            </div>
        </header>
    );
};

export default Header;