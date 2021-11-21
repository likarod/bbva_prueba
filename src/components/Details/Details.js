import React from 'react';
import PropTypes from 'prop-types';

import Items from '../Items/Items';

import style from './Details.module.css'

const Details = ({forecast}) => {
    return (
        <div className={style.content}> 
            {forecast.map(item => (
                <Items {...item} key={item.name}/>
            ))}
        </div>
    )

}

Details.propTypes = {
    forecast: PropTypes.array,
}

export default Details 