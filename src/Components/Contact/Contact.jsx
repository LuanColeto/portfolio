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
                            <form className=" ">

                                <div  className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-white label-text" htmlFor="fname">Nome</label>
                                        <input type="text" id="fname"  className="form-control"/>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-white label-text" htmlFor="email">E-mail</label>
                                        <input type="email" id="email" className="form-control"/>
                                    </div>
                                </div>


                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-white label-text " htmlFor="mensage">Mensagem</label>
                                        <textarea  name="message" id="message" cols="30" rows="7" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input type="submit" value="Enviar mensagem" className="btn py-2 px-4 text-white label-text"/>
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
