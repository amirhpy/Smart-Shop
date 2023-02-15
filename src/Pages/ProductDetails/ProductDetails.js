import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Function
import AllProducts from '../Shop/AllProduct';

// Components
import PaginationShop from '../../Components/shared/PaginationShop';

const ProductDetails = () => {
    let params = useParams()
    const [allProduct] = useState(AllProducts)
    let mainProduct = allProduct.find(prod => prod.id == params.productID)
    console.log(mainProduct)

    return (
        <div className='product-details'>
            <PaginationShop />
            <div className='container'>
                <div className='main__product'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='mainprod__img-container'>
                                <img src={mainProduct.img} alt='smart' className='mainprod__img' />
                            </div>
                        </div>
                        <div className='col-6'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;