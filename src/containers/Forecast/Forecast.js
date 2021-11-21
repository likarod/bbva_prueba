import React from "react";
import PropTypes from 'prop-types';

import CurrentForecast from "../../components/CurrentForescat/CurrentForescat";
import Details from '../../components/Details/Details'
import { CityConsumer } from "../../context/cityContext";


import style from './Forest.module.css';


const Forecast = ({forecast}) => {

    return (
        <CityConsumer>
            {(obj) => ( 
            <div className={style.box}>
                <div> 
                    <CurrentForecast  {... forecast.dayForecast}/> 
                </div>

                <div> 
                    <Details forecast={forecast.dayDetails}/>
                </div>
                <div></div> {/* Upcoming Days */}
                <div>
                    <button name="guardar" type="submint" onClick={() => obj.metodo([...obj.contexto])}>
                        Guardar ciudad
                    </button>
                </div>
                {console.log(obj)}
            </div>
            )}
        </CityConsumer>
    )
}

Forecast.protoTypes = {
    forecast : PropTypes.shape ({
        dayForecast: PropTypes.object,
        dayDetails: PropTypes.array
    })
}
export default Forecast;