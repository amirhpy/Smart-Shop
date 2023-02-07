import React from 'react';

const AboutProduct = ({ heading,fTitle, lTitle, more }) => {
    return (
        <div className='about_product'>
            <h3 className='about_heading'>{heading}</h3>
            <h2 className='about_title'><span>{fTitle}</span> {lTitle}</h2>
            <p className='about_more'>{more}</p>
        </div>
    );
};

export default AboutProduct;