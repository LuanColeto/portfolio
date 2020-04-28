import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component{
    render() {
        return(
            <div id="contact-section" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 id="contact-title">Entre em Contato</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <form className=" " action="https://api.staticforms.xyz/submit" method="post">
                                <input type="hidden" name="accessKey" value="2541623f-fdf9-45bf-93fa-93892e56264f"/>
                                <input type="hidden" name="subject" value="Mensagem do site" />
                                <div  className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-white label-text">Nome</label>
                                        <input type="text"  name="name" className="form-control"/>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-white label-text" htmlFor="email">E-mail</label>
                                        <input type="email"  name="email"  className="form-control"/>
                                    </div>
                                </div>


                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-white label-text " htmlFor="mensage">Mensagem</label>
                                        <textarea  name="message" name="message" cols="30" rows="7" className="form-control" />
                                    </div>
                                </div>
                                <input type="hidden" name="replyTo" value="luancoleto@outlook.com"/>
                                <input type="text" name="honeypot" style={{display: 'none'}}></input>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input type="submit" value="Enviar mensagem" className="btn py-2 px-4 text-white label-text" id="submit-btn"/>
                                    </div>
                                </div>

                            </form>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
