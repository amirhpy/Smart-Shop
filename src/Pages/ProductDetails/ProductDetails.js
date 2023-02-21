import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';

// Function
// import allProducts from '../Shop/allProduct';

// Context
import { productContext } from '../../Contexts/ProductContextProvider';

// Components
import PaginationShop from '../../Components/shared/PaginationShop';

// React Icon
import { RxArrowUp } from 'react-icons/rx'
import { RxArrowDown } from 'react-icons/rx'
import { BsBasket } from 'react-icons/bs'

const ProductDetails = (props) => {
    let params = useParams()
    // const [allProduct] = useState(allProducts)

    const productAPI = useContext(productContext)

    let mainProduct = productAPI.find(prod => prod[0] === params.productID)
    let hasProd = productAPI.some(prod => prod[0] === params.productID)

    return (
        <>
            {
                !hasProd ? (
                    <Navigate to='/shop' />
                ) : (
                    <div className='product-details'>
                        <PaginationShop />
                        <div className='container'>
                            <div className='main__product'>
                                <div className='row'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='main-prod__imgcontainer'>
                                            <img src={mainProduct[1].data.img} alt='smart' className='main-prod__img' />
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div className='main-prod__body'>
                                            <h2 className='main-prod__name'>{mainProduct[1].data.name}</h2>
                                            <h3 className='main-prod__price'>£{mainProduct[1].data.price}</h3>
                                            <p className='main-prod__desc'>
                                                Aenean egestas ante non ullamcorper rutrum. Donec fermentum mi nec massa tempor vehicula. Nulla nec porta lorem, laoreet congue lectus. Nullam commodo nisl in elit posuere, eget pulvinar nisl fringilla.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum velit id eros finibus luctus.
                                            </p>
                                            <div className='main-prod__basket'>
                                                <div className='main-prod__counter'>
                                                    <div className='counter-up'>
                                                        <RxArrowUp />
                                                    </div>
                                                    <p className='counter-show'>{mainProduct[1].data.count}</p>
                                                    <div className='counter-down'>
                                                        <RxArrowDown />
                                                    </div>
                                                </div>
                                                <div className='main-prod__button'>
                                                    <BsBasket />
                                                    <p>Add To Cart</p>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <h3 className='main-prod__category'>Category :</h3>
                                                <p className='shop__product-info pb-0'>{mainProduct[1].data.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }



        </>

    );
};

export default ProductDetails;