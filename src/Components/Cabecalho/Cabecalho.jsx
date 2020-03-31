import React, {Component} from "react";
import './cabecalho.css';


class Cabecalho extends Component{
        render() {
            return(
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link"  href="#">Início <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Projetos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            )
        }
}

export default Cabecalho;
