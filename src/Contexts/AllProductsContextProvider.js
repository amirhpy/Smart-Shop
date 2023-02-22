import React, { createContext } from 'react';

import smartCharcoalBlack from '../assets/image/shop-smart/watch-black.jpg'
import smartGoldenSunset from '../assets/image/shop-smart/watch-goldsunset.jpg'
import smartLightPink from '../assets/image/shop-smart/watch-lightpink.jpg'
import smartMintGreen from '../assets/image/shop-smart/watch-mintgreen.jpg'
import smartPinkLemonade from '../assets/image/shop-smart/watch-pinklemonade.jpg'
import smartPurpleBerry from '../assets/image/shop-smart/watch-purpelberry.jpg'
import smartSkyBlue from '../assets/image/shop-smart/watch-skyblue.jpg'
import smartSnowWhite from '../assets/image/shop-smart/watch-snowwhite.jpg'

export const allProductsContext = createContext()

const AllProductsContextProvider = ({ children }) => {

    let allProducts = [
        { id: 1, name: 'Charcoal Black', category: 'strap', price: '25.50', img: smartCharcoalBlack },
        { id: 2, name: 'Golden Sunset', category: 'strap', price: '25.50', img: smartGoldenSunset },
        { id: 3, name: 'Light Pink', category: 'strap', price: '25.50', img: smartLightPink },
        { id: 4, name: 'Mint Green', category: 'strap', price: '25.50', img: smartMintGreen },
        { id: 5, name: 'Pink Lemonade', category: 'strap', price: '25.50', img: smartPinkLemonade },
        { id: 6, name: 'Purple Berry', category: 'strap', price: '25.50', img: smartPurpleBerry },
        { id: 7, name: 'Sky Blue', category: 'strap', price: '25.50', img: smartSkyBlue },
        { id: 8, name: 'Snow White', category: 'strap', price: '25.50', img: smartSnowWhite }
    ]

    return (
        <allProductsContext.Provider value={allProducts}>
            {children}
        </allProductsContext.Provider>
    );
};

export default AllProductsContextProvider;