import React from 'react';

const SmartOption = ({ head, desc, quality }) => {
    return (
        <div className='splendid__option-container'>
            <div className='smart__props'>
                <div className='splendid__option-more'>
                    <h3 className='splendid__option-head'>{head}</h3>
                    <p className='splendid__option-desc'>{desc}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem'}}>
                    <div className='smart__quality' style={{ width: `${quality}%` }}></div>
                    <span style={{fontSize: '1.6rem', fontWeight: '700'}}>{quality}%</span>
                </div>
            </div>
        </div>
    );
};

export default SmartOption;