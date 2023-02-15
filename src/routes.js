import Main from './Components/Main/Main'
import Shop from './Pages/Shop/Shop'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import NotFound from './Components/NotFound/NotFound'

let routes = [
    { path: '/', element: <Main /> },
    { path: '/shop', element: <Shop /> },
    { path: '/shop/:productID', element: <ProductDetails /> },
    { path: '*', element: <NotFound /> }
]

export default routes