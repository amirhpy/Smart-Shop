import React from 'react';

// Components
import GallerySlider from './GallerySlider';

// Shared
import AboutProduct from '../shared/AboutProduct';

const Gallery = () => {
    return (
        <div className='gallery'>
            <AboutProduct
                heading='ABOUT OUR WATCHES'
                fTitle='New, Improved'
                lTitle='Design and Performance'
                more='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae odales lectus, non ultrices nisi. In varius, leo non gravida.' />
            <div className='container'>
                <GallerySlider />
            </div>
        </div>
    );
};

export default Gallery;