import React, { useState } from 'react';
import { Link } from 'react-router-dom'

// Function
import AllProducts from './AllProduct';

// Components
import Header from '../../Components/Header/Header'
import Products from './Products';

// React Icon
import { IoIosArrowForward } from 'react-icons/io'

const Shop = () => {
    const [allProduct] = useState(AllProducts)
    return (
        <div className='shop'>
            <Header />
            <div className='shop__pagination'>
                <h2 className='shop__heading'>Shop</h2>
                <div className='shop__links'>
                    <Link to='/'>Home</Link>
                    <span className='ps-1'><IoIosArrowForward /></span>
                    <Link to='/shop'>Shop</Link>
                </div>
            </div>
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