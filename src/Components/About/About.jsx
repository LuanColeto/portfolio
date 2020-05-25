import React, {Component} from "react";
import './About.css'
import Luan from '../../Images/luan-coleto.jpg'
class About extends Component{
    render() {
        return(
            <div id="section-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="section-title">Sobre Mim</h2>
                            <p style={{textAlign: 'left'}}>Meu nome é Luan Mota Coleto, sou desenvolvedor e apaixonado pelo o que eu faço.
                                Meu principal objetivo é resolver os problemas das pessoas através de código </p>
                            <p style={{textAlign: 'left'}}>Tenho alguns anos de experiência na programação, participando de diversos projetos, de
                                médio e grande porte. Trabalhando em e-commerce, sistemas para web e desenvolvimento de aplicativos, criando tanto
                                o front-end quanto back-end. Sempre entregando um código bom e funcional.</p>
                            <p style={{textAlign: 'left'}}>Tenho conhecimento em tecnologias front-end, back-end e mobile. Trabalhando com Ruby e
                                Ruby on Rails, para desenvolvimento de back-end, uso Javascript para desenvolvimento front-end, utilizando frameworks
                                como React, e para mobile utilizando o framwork Flutter.</p>

                            <a href="#contact-section" id="contact-me" className="btn">Fale comigo!</a>
                        </div>
                        <div className="col-md-6">
                            <img className="image" src={Luan}/>
                        </div>
                    </div>

            </div>
            </div>
        )
    }
}

export default About;
