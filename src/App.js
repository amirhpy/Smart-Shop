import React from 'react';
import { useRoutes } from 'react-router-dom';

// Component
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

// Routes
import routes from './routes';

function App() {
    let router = useRoutes(routes)
    return (
        <>
            <Header />
            {router}
            <Footer />
        </>
    );
}

export default App;