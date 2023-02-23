import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

// Context
import { cartContext } from '../../Contexts/CartContextProvider';

// Components
import Cart from './Cart';
import CheckOutPayments from './CheckOutPayments';

// Shared
import PaginationShop from '../../Components/shared/PaginationShop'

const ShoppingCart = () => {
    const { state } = useContext(cartContext)

    return (
        <>
            <PaginationShop />
            <div className='shopping__cart'>
                {
                    state.itemsCounter >= 1 &&
                    <div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-lg-8'>
                                    {state.selectedItems.map(item => <Cart key={item.id} {...item} />)}
                                </div>
                                <CheckOutPayments />
                            </div>
                        </div>
                    </div>
                }

                {
                    state.checkout &&
                    <div className='is__checkout'>
                        <h3 style={{ color: '#1B5E20' }}>CheckOut Successfuly</h3>
                        <Link className='main-prod__button checkout-btn' to='/shop'>Buy More</Link>
                    </div>
                }

                {
                    !state.checkout && state.itemsCounter === 0 &&
                    <div className='is__checkout'>
                        <h3 style={{ color: '#1B5E20' }}>Want to Buy</h3>
                        <Link className='main-prod__button checkout-btn' to='/shop'>Go to Shop</Link>
                    </div>
                }
            </div>
        </>
    );
};

export default ShoppingCart;