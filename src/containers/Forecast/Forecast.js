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
                <div className={style.card}> 
                    <CurrentForecast  {... forecast.dayForecast}/> 
                </div>

                <div> 
                    <Details forecast={forecast.dayDetails}/>
                </div>
                {/* <div className={style.block}>
                    <button name="guardar" type="submint" onClick={() => obj.metodo([...obj.contexto])} className={style.button}>
                        Guardar ciudad
                    </button>
                </div> */}
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