import React, {Component} from 'react';
import './MainBanner.css';
import Typed from 'react-typed';


class MainBanner extends Component{
    render() {
        return(
          <main>
             <div id="banner-area"  >
                <div id="banner-text">
                    <Typed
                        id="apresentation-text"
                        strings={[
                            'Olá!',
                            'Eu sou Luan Coleto',
                            'Eu sou um desenvolvedor Fullstack']}
                        typeSpeed={70}
                        backSpeed={50}
                        loop/>
                    <p data-aos="fade-up" data-aos-delay="200" className="arrow bounce"><a href="#section-about"
                         className="btn  py-3 px-5 text-white about-button fa  fa-arrow-down fa-2x" style={{ color: 'white'}}>Conheça meu trabalho</a>
                    </p>
                </div>
            </div>
          </main>
        )
    }
}

export default MainBanner;
