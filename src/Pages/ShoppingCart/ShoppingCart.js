import React, { useContext } from 'react';

// Context
import { cartContext } from '../../Contexts/CartContextProvider';

// Components
import Cart from './Cart';

const ShoppingCart = () => {
    const { state, dispatch } = useContext(cartContext)

    return (
        <div>
            {state.selectedItems.map(item => <Cart />)}
        </div>
    );
};

export default ShoppingCart;