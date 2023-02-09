import React from 'react';

const ReviewProduct = ({brand, name, price, classColor, img}) => {
    return (
        <div className='col-12 col-md-4'>
            <div className='review__product'>
                <p className='review__product-brand'>{brand}</p>
                <h3 className={classColor}>{name}</h3>
                <span className='review__product-price'>{price}</span>
                <div className='review__img-container'>
                    <img src={img} alt='Smart Review' className='review__product-img' />
                </div>
            </div>
        </div>
    );
};

export default ReviewProduct;