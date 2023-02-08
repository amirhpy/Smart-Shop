import React from 'react';

// Image
import circle from '../../assets/shader/Ellipse-2.png'
import smartReview from '../../assets/image/smartobject.png'

const HeaderMain = () => {
    return (
        <div className='header__main'>
            <img src={circle} alt='shape' className='main__circle-left' />
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='header__banner-review'>
                            <h1 className='header__main-title'>Lifestyle Smart <span className=''>Watch</span></h1>
                            <h3 className='header__main-future'>technology of the future</h3>
                            <p className='header__main-caption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt a accusantium deleniti laborum vitae nisi impedit.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='header__smart-content'>
                            <img src={smartReview} alt='SmartWatch' className='header__smart-img' />
                        </div>
                    </div>
                </div>
            </div>
            <img src={circle} alt='shape' className='main__circle-right' />
        </div>
    );
};

export default HeaderMain;