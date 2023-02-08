import React from 'react';

// Component
import HeaderMain from '../Header/HeaderMain';
import Gallery from '../Gallery/Gallery';
import Features from '../Features/Features';

const Main = () => {
    return (
        <main className='main'>
            <HeaderMain />
            <Gallery />
            <Features />
        </main>
    );
};

export default Main;