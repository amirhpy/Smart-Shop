import React, { useState, useEffect, createContext } from 'react';

import { getProducts } from '../services/api';

const productContent = createContext()

const ProductContextProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setAllProducts(await getProducts())
        }

        fetchData()
    }, [])

    return (
        <productContent.Provider value={allProducts}>
            {children}
        </productContent.Provider>
    );
};

export default ProductContextProvider;