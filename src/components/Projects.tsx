import {useEffect, useState} from "react";

interface Project {
    name: string;
    image: string;
    link: string;
    techs: string[]
    category: string[]
    filtered?: boolean
}


export default function Projects() {
    const portfolio = [
        {
            name: 'Minha estante',
            image: '/minha_estante.png',
            link: 'https://apps.apple.com/br/app/minha-estante/id1554793638',
            techs: ['typescript, ', 'node js, ', 'react-native'],
            category: ['all', 'backend', 'mobile'],
        },
        {
            name: 'Github explorer',
            image: '/github_explorer.png',
            link: 'https://github.com/LuanColeto/Github_explorer',
            techs: ['typescript, ', 'react'],
            category: ['all', 'frontend'],
        },
        {
            name: 'Ecoleta',
            image: 'ecoleta.png',
            link: 'https://github.com/LuanColeto/Ecoleta',
            techs: ['typescript, ', 'node js, ', 'react-native, ', 'react'],
            category: ['all', 'backend', 'mobile', 'frontend'],
        },
        {
            name: 'GoBarber',
            image: 'gobarber.png',
            link: 'https://github.com/LuanColeto/GoBarber',
            techs: ['typescript, ', 'node js, ', 'react-native, ', 'react'],
            category: ['all', 'backend', 'mobile', 'frontend'],
        },
        {
            name: 'Have to code',
            image: 'havetocode.png',
            link: 'https://havetocode.com/',
            techs: ['typescript, ', 'next js, ', 'node js'],
            category: ['all', 'frontend', 'backend'],
        },
        {
            name: 'GoFinances',
            image: 'gofinances-server.png',
            link: 'https://github.com/LuanColeto/GoFinances-server',
            techs: ['typescript, ', 'node js, ', 'express js'],
            category: ['all', 'backend'],
        },
        {
            name: 'GoMarketplace',
            image: 'gomarketplace.png',
            link: 'https://github.com/LuanColeto/GoMarketplace',
            techs: ['typescript, ', 'react-native'],
            category: ['all', 'mobile'],
        },
        {
            name: 'Spoiler create',
            image: 'spoiler-alert.png',
            link: 'https://github.com/LuanColeto/Spoilers-Create',
            techs: ['typescript, ', 'node js, ', 'react'],
            category: ['all', 'frontend', 'backend'],
        },
        {
            name: 'Covid-live',
            image: 'covid-live.png',
            link: 'https://github.com/LuanColeto/Covid-live',
            techs: ['typescript, ', 'react, ', 'next js'],
            category: ['all', 'frontend'],
        },
        {
            name: 'Blog Automação Curitiba',
            image: 'blog-automacao.png',
            link: 'blog.automacaocuritiba.com.br/',
            techs: ['typescript, ', 'react, ', 'next js'],
            category: ['all', 'frontend'],
        },
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
            <section className="pt-12 pt-md-14 pb-12 pb-md-15 overlay  overlay-60 bg-cover jarallax">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7 text-center">

                            <h1 className="display-2 fw-bold text-black">
                                Meus projetos
                            </h1>

                            <p className="lead text-muted mb-4">
                                De uma olhada em alguns projetos em que já trabalhei
                            </p>

                            <nav className="nav justify-content-center">
                                <button
                                    style={{border: "none"}}
                                    className={filter === 'all' ? 'badge rounded-pill bg-black-soft me-1 mb-1 active' : 'badge rounded-pill bg-white-soft me-1 mb-1'}
                                    onClick={() => setFilter('all')}
                                >
                                    <span className="h6 text-black text-uppercase">Todos</span>
                                </button>
                                <button
                                    style={{border: "none"}}
                                    className={filter === 'backend' ? 'badge rounded-pill bg-black-soft me-1 mb-1 active' : 'badge rounded-pill bg-white-soft me-1 mb-1'}
                                    onClick={() => setFilter('backend')}
                                >
                                    <span className="h6 text-black text-uppercase">Back end</span>
                                </button>
                                <button
                                    style={{border: "none"}}
                                    className={filter === 'frontend' ? 'badge rounded-pill bg-black-soft me-1 mb-1 active' : 'badge rounded-pill bg-white-soft me-1 mb-1'}
                                    onClick={() => setFilter('frontend')}
                                >
                                    <span className="h6 text-black text-uppercase">Front end</span>
                                </button>
                                <button
                                    style={{border: "none"}}
                                    className={filter === 'mobile' ? 'badge rounded-pill bg-black-soft me-1 mb-1 active' : 'badge rounded-pill bg-white-soft me-1 mb-1'}
                                    onClick={() => setFilter('mobile')}
                                >
                                    <span className="h6 text-black text-uppercase">Mobile</span>
                                </button>
                            </nav>

                        </div>
                    </div>
                </div>
            </section>



            <section className="py-8 py-md-11 mt-n10 mt-md-n14">
                <div className="container">
                    <div className="row" id="portfolio" data-isotope='{"layoutMode": "masonry"}'>

                        {projects.map(project => project.filtered === true ? (
                            <div className="col-12 col-md-4 resources">

                                <a className="card shadow-light-lg mb-7" target="_blank" href={project.link}>

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

                                            <h4 className="mb-0">{project.techs.map(tech => <span>{tech}</span>)}</h4>

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
