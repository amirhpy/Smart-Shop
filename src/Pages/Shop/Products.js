import React from 'react';
import { Link } from 'react-router-dom'

// React Icon
import { BsBasket } from 'react-icons/bs'

const Products = (props) => {
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <Link to={`/shop/${props.id}`}>
                <div className='shop__product-container'>
                    <div className='shop__product-pic'>
                        <img src={props[1].data.img} alt='product' className='shop__product-img' />
                    </div>
                    <div className='shop__product-body'>
                        <h3 className='shop__product-name'>{props[1].data.name}</h3>
                        <p className='shop__product-info'>{props[1].data.category}</p>
                        <div className='shop__icon-container'>
                            <span className='shop__border'></span>
                            <div className='shop__basket-parent'>
                                <BsBasket className='shop__basket-icon' />
                            </div>
                        </div>
                        <p className='shop__product-price'>£{props[1].data.price}</p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Products;