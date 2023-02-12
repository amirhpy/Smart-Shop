import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Component
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer'
import Shop from './Pages/Shop'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/shop' element={<Shop />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;