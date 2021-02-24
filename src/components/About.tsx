export default function About() {

    return (
        <>
            <section className="pt-4 pt-md-11 mt-11">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5 col-lg-6 order-md-2" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>

                            <img src="/code-intro.svg"
                                 className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." data-aos="fade-up"
                                 data-aos-delay="100" />


                        </div>
                        <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">

                            <h1 className="display-3 text-center text-md-start">
                                Sobre mim
                            </h1>


                            <p className="lead text-center text-md-start text-muted mb-lg-8">
                                Oi! Meu nome é Luan Mota Coleto, sou um desenvolvedor de software, apaixonado não só por programação, mas pelo o que eu posso fazer com ela. Tenho como propósito resolver problemas, através de código.
                            </p>

                            <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                                Tenho experiência em projetos de médio porte, tanto mobile quanto web, construindo tanto o lado do servidor quanto o lado do cliente (apesar de ter uma paixão por back-end). Minha Stack principal é React e node, além de trabalhar com Ruby e Rails, mas sempre buscando aprender coisas novas.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
