import React from 'react';

// React Icon
import { BsBasket } from 'react-icons/bs'

const Products = (props) => {
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <div className='shop__product-container'>
                <div className='shop__product-pic'>
                    <img src={props.img} alt='product' className='shop__product-img' />
                </div>
                <div className='shop__product-body'>
                    <h3 className='shop__product-name'>{props.name}</h3>
                    <p className='shop__product-info'>{props.info}</p>
                    <div className='shop__icon-container'>
                        <span className='shop__border'></span>
                        <div className='shop__basket-parent'>
                            <BsBasket className='shop__basket-icon' />
                        </div>
                    </div>
                    <p className='shop__product-price'>£{props.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Products;