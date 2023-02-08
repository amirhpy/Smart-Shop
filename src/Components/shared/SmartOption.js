import React from 'react';

const SmartOption = ({ head, desc }) => {
    return (
        <div className='splendid__option-container'>
            <div className='smart__props'>
                <div className='splendid__option-more'>
                    <h3 className='splendid__option-head'>{head}</h3>
                    <p className='splendid__option-desc'>{desc}</p>
                </div>
                <div className='smart__quality'></div>
            </div>
        </div>
    );
};

export default SmartOption;