import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Include/bootstrap';
import "animate.css/animate.min.css";

import Cabecalho from "./Components/Cabecalho/Cabecalho";
import MainBanner from "./Components/MainBanner/MainBanner"
import About from "./Components/About/About"

function App() {
  return (
    <div className="App">
            <Cabecalho/>
            <MainBanner />
            <About/>
    </div>
  );
}



export default App;
