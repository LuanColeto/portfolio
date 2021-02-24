export default function Contact() {

    return (
        <>
            <section className="pt-8 pt-md-11 pb-8 pb-md-14">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 text-center">

                            <h2 className="fw-bold">
                               Mande uma mensagem
                            </h2>

                            <p className="fs-lg text-muted mb-7 mb-md-9">
                                Preencha os campos abaixo para entrar em contato
                            </p>

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-10">

                            <form action="https://formspree.io/f/xvovjpdg" method="POST">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-5">

                                            <label className="form-label" htmlFor="contactName">
                                                Nome
                                            </label>

                                            <input className="form-control" id="contactName" type="text"
                                                   placeholder="Nome completo" name="name" />

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-5">

                                            <label className="form-label" htmlFor="contactEmail">
                                                E-mail
                                            </label>

                                            <input className="form-control" id="contactEmail" type="email"
                                                   placeholder="seuemail@exemplo.com" name="e-mail" />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mb-7 mb-md-9">

                                            <label className="form-label" htmlFor="contactMessage">
                                                Sua mensagem
                                            </label>

                                            <textarea className="form-control" id="contactMessage"
                                                placeholder="Escreva sua mensagem! " name="message"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-auto">
                                        <input type="submit" className="btn btn-primary lift" value="Enviar" />


                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
