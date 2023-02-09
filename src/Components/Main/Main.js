import React from 'react';

// Component
import HeaderMain from '../Header/HeaderMain';
import Gallery from '../Gallery/Gallery';
import Features from '../Features/Features';
import ImageIntroduction from '../ImageIntroduction/ImageIntroduction';

const Main = () => {
    return (
        <main className='main'>
            <HeaderMain />
            <Gallery />
            <Features />
            <ImageIntroduction />
        </main>
    );
};

export default Main;