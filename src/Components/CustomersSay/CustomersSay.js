import React, { useState } from 'react';

// Components
import CustomersSlider from './CustomersSlider';

// Img
import ellaJonson from '../../assets/image/customers/person-2.jpg'
import maggieWilson from '../../assets/image/customers/person-1.jpg'

const CustomersSay = () => {
    const [customersInfo] = useState([
        { id: 1, img: [ellaJonson, maggieWilson], comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien leo, iaculis rutrum lacus sed, fermentum tempor odio. Integer in ipsum eleifend ipsum mattis pulvinar at vitae magna.', name: ['Ella Jonson', 'Maggie Wilson'], score: ['96', '89'] },
    ])
    return (
        <div className='customers'>
            <div className='container'>
                <div className='customers__content'>
                    <h2 className='customers__say about_title'>What our <br /> customers say</h2>
                    {customersInfo.map(item => <CustomersSlider key={item.id} img={item.img} comment={item.comment} name={item.name} score={item.score} />)}
                </div>
            </div>
        </div>
    );
};

export default CustomersSay;