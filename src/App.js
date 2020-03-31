import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';

import Cabecalho from "./Components/Cabecalho/Cabecalho";
import MainBanner from "./Components/mainBanner/mainBanner"

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <MainBanner/>
    </div>
  );
}

export default App;
