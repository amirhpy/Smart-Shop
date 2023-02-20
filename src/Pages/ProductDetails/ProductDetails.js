import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

// Function
// import allProducts from '../Shop/allProduct';

// Components
import PaginationShop from '../../Components/shared/PaginationShop';

// React Icon
import { RxArrowUp } from 'react-icons/rx'
import { RxArrowDown } from 'react-icons/rx'
import { BsBasket } from 'react-icons/bs'

const ProductDetails = () => {
    let params = useParams()
    // const [allProduct] = useState(allProducts)

    return (
        <>
            {
                !hasProd ? (
                    <Navigate to='/shop' />
                ) : (
                    <div className='product-details'>
                        <PaginationShop />
                        <div className='container'>
                            <div className='main__product'>
                                <div className='row'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='main-prod__imgcontainer'>
                                            <img src='#' alt='smart' className='main-prod__img' />
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div className='main-prod__body'>
                                            <h2 className='main-prod__name'>{}</h2>
                                            <h3 className='main-prod__price'>£{}</h3>
                                            <p className='main-prod__desc'>
                                                Aenean egestas ante non ullamcorper rutrum. Donec fermentum mi nec massa tempor vehicula. Nulla nec porta lorem, laoreet congue lectus. Nullam commodo nisl in elit posuere, eget pulvinar nisl fringilla.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum velit id eros finibus luctus.
                                            </p>
                                            <div className='main-prod__basket'>
                                                <div className='main-prod__counter'>
                                                    <div className='counter-up'>
                                                        <RxArrowUp />
                                                    </div>
                                                    <p className='counter-show'>{}</p>
                                                    <div className='counter-down'>
                                                        <RxArrowDown />
                                                    </div>
                                                </div>
                                                <div className='main-prod__button'>
                                                    <BsBasket />
                                                    <p>Add To Cart</p>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <h3 className='main-prod__category'>Category :</h3>
                                                <p className='shop__product-info pb-0'>{}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>

    );
};

export default ProductDetails;