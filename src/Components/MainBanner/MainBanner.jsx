import React, {Component} from 'react';
import './MainBanner.css';


class MainBanner extends Component{
    render() {
        return(
          <main>
             <div id="banner-area"  >
                <div id="banner-text">
                    <p data-aos="fade-up" data-aos-delay="200" style={{color: '#fff'}}>Olá, sou <span>Luan Coleto.</span><br/>
                        Sou um Desenvolvedor FullStack</p>
                    <p data-aos="fade-up" data-aos-delay="200" className="arrow bounce"><a href="#section-contact"
                         className="btn  py-3 px-5 text-white about-button fa  fa-arrow-down fa-2x" style={{ color: 'white'}}>Conheça meu trabalho</a>
                    </p>
                </div>
            </div>
          </main>
        )
    }
}

export default MainBanner;
