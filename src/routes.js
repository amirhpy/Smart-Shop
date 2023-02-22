import Main from './Components/Main/Main'
import Shop from './Pages/Shop/Shop'
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import NotFound from './Components/NotFound/NotFound'

let routes = [
    { path: '/', element: <Main /> },
    { path: '/shop', element: <Shop /> },
    { path: '/shop/:productID', element: <ProductDetails /> },
    { path: '/carts', element: <ShoppingCart /> },
    { path: '*', element: <NotFound /> }
]

export default routes