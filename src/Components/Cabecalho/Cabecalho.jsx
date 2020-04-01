import React, {Component} from "react";
import './Cabecalho.css';


class cabecalho extends Component{
    render() {
            return(
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top " style={{background: '#133B57'}} >
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
                </header>

            )
        }
}



export default cabecalho;
