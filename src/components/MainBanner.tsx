export default function MainBanner() {

    return (
        <>
            <section className="pt-4 pt-md-11 mt-11">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5 col-lg-6 order-md-2" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>

                            <img src="/luan-coleto.jpg" alt="..." className="avatar-img rounded-circle" style={{width: '70%'}} />

                        </div>
                        <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">

                            <h1 className="display-3 text-center text-md-start">
                                Bem vindo ao <br />
                                meu <span className="text-primary">portfolio</span>.
                            </h1>


                            <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                                Sou um desenvolvedor Full Stack, apaixonado por tecnologia.
                            </p>

                            <div className="text-center text-md-start">
                                <a href="https://github.com/LuanColeto" target="_blank" className="btn btn-primary shadow lift me-1">
                                    Github <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/luan-coleto/" target="_blank" className="btn btn-primary shadow lift me-1">
                                    Linkedin <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
