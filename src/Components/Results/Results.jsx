import React, {Component} from "react";
import './Results.css';
import cofee from '../../Images/001-food.svg';
import project from '../../Images/002-project.svg';
import code from '../../Images/003-code.svg';
import heart from '../../Images/004-heart.svg';
import CountUp from 'react-countup';

class Results extends Component{
    render() {
        return(
            <div id="results-section" >
                <hr/>
                <h1 style={{paddingBottom: '70px'}}>Resultados</h1>
               <div className="row" >
                    <div className="col-lg-3">
                        <div >
                        <img className="result-item" style={{color: '#fff'}} src={cofee} width="100" height="100"/>
                        </div>
                        <h2 className="count"><CountUp end={340} duration={15}/></h2>
                        <p className="result-text">Xícaras de café</p>
                    </div>
                   <div className="col-lg-3 ">
                       <img className="result-item" src={project} width="100" height="100"/>
                       <h2 className="count"><CountUp end={13} duration={15}/></h2>
                       <p className="result-text">Projetos</p>
                   </div>
                   <div className="col-lg-3 ">
                       <img className="result-item" src={code} width="100" height="100"/>
                       <h2 className="count"><CountUp end={8000} duration={15}/></h2>
                       <p className="result-text">Linhas de Código</p>
                   </div>
                   <div className="col-lg-3 ">
                       <img className="result-item" src={heart} width="100" height="100"/>
                       <h2 className="count"><CountUp end={100} duration={15}/>%</h2>
                       <p className="result-text">Paixão</p>
                   </div>
               </div>
            </div>
        )
    }
}

export default Results;
