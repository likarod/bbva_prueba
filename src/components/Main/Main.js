import React, {Fragment} from "react";

import Form from '../Form/Form'
import Load from '../Load/Load'
import Error from "../Error/Error";
import Forecast from '../../containers/Forecast/Forecast.js';

import useWeather from '../../hooks/useWeather';

import style from './Main.module.css';
import variables from '../../styles/variables.module.css'

const Main = () => {
    const {newError, isLoading, forecast, submitRequest} = useWeather();
    
    const onSubmit = (value) =>{
        submitRequest(value);
    }

    return(
        <Fragment className={variables}>
            {!forecast && (
                 <section className={`${style.box}`}>
                    {!isLoading && <Form search={onSubmit}/>}
                    {newError && <Error message={newError}/>}
                    {isLoading && <Load/> }
                    {/* Card Forescast */}
                </section>
            )}
            <section>
                {forecast && <Forecast forecast={forecast}/>}
                {/* List of cities */}
            </section>
           
        </Fragment>
    )
}

export default Main;