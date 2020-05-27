import React, {Component} from 'react'

//Images
import ruby from './../Images/ruby.png';
import rails from './../Images/rails.png';
import html from './../Images/html-5.png';
import css from './../Images/css.png';
import javascript from './../Images/javascript.png';
import react from './../Images/react.png';
import flutter from  './../Images/flutter.png';
import bootstrap from './../Images/bootstrap.png';
import node from './../Images/node-js.png';

class Skills extends Component{
    render() {
        return(
            <div id="Skills">
                <div className="container">

                    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 className="display-4">Habilidades</h1>
                        <p className="lead" style={{marginBottom: "70px"}}>Minhas habilidades, ferramentas, linguagens e framewoks</p>
                    </div>

                    <div className="container">
                        <div className="card-deck mb-3 text-center">
                            <div className="card mb-4 shadow-sm skill-only skill-only">
                                <div className="">
                                    <img src={ruby} className="skills-images" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title pricing-card-title">Ruby</h2>
                                    <p>Ruby é uma linguagem de programação orientada a objetos, muito popular e muito utilizada.
                                        É uma linguagem elegante</p>
                                </div>
                            </div>

                            <div className="card mb-4 shadow-sm skill-only">
                                <div className="">
                                    <img src={rails} className="skills-images" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title pricing-card-title">Ruby on Rails</h2>
                                    <p>Ruby on Rails é um framework escrito em Ruby, que facilita o desenvolvimento de aplicações web.
                                        Com ele é possível criar coisas incríveis de maneira rápida e eficiente.</p>
                                </div>
                            </div>

                            <div className="card mb-4 shadow-sm skill-only">
                                <div className="">
                                    <img src={react} className="skills-images" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title pricing-card-title">React</h2>
                                    <p>React é uma biblioteca Javascript feita especialmente para construção de interfaces.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-deck mb-3 text-center">
                            <div className="card mb-4 shadow-sm skill-only">
                                <div className="">
                                    <img src={html} className="skills-images" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title pricing-card-title">HTML</h2>
                                    <p>Html é a estrutura base de qualquer aplicação web, servindo organizar as informações da página.</p>
                                </div>
                            </div>

                            <div className="card mb-4 shadow-sm skill-only">
                                <div className="">
                                    <img src={css} className="skills-images" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title pricing-card-title">CSS</h2>
                                    <p>É uma linguagem de estilos que junto com o HTML estruturamos uma página web, apesar do HTML ser o esqueleto*/}
                                        de um site, é o CSS que da vida a el.e</p>
                                </div>
                            </div>

                            <div className="card mb-4 shadow-sm skill-only">
                                <div className="">
                                    <img src={javascript} className="skills-images" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title pricing-card-title">JavaScript</h2>
                                    <p>Javascript é uma linguagem para a web, que da a inteligênca de uma aplicação, podendo se comunicar com o browser
                                        e executar diversas funções.</p>
                                </div>
                            </div>

                        </div>

                        <div className="card-deck mb-3 text-center">
                            <div className="card mb-4 shadow-sm skill-only">
                                <div className="">
                                    <img src={flutter} className="skills-images" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title pricing-card-title">Flutter</h2>
                                    <p>Flutter é um framework criado pela Google, utilizado para desenvolvimento mobile</p>
                                </div>
                            </div>

                            <div className="card mb-4 shadow-sm skill-only">
                                <div className="">
                                    <img src={bootstrap} className="skills-images" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title pricing-card-title">Bootstrap</h2>
                                    <p>Bootstrap é um framework de css, utilizado para a criação de layouts responsivos</p>
                                </div>
                            </div>

                            <div className="card mb-4 shadow-sm skill-only">
                                <div className="">
                                    <img src={node} className="skills-images" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title pricing-card-title">Node</h2>
                                    <p>O node js é um interpretador Javascript que permite desenvolver no servidor
                                        usando a linguagem da web.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
