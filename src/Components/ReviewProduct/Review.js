import React, { useState } from 'react';

// Components
import ReviewProduct from './ReviewProduct';

// Shared
import AboutProduct from '../shared/AboutProduct'

// Image
import mintGreen from '../../assets/image/review-img/green.png'
import purpelBerry from '../../assets/image/review-img/purpel.png'
import goldenSunset from '../../assets/image/review-img/golden.png'

const Review = () => {
    const [reviewProduct] = useState([
        { id: 1, brand: 'WRIST BAND', name: 'Mint Green', price: '$25.90', classColor: 'review__product-name mint-green', img: mintGreen },
        { id: 2, brand: 'WRIST BAND', name: 'Purpel Berry', price: '$25.20', classColor: 'review__product-name purpel-berry', img: purpelBerry },
        { id: 3, brand: 'WRIST BAND', name: 'Golden Sunset', price: '$25.99', classColor: 'review__product-name golden-sunset', img: goldenSunset },
    ])
    return (
        <section className='review'>
            <div className='container'>
                <div className='review__heading'>
                    <AboutProduct
                        heading='ADJUSTABLE STRAPS'
                        lTitle='Choose the best
                        color for your activity' />
                </div>
                <div className='review__product-container'>
                    <div className='row'>
                        {reviewProduct.map(item => <ReviewProduct key={item.id} brand={item.brand} name={item.name} price={item.price} classColor={item.classColor} img={item.img} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;