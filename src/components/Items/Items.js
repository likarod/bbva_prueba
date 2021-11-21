import React from 'react';
import PropTypes from 'prop-types';

import style from './Items.module.css';

const Items = ({name, value, unit}) => {
    return (
        <div className={style.container}>
            <p
            className={style.items}><span>{name}</span></p>
            <p className={style.items}>
                <span>{value}</span>
                <span>{unit}</span>
            </p>
        </div>
    )
}

Items.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
}

export default Items;
