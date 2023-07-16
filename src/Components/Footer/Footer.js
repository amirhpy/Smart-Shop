import React, { useState } from 'react';

// React Icon
import { SiVisa } from 'react-icons/si'
import { RiMastercardLine } from 'react-icons/ri'
import { GrAmex } from 'react-icons/gr'
import { RiPaypalLine } from 'react-icons/ri'
import { SiJcb } from 'react-icons/si'
import { HiLockClosed } from 'react-icons/hi'

// Img
import jevelin from '../../assets/image/Jevelin-light.png'

const Footer = () => {
    const [date] = useState(new Date())
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='footer__payment-container'>
                            <img src={jevelin} alt='payment' className='footer__logo' />
                            <p className='footer__desc'>Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit, sed diam.</p>
                            <div className='footer__carts'>
                                <SiVisa />
                                <RiMastercardLine />
                                <GrAmex />
                                <RiPaypalLine />
                                <SiJcb />
                            </div>
                            <p className='footer__secure'>
                                <HiLockClosed />
                                Secure online payment
                            </p>
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='footer__experience'>
                            <h3 className='footer__company-caption'>BEST EXPERIENCE</h3>
                            <p className='footer__company-name'>FAQ</p>
                            <p className='footer__company-name'>Shipment</p>
                            <p className='footer__company-name'>Returns</p>
                            <p className='footer__company-name'>Gift cards</p>
                            <p className='footer__company-name'>Policies</p>
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='footer__company'>
                            <h3 className='footer__company-caption'>COMPANY</h3>
                            <p className='footer__company-name'>About us</p>
                            <p className='footer__company-name'>Press</p>
                            <p className='footer__company-name'>Offices</p>
                            <p className='footer__company-name'>Affiliates</p>
                            <p className='footer__company-name'>Giveaway</p>
                        </div>
                    </div>
                </div>
            </div>
            <span className='footer__copyright'>{date.getFullYear()} - Code With Amir ❤️</span>
        </footer>
    );
};

export default Footer;