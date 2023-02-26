import React from 'react';

// Components
import SplendidFeatures from './SplendidFeatures';
import SmartProperty from './SmartProperty';

const Features = () => {
    return (
        <section className='features'>
            <div className='container'>
                <SplendidFeatures />
                <SmartProperty />
            </div>
        </section>
    );
};

export default Features;