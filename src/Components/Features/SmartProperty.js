import React, { useState } from 'react';

// Image
import groupWatchs from '../../assets/image/groupwatchs.jpg'

// Shared
import SmartOption from '../shared/SmartOption';

const SmartProperty = () => {
    const [smartAbbility] = useState([
        { id: 1, head: '+ Increased storage', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris',},
        { id: 2, head: '+ Battery life', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris', },
        { id: 3, head: '+ Display surface', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris',}
    ])
    return (
        <div className='smart__property'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='splendid__content'>
                        <div className='splendid__content-heading'>
                            <p className='splendid__content-title about_heading'>now upgraded for</p>
                            <h2 className='splendid__content-caption about_title'>Best Experience</h2>
                        </div>
                        <div className='splendid__option'>
                            {smartAbbility.map(item => <SmartOption key={item.id} head={item.head} desc={item.desc} />)}
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='splendid__wrapper-img'>
                        <img src={groupWatchs} alt='watch' className='splendid__img' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartProperty;