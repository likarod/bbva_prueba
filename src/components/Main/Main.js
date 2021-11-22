import React, {Fragment} from "react";
import PropTypes from 'prop-types';

import Form from '../Form/Form'
import Load from '../Load/Load'
import Error from "../Error/Error";
import Forecast from '../../containers/Forecast/Forecast.js';

import useWeather from '../../hooks/useWeather';

import style from './Main.module.css';

const Main = ({variables}) => {
    const {newError, isLoading, forecast, submitRequest} = useWeather();
    
    const onSubmit = (value) =>{
        submitRequest(value);
    }

    return(
        <Fragment>
             {!forecast && (
                <div className={variables}>
                    <div className={`${style.box}`}>
                        {!isLoading && <Form search={onSubmit}/>}
                        {isLoading && <Load/> }
                        {newError && <Error message={newError}/>}
                        {/* Card Forescast */}
                    </div>
                </div>  
                )}
                <div className={variables}>
                    <article>
                        {forecast && <Forecast forecast={forecast}/>}
                        {/* List of cities */}
                    </article>
                </div>
        </Fragment>
    )
}

Main.propType = {
    variables : PropTypes.object,
}

export default Main;