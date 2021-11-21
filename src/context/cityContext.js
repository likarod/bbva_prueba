import React from 'react';

const ContextCity = React.createContext();
const CityProvider = ContextCity.Provider;
const CityConsumer = ContextCity.Consumer;

export {CityConsumer, CityProvider};
export default ContextCity;