import React, { useState } from 'react';

// Image
import mobileWatch from '../../assets/image/mobile-watchs.jpg'

// Shared
import SplendidOption from '../shared/SplendidOption';

// React Icon
import { MdOutlineKeyboardVoice } from 'react-icons/md'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { HiRss } from 'react-icons/hi2'

const SplendidFeatures = () => {
    const [splendidItem, setSplendidItem] = useState([
        { id: 1, icon: <MdOutlineKeyboardVoice />, head: 'Voice Recognition', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris' },
        { id: 2, icon: <HiOutlineDevicePhoneMobile />, head: 'Connect with your phone', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris' },
        { id: 3, icon: <HiRss />, head: 'Any task at hand', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris' },
    ])
    return (
        <div className='splendidfeatures'>
            <div className='row'>
                <div className='col-6'>
                    <div className='splendid__wrapper-img'>
                        <img src={mobileWatch} alt='watch' className='splendid__img' />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='splendid__content'>
                        <div className='splendid__content-heading'>
                            <p className='splendid__content-title about_heading'>meet with our</p>
                            <h2 className='splendid__content-caption about_title'>Splendid Features</h2>
                        </div>
                        <div className='splendid__option'>
                            {splendidItem.map(item => <SplendidOption key={item.id} icon={item.icon} head={item.head} desc={item.desc} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplendidFeatures;