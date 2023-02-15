import React from 'react';

// Component
import HeaderMain from '../HeaderMain/HeaderMain';
import Gallery from '../Gallery/Gallery';
import Features from '../Features/Features';
import ImageIntroduction from '../ImageIntroduction/ImageIntroduction';
import Review from '../ReviewProduct/Review';
import CustomersSay from '../CustomersSay/CustomersSay';

const Main = () => {
    return (
        <main className='main'>
            <HeaderMain />
            <Gallery />
            <Features />
            <ImageIntroduction />
            <Review />
            <CustomersSay />
        </main>
    );
};

export default Main;