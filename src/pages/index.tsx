import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {useEffect, useState} from "react";

interface Project {
  name: string;
  image: string;
  techs: string[]
  category: string[]
  filtered?: boolean
}

export default function Home() {
  const portfolio = [
    {
      name: 'Minha estante',
      image: '/minha_estante.png',
      techs: ['typescript', 'node js', 'react-native'],
      category: ['all', 'backend', 'mobile'],
    },
    {
      name: 'Github explorer',
      image: '/github_explporer.jpg',
      techs: ['typescript', 'node js', 'react-native'],
      category: ['all', 'backend', 'mobile'],
    }
  ]

  const [filter, setFilter] = useState('all')
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    setProjects(portfolio)
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));

    setProjects(filtered)
  }, [filter])

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
                Sou um desenvolvedor Full Stack. Apaixonado por tecnologia, e especialista no desenvolvimento de APIS.
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

      <div className="position-relative mt-10">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <section className="py-8 pt-md-11 pb-md-12 bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/*<h6 className="text-uppercase text-success fw-bold">*/}
              {/*  All in one solution*/}
              {/*</h6>*/}

              <h1 className="fw-bold text-white">
                Minhas habilidades.
              </h1>

              <p className="fs-lg text-gray-500 mb-7 mb-md-9">
                Veja todas as minhas competências técnicas.
              </p>

            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-4">

              <h4 className="fw-bold text-white mb-5">
                Linguagens
              </h4>

              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  TypeScript
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  JavaScript
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  Node js
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  Ruby
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  HTML
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  CSS
                </p>

              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">

              <h4 className="fw-bold text-white mb-5">
                Frameworks
              </h4>

              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  Express js
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  Adonis js
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  React
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  React native
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  Next js
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  Ruby on rails
                </p>

              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">

              <h4 className="fw-bold text-white mb-5">
                Banco de dados
              </h4>

              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  PostgreSQL
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  MySQL
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  SQLite
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  MongoDB
                </p>

              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">

              <h4 className="fw-bold text-white mb-5">
                Ferramentas
              </h4>

              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  AWS
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  Digital ocean
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  Docker
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  Netlify
                </p>

              </div>
              <div className="d-flex">

                <div className="badge badge-rounded-circle bg-success mt-1 me-4">
                  <i className="fe fe-check"></i>
                </div>

                <p className="text-gray-300">
                  Vercel
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

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

      <section className="pt-12 pt-md-14 pb-12 pb-md-15 overlay overlay-black overlay-60 bg-cover jarallax">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">

              <h1 className="display-2 fw-bold text-white">
                Meus projetos
              </h1>

              <p className="lead text-white-75 mb-4">
                De uma olhada em alguns projetos em que já trabalhei
              </p>

              <nav className="nav justify-content-center">
                <button
                    style={{border: "none"}}
                    className={filter === 'all' ? 'badge rounded-pill bg-white-soft me-1 mb-1 active' : 'badge rounded-pill bg-white-soft me-1 mb-1'}
                    onClick={() => setFilter('all')}
                >
                  <span className="h6 text-uppercase">Todos</span>
                </button>
                <button
                    style={{border: "none"}}
                    className={filter === 'backend' ? 'badge rounded-pill bg-white-soft me-1 mb-1 active' : 'badge rounded-pill bg-white-soft me-1 mb-1'}
                    onClick={() => setFilter('backend')}
                >
                  <span className="h6 text-uppercase">Back end</span>
                </button>
                <button
                    style={{border: "none"}}
                    className={filter === 'frontend' ? 'badge rounded-pill bg-white-soft me-1 mb-1 active' : 'badge rounded-pill bg-white-soft me-1 mb-1'}
                    onClick={() => setFilter('frontend')}
                >
                  <span className="h6 text-uppercase">Front end</span>
                </button>
                <button
                    style={{border: "none"}}
                    className={filter === 'mobile' ? 'badge rounded-pill bg-white-soft me-1 mb-1 active' : 'badge rounded-pill bg-white-soft me-1 mb-1'}
                    onClick={() => setFilter('mobile')}
                >
                  <span className="h6 text-uppercase">Mobile</span>
                </button>
              </nav>

            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <section className="py-8 py-md-11 mt-n10 mt-md-n14">
        <div className="container">
          <div className="row" id="portfolio" data-isotope='{"layoutMode": "masonry"}'>

            {projects.map(project => project.filtered === true ? (
                <div className="col-12 col-md-4 resources">

                  <a className="card shadow-light-lg mb-7" href="#!">

                    <div className="card-zoom">
                      <img className="card-img" src={project.image} alt="..." />
                    </div>

                    <div className="card-img-overlay card-img-overlay-hover">
                      <div className="card-body bg-white">

                        <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"/>
                          </svg>
                        </div>

                        <h6 className="text-uppercase mb-1 text-muted">{project.name}</h6>

                        <h4 className="mb-0">{project.techs.map(tech => <span>{tech}, </span>)}</h4>

                      </div>
                    </div>

                  </a>

                </div>
            ) : (''))}

          </div>
        </div>
      </section>
    </>
  )
}
