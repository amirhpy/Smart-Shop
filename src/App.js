import React from 'react';
import { useRoutes } from 'react-router-dom';

// Context
import AllProductsContextProvider from './Contexts/AllProductsContextProvider';
import CartContextProvider from './Contexts/CartContextProvider'

// Component
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

// Routes
import routes from './routes'

function App() {
    let router = useRoutes(routes)
    return (
        <>
            <AllProductsContextProvider>
                <CartContextProvider>
                    <Header />
                    {router}
                    <Footer />
                </CartContextProvider>
            </AllProductsContextProvider>
            <ScrollToTop />
        </>
    );
}

export default App;