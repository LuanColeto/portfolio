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
                            <h2 className="section-title">Sobre </h2>
                            <p style={{textAlign: 'left'}}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
                                porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <p style={{textAlign: 'left'}}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
                                porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <p style={{textAlign: 'left'}}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
                                porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>

                            <button href="contact-section" id="contact-me" className="btn">Fale comigo!</button>
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
