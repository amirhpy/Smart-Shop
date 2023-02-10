import React from 'react';

// Component
import HeaderMain from '../Header/HeaderMain';
import Gallery from '../Gallery/Gallery';
import Features from '../Features/Features';
import ImageIntroduction from '../ImageIntroduction/ImageIntroduction';
import Review from '../ReviewProduct/Review';
import Developers from '../DeveloperC/Developers';

const Main = () => {
    return (
        <main className='main'>
            <HeaderMain />
            <Gallery />
            <Features />
            <ImageIntroduction />
            <Review />
            <Developers />
        </main>
    );
};

export default Main;