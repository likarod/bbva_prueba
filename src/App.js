import React, {useState} from 'react';

import Main from './components/Main/Main'
import {CityProvider} from '../src/context/cityContext'

function App() {
  
  const [newList, setList] = useState([]);

  return (
    <div className="App">
      <CityProvider value={{contexto: newList, metodo:setList }}>
        <Main />  
      </CityProvider>
    </div>
  );
}

export default App;
