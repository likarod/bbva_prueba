import React from 'react';
import PropTypes from 'prop-types';

import Items from '../Items/Items';

const Details = ({forecast}) => {
    return (
        <div className='mt-4 mt-md-2'>
            <div className='d-flex'>
                {forecast.map(item => (
                    <Items {...item} key={item.name}/>
                ))}
            </div>
        </div>
    )

}

Details.propTypes = {
    forecast: PropTypes.array,
}

export default Details 