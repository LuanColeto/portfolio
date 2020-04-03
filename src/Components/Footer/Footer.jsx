import React, {Component} from 'react';
import './Footer.css';
import github from '../../Images/001-github.svg';
import linkedin from '../../Images/002-linkedin.svg';
import whatsapp from '../../Images/003-whatsapp.svg';

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="container">
                    <div className="text-center center-block">
                        <a className="icon-area" href="https://github.com/LuanColeto" target="_blank" >
                            <img src={github} width="50px" height="50px" className=" social-icon" id="github-icon" />
                        </a>
                        <a className="icon-area" href="https://www.linkedin.com/in/luan-coleto-7b8b9b180/" target="_blank">
                            <img src={linkedin} width="50px" height="50px" className=" social-icon " id="linkedin-icon" />
                        </a>
                        <a className="icon-area" href="https://api.whatsapp.com/send?phone=5541999015631" target="_blank">
                            <img src={whatsapp}  width="50px" height="50px" className=" social-icon" id="whatsapp-icon" />
                        </a>
                    </div>

                </div>
            </footer>
        )
    }
}

export default Footer;
