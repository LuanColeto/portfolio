import React, {Component} from 'react';
import './MainBanner.css';


class MainBanner extends Component{
    render() {
        return(
          <div>
            <div id="banner-area">
                <p data-aos="fade-up" data-aos-delay="200" style={{color: '#fff'}}>Olá, sou <span>Luan Coleto.</span><br/>
                    Sou um Desenvolvedor FullStack</p>
                <p data-aos="fade-up" data-aos-delay="200"><a href="#section-contact"
                     className="btn btn-primary py-3 px-5 text-white about-button">Saiba  Mais</a>
                </p>
            </div>
          </div>
        )
    }
}

export default MainBanner;
