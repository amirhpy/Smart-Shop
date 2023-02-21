import React, { useState, useEffect, createContext } from 'react';

import { getProducts } from '../services/api';

export const productContext = createContext()

const ProductContextProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setAllProducts(await getProducts())
        }

        fetchData()
    }, [])

    return (
        <productContext.Provider value={allProducts}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;

// Video UseContext E-14 Important