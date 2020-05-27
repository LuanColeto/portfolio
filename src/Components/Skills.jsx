import React, {Component} from 'react'
import ruby from './../Images/ruby.png'
import rails from './../Images/rails.png'
import html from './../Images/html-5.png'
import css from './../Images/css.png'
import javascript from './../Images/javascript.png'
import react from './../Images/react.png'

class Skills extends Component{
    render() {
        return(
            <div id="Skills">
                <div className="col-md-12">
                    <div id="main-title">
                        <h2 className="skills-title">Skills</h2>
                        {/*<p>Minhas habilidades, linguagens, frameworks e ferramentas que eu utilizo</p>*/}
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={ruby} className="skills-images" />
                                <h3>Ruby</h3>
                                <p>Ruby é uma linguagem de programação orientada a objetos, muito popular e muito utilizada.
                                    É uma linguagem elegante.</p>
                            </div>
                            <div className="col-md-4">
                                <img src={rails} className="skills-images" />
                                <h3>Ruby on Rails</h3>
                                <p>Ruby on Rails é um framework escrito em Ruby, que facilita o desenvolvimento de aplicações web.
                                    Com ele é possível criar coisas incríveis de maneira rápida e eficiente.</p>
                            </div>
                            <div className="col-md-4">
                                <img src={html} className="skills-images" />
                                <h3>Html</h3>
                                <p>Html é a estrutura base de qualquer aplicação web, servindo organizar as informações da página</p>
                            </div>
                            <div className="col-md-4">
                                <img src={css} className="skills-images" />
                                <h3>CSS</h3>
                                <p>É uma linguagem de estilos que junto com o HTML estruturamos uma página web, apesar do HTML ser o esqueleto
                                    de um site, é o CSS que da vida a ele</p>
                            </div>
                            <div className="col-md-4">
                                <img src={javascript} className="skills-images" />
                                <h3>JavaScript</h3>
                                <p>Javascript é uma linguagem para a web, que da a inteligênca de uma aplicação, podendo se comunicar com o browser
                                    e executar diversas funções</p>
                            </div>
                            <div className="col-md-4 skill-only" >
                                <img src={react} className="skills-images" />
                                <h3>React</h3>
                                <p>React é uma biblioteca Javascript feita especialmente para construção de interfaces.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
