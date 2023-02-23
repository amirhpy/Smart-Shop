import React, { useContext } from 'react';

// Context
import { cartContext } from '../../Contexts/CartContextProvider';

const CheckOutPayments = () => {
    const { state, dispatch } = useContext(cartContext)

    return (
        <div className='col-12 col-lg-4'>
            <div className='checkout_clear'>
                <div className='checkout__counter'>
                    <h3 className='total__counter'>Total Items : <p className='total__number'>{state.itemsCounter}</p></h3>
                    <h3 className='total__counter'>Total Payments : <p className='total__number'>£ {state.total}</p></h3>
                </div>
                <div className='checkout__accept'>
                    <button className='main-prod__button' onClick={() => dispatch({type: 'CHECKOUT'})}>CheckOut</button>
                    <button className='main-prod__button' onClick={() => dispatch({type: 'CLEAR'})}>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOutPayments;