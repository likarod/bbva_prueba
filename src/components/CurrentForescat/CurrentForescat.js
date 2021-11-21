import React from 'react';
import PropTypes from 'prop-types';

const CurrentForecast = ({weekday, location, temperature, weatherIcon}) => {

    return (
        <div className='d-flex'> 
            <div className="d-flex flex column justifiy-content">
                <div>
                    <h2 className="font-weight-bold mb-1">
                        <span>{temperature}</span>°C
                    </h2>
                    <h3 className="font-weight">
                        <span> {location} </span>
                    </h3>
                    <p>
                        <span> {weekday} </span>
                    </p>
                </div>
                <div>
                    <img width={20} src={weatherIcon} alt= "Ícono del tiempo actual"/>
                </div>
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