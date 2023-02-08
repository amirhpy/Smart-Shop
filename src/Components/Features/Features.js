import React from 'react';

// Components
import SplendidFeatures from './SplendidFeatures';
import SmartProperty from './SmartProperty';

const Features = () => {
    return (
        <div className='features'>
            <div className='container'>
                <SplendidFeatures />
                <SmartProperty />
            </div>
        </div>
    );
};

export default Features;