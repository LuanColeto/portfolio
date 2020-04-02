import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Include/bootstrap';
import "animate.css/animate.min.css";

import Cabecalho from "./Components/Cabecalho/Cabecalho";
import MainBanner from "./Components/MainBanner/MainBanner";
import About from "./Components/About/About";
import Results from "./Components/Results/Results";
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
            <Cabecalho/>
            <MainBanner />
            <About/>
            <Results/>
            <Projects/>
    </div>
  );
}



export default App;
