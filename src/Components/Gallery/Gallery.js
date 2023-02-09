import React from 'react';

// Components
import GallerySlider from './GallerySlider';

// Shared
import AboutProduct from '../shared/AboutProduct';

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='container'>
                <div style={{ textAlign: 'center' }}>
                    <AboutProduct
                        heading='ABOUT OUR WATCHES'
                        fTitle='New, Improved'
                        lTitle='Design and Performance'
                        more='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae odales lectus, non ultrices nisi. In varius, leo non gravida.' />
                </div>
                <GallerySlider />
            </div>
        </div>
    );
};

export default Gallery;