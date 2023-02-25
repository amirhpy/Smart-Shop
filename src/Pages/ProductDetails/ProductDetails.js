import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';

// Context
import { allProductsContext } from '../../Contexts/AllProductsContextProvider';
import { cartContext } from '../../Contexts/CartContextProvider'

// Components
import PaginationShop from '../../Components/shared/PaginationShop';

// React Icon
import { RxArrowUp } from 'react-icons/rx'
import { RxArrowDown } from 'react-icons/rx'
import { BsBasket } from 'react-icons/bs'
import { HiOutlineTrash } from 'react-icons/hi'

// Function
import { isInCart, quantityCount } from '../../function/helper';

const ProductDetails = (props) => {
    let params = useParams()

    const allProductsData = useContext(allProductsContext)
    const { state, dispatch } = useContext(cartContext)

    let mainProduct = allProductsData.find(product => product.id === Number(params.productID))
    let hasProd = allProductsData.some(product => product.id === Number(params.productID))

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
                                            <img src={mainProduct.img} alt='smart' className='main-prod__img' />
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div className='main-prod__body'>
                                            <h2 className='main-prod__name'>{mainProduct.name}</h2>
                                            <h3 className='main-prod__price'>£{mainProduct.price}</h3>
                                            <p className='main-prod__desc'>
                                                Aenean egestas ante non ullamcorper rutrum. Donec fermentum mi nec massa tempor vehicula. Nulla nec porta lorem, laoreet congue lectus. Nullam commodo nisl in elit posuere, eget pulvinar nisl fringilla.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum velit id eros finibus luctus.
                                            </p>
                                            <div className='main-prod__basket'>
                                                <div className='main-prod__counter'>
                                                    {
                                                        isInCart(state, mainProduct.id) ?
                                                            <div className='counter-up' onClick={() => dispatch({ type: 'INCREASE', payload: mainProduct })}>
                                                                <RxArrowUp />
                                                            </div>
                                                            :
                                                            <div className='counter-up' onClick={() => dispatch({ type: 'ADD_ITEM', payload: mainProduct })}>
                                                                <RxArrowUp />
                                                            </div>

                                                    }
                                                    <p className='counter-show'>
                                                        {
                                                            quantityCount(state, mainProduct.id) ? <span>{quantityCount(state, mainProduct.id)}</span> : <span>0</span>
                                                        }
                                                    </p>
                                                    {
                                                        quantityCount(state, mainProduct.id) ?
                                                            <div className='counter-down' onClick={() => dispatch({ type: 'DECREASE', payload: mainProduct })}>
                                                                <RxArrowDown />
                                                            </div>
                                                            :
                                                            <div className='counter-down' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: mainProduct })}>
                                                                <HiOutlineTrash />
                                                            </div>
                                                    }
                                                </div>
                                                <div className='main-prod__button' onClick={() => dispatch({ type: 'ADD_ITEM', payload: mainProduct })}>
                                                    <BsBasket />
                                                    <p>Add To Cart</p>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <h3 className='main-prod__category'>Category :</h3>
                                                <p className='shop__product-info pb-0'>{mainProduct.category}</p>
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