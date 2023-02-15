import React from 'react';
import { Link } from 'react-router-dom'

// React Icon
import { IoIosArrowForward } from 'react-icons/io'

const PaginationShop = () => {
    return (
        <div className='shop__pagination'>
            <h2 className='shop__heading'>Shop</h2>
            <div className='shop__links'>
                <Link to='/'>Home</Link>
                <span className='ps-1'><IoIosArrowForward /></span>
                <Link to='/shop'>Shop</Link>
            </div>
        </div>
    );
};

export default PaginationShop;