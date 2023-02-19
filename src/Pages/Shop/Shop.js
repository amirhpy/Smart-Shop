import React, { useEffect, useState } from 'react';
import axios from 'axios'

// Function
// import allProducts from './allProduct';

// Components
import PaginationShop from '../../Components/shared/PaginationShop';
import Products from './Products';

const Shop = () => {
    // const [allProduct] = useState(allProducts)
    const [smartDataAPI, setSmartDataAPI] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://smartwatch-a853a-default-rtdb.firebaseio.com/smart-data.json')
                .then(res => {
                    console.log(Object.entries(res.data))
                    setSmartDataAPI(Object.entries(res.data))
                })
        }

        fetchData()
    }, [])

    return (
        <div className='shop'>
            <PaginationShop />
            <div className='container'>
                <div className='shop__product'>
                    <div className='row'>
                        {/* {allProduct.map(prod => <Products key={prod.id} {...prod} />)} */}
                        {smartDataAPI.map(prod => <Products key={prod[0]} {...prod} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;