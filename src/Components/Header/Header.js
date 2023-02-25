import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// Context
import { cartContext } from '../../Contexts/CartContextProvider';

// Component
import HamburgerMenu from './HamburgerMenu';

// Image
import logoLight from '../../assets/image/Jevelin-light.png'
import logoDrak from '../../assets/image/Jevelin-dark.png'

// React Icon
import { BsBasket } from 'react-icons/bs'

const Header = () => {

    const { state } = useContext(cartContext)

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
            <nav className='header__wrapper'>
                <div className='header__logo-wrapper'>
                    <a href='www.google.com'>
                        <img src={isScroll ? logoDrak : logoLight} alt='logo' className='header__logo' />
                    </a>
                </div>
                <HamburgerMenu isScroll={isScroll} />
                <Link to='/carts' className='desktop__link-cart'>
                    <div className='header__basket'>
                        <BsBasket />
                        <span className='basket__item-counter'>{state.itemsCounter}</span>
                    </div>
                </Link>

            </nav>
        </header>
    );
};

export default Header;