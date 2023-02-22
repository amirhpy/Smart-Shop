import React, { useContext } from 'react';

// Context
import { allProductsContext } from '../../Contexts/AllProductsContextProvider';

// Components
import PaginationShop from '../../Components/shared/PaginationShop';
import Products from './Products';

const Shop = () => {
    const allProductsData = useContext(allProductsContext)

    return (
        <div className='shop'>
            <PaginationShop />
            <div className='container'>
                <div className='shop__product'>
                    <div className='row'>
                        {allProductsData.map(product => <Products key={product.id} {...product} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;