import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// Image
import smart_1 from '../../assets/image/smart-1.jpg'
import smart_2 from '../../assets/image/smart-2.jpg'
import smart_3 from '../../assets/image/smart-3.jpg'
import smart_4 from '../../assets/image/smart-4.jpg'
import smart_5 from '../../assets/image/smart-5.jpg'
import smart_6 from '../../assets/image/smart-6.jpg'
import smart_7 from '../../assets/image/smart-7.jpg'

const GallerySlider = () => {
    return (
        <div className="gallery__slider">
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                // className="mySwiper"
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    }
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src={smart_1} alt='SmartGallery' /></SwiperSlide>
                <SwiperSlide><img src={smart_2} alt='SmartGallery' /></SwiperSlide>
                <SwiperSlide><img src={smart_3} alt='SmartGallery' /></SwiperSlide>
                <SwiperSlide><img src={smart_4} alt='SmartGallery' /></SwiperSlide>
                <SwiperSlide><img src={smart_5} alt='SmartGallery' /></SwiperSlide>
                <SwiperSlide><img src={smart_6} alt='SmartGallery' /></SwiperSlide>
                <SwiperSlide><img src={smart_7} alt='SmartGallery' /></SwiperSlide>
                <SwiperSlide><img src={smart_5} alt='SmartGallery' /></SwiperSlide>
                <SwiperSlide><img src={smart_7} alt='SmartGallery' /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default GallerySlider;