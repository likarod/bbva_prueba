import React from 'react';
import PropTypes from 'prop-types';

import style from './CurrentForescat.module.css';


const CurrentForecast = ({weekday, location, temperature, weatherIcon}) => {

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h3 className={style.temp_info}>
                    <span>{temperature}</span>°C
                </h3>
                <p>
                    <span className={style.city}> {location} </span>
                </p>
                <p>
                    <span className={style.weekday}>  {weekday} </span>
                </p>
            </div>
            <div className={style.box_img}>
                <img width={20} src={weatherIcon} alt= "Ícono del tiempo actual" className={style.weather_icon}/>
            </div>
        </div>
    )
};

CurrentForecast.propTypes = {
    weekday: PropTypes.string,
    location: PropTypes.string,
    temperature: PropTypes.number,
    weatherIcon: PropTypes.string
}

export default CurrentForecast;