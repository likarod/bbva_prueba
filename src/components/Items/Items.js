import React from 'react';
import PropTypes from 'prop-types';

const Items = ({name, value, unit}) => {
    return (
        <div className='d-flex justify-content'>
            <p>{name}</p>
            <p>{value} {unit}</p>

        </div>
    )
}

Items.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
}

export default Items;
