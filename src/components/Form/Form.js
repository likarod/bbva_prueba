import React, {useState} from 'react';
import PropTypes from 'prop-types';

import style from './Form.module.css'

const Form = ({search}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if(!city || city === "" ) return;
        search(city);
    }

    return (
        <form onSubmit={onSubmit} className={style.box}>
            <h1>Wheater App</h1>
            <div className={style.input}>
                <input
                    aria-label="location"
                    type="text"
                    placeholder=""
                    required
                    value={city}
                    onChange={e => setCity(e.target.value) }
                />
                <label for="">Ingrese ciudad o país</label>
            </div>
           
           <div className={style.button_box}>
               <button type="submit" className={style.button} onClick={onSubmit}>
                Buscar
                </button>
            </div>

            
        </form>
    )
}

Form.propTypes = {
    search: PropTypes.func.isRequired,
};

export default Form;