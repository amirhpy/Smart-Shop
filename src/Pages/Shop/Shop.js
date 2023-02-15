import React, { useState } from 'react';

// Function
import allProducts from './allProduct';

// Components
import PaginationShop from '../../Components/shared/PaginationShop';
import Products from './Products';

const Shop = () => {
    const [allProduct] = useState(allProducts)
    return (
        <div className='shop'>
            <PaginationShop />
            <div className='container'>
                <div className='shop__product'>
                    <div className='row'>
                        {allProduct.map(prod => <Products key={prod.id} {...prod} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;