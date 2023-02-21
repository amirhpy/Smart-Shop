import React, { useContext } from 'react';

// Function
// import allProducts from './allProduct';

// Context
import { productContext } from '../../Contexts/ProductContextProvider';

// Components
import PaginationShop from '../../Components/shared/PaginationShop';
import Products from './Products';

const Shop = () => {
    // const [allProduct] = useState(allProducts)

    const productsAPI = useContext(productContext)

    return (
        <div className='shop'>
            <PaginationShop />
            <div className='container'>
                <div className='shop__product'>
                    <div className='row'>
                        {/* {allProduct.map(prod => <Products key={prod.id} {...prod} />)} */}
                        {productsAPI.map(prod => <Products key={prod[0]} {...prod} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;