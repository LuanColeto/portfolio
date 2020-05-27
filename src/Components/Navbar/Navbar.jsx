import React, {Component} from "react";
import './Cabecalho.css';


class Navbar extends Component{
    render() {
            return(
                <header id="navbar">
                    <nav className="navbar fixed-top navbar-expand-md navbar-dark col-md-12"  style={{background: '#133B57'}} >
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link"  href="#navbar">Início <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#section-about">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Skills">Habilidades</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#projects-section">Projetos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#contact-section">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

            )
        }
}


export default Navbar;
