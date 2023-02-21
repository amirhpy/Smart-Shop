import React from 'react';
import { useRoutes } from 'react-router-dom';

// Context
import ProductContextProvider from './Contexts/ProductContextProvider';

// Component
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

// Routes
import routes from './routes';

function App() {
    let router = useRoutes(routes)
    return (
        <ProductContextProvider>
            <Header />
            {router}
            <Footer />
        </ProductContextProvider>
    );
}

export default App;