import React from 'react';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

// Module
import { Pagination } from 'swiper';
import 'swiper/css/pagination';

const CustomersSlider = ({ img, comment, name, score }) => {
    return (
        <div className='customers__slider'>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div className='customers__img-container'>
                        <img src={img[0]} alt='customer' className='customers__img' />
                    </div>
                    <div className='customers__body'>
                        <p className='customers__comment'>{comment}</p>
                        <h4 className='customers__name'>{name[0]}</h4>
                        <span className='customers__score'>{score[0]}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='customers__img-container'>
                        <img src={img[1]} alt='customer' className='customers__img' />
                    </div>
                    <div className='customers__body'>
                        <p className='customers__comment'>{comment}</p>
                        <h4 className='customers__name'>{name[1]}</h4>
                        <span className='customers__score'>{score[1]}</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CustomersSlider;