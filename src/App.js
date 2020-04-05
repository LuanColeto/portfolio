import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Include/bootstrap';
import "animate.css/animate.min.css";

//Components
import Cabecalho from "./Components/Navbar/Navbar";
import MainBanner from "./Components/MainBanner/MainBanner";
import About from "./Components/About/About";
import Results from "./Components/Results/Results";
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
            <MainBanner />
            <Cabecalho/>
            <About/>
            <Results/>
            <Projects/>
            <Contact/>
            <Footer/>
    </div>
  );
}



export default App;
