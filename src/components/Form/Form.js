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
        <form onSubmit={onSubmit}>
   
            <input
                aria-label="location"
                type="text"
                className={`${style.box} form-control`}
                placeholder="Search for location"
                required
                value={city}
                onChange={e => setCity(e.target.value) }
            />

            <button type="submit" className={style.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    )
}

Form.propTypes = {
    search: PropTypes.func.isRequired,
};

export default Form;