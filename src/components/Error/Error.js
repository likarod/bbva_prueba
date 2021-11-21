import React from 'react';
import PropTypes from 'prop-types';


import style from './Error.module.css'

const Error = ({message}) => {
    return (
        <div className= {`${style.error} alert position-absolute`} role="alert">
            {message}
        </div>
    );
}

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'An error occurred',
};

export default Error;