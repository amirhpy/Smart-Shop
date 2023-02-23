import React, { useContext } from 'react';

// Context
import { cartContext } from '../../Contexts/CartContextProvider'

import { quantityCount } from '../../function/helper'

// React Icon
import { HiOutlineTrash } from 'react-icons/hi'
import { RxArrowUp } from 'react-icons/rx'
import { RxArrowDown } from 'react-icons/rx'

const Cart = (props) => {
    const { state, dispatch } = useContext(cartContext)
    return (
        <div className='table__items'>
            <div>
                <img src={props.img} alt='smart' style={{ width: '15rem', borderRadius: '2rem' }} />
            </div>
            <h4 className='shop__product-name'>{props.name}</h4>
            <h4 className='shop__product-name'>{props.price}</h4>
            <div className='main-prod__counter'>
                <div className='counter-up' onClick={() => dispatch({ type: 'INCREASE', payload: props })}>
                    <RxArrowUp />
                </div>
                <p className='counter-show'>{props.quantity}</p>
                {/* {
                    props.quantity > 1 ?
                        <div className='counter-down' onClick={() => dispatch({ type: 'DECREASE', payload: props })}>
                            <RxArrowDown />
                        </div> :
                        <div className='counter-down' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: props })}>
                            <HiOutlineTrash />
                        </div>
                } */}
                {
                    quantityCount(state, props.id) > 1 &&
                    <div className='counter-down' onClick={() => dispatch({ type: 'DECREASE', payload: props })}>
                        <RxArrowDown />
                    </div>
                }
                {
                    quantityCount(state, props.id) === 1 &&
                    <div className='counter-down' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: props })}>
                        <HiOutlineTrash />
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;