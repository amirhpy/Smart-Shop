import React from 'react';

// React Icon

const SplendidOption = ({ icon, head, desc }) => {
    return (
        <div className='splendid__option-container'>
            <div className='splendid__icon-box'>
                {icon}
            </div>
            <div className='splendid__option-more'>
                <h3 className='splendid__option-head'>{head}</h3>
                <p className='splendid__option-desc'>{desc}</p>
            </div>
        </div>
    );
};

export default SplendidOption;