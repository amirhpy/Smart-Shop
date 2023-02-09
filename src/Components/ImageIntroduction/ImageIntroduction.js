import React from 'react';

// Shared
import AboutProduct from '../shared/AboutProduct';

// Image
import ImgLaptop from '../../assets/image/laptopAI.jpg'

const ImageIntroduction = () => {
    return (
        <div className='image__introduction'>
            <div className='container'>
                <div className='image__introduction-heading'>
                    <AboutProduct
                        heading='HOW IT WORKS'
                        fTitle='See for yourself.'
                        lTitle='Quick video introduction'
                        more='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae odales lectus, non ultrices nisi. In varius, leo non gravida.' />
                </div>
                <div className='image__introduction-body'>
                    <img src={ImgLaptop} alt='laptop' className='introduction__img' />
                </div>
            </div>
        </div>
    );
};

export default ImageIntroduction;