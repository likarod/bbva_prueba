import React, {Fragment} from "react";

import Form from '../Form/Form'
import Load from '../Load/Load'
import Error from "../Error/Error";
import Forecast from '../../containers/Forecast/Forecast.js';

import useWeather from '../../hooks/useWeather';

import style from './Main.module.css';

const Main = () => {
    const {newError, isLoading, forecast, submitRequest} = useWeather();
    
    const onSubmit = (value) =>{
        submitRequest(value);
    }

    return(
        <Fragment >
            {!forecast && (
                 <section className={`${style.box} position-relative`}>
                    <div>
                        {!isLoading && <Form search={onSubmit}/>}
                        {newError && <Error message={newError}/>}
                        {isLoading && <Load/> }
                        {/* Card Forescast */}
                    </div>
                </section>
            )}
            <section>
                <div>
                {forecast && <Forecast forecast={forecast}/>}
                {/* List of cities */}
                </div>
            </section>
           
        </Fragment>
    )
}

export default Main;