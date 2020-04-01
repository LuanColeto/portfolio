import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Include/bootstrap';


import Cabecalho from "./Components/Cabecalho/Cabecalho";
import MainBanner from "./Components/MainBanner/MainBanner"

function App() {
  return (
    <div className="App">
            <Cabecalho/>
            <MainBanner/>
    </div>
  );
}

export default App;
