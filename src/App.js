import React, {useState} from 'react';

import Main from './components/Main/Main'
import {CityProvider} from '../src/context/cityContext'

import variables from '../src/styles/variables.module.css'

function App() {
  
  const [newList, setList] = useState([]);

  return (
    <div className="App">
      <CityProvider value={{contexto: newList, metodo:setList }}>
        <Main style={variables}/>  
      </CityProvider>
    </div>
  );
}

export default App;
