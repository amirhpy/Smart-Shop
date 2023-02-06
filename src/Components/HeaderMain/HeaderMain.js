import React from 'react';

// Style
import './HeaderMain.css'

// Image
import circle from '../../assets/shader/Ellipse-2.png'

const HeaderMain = () => {
    return (
        <div className='header__main'>
            <img src={circle} alt='shape' className='header__main-circle' />
            <div className='container'></div>
        </div>
    );
};

export default HeaderMain;