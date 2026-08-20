import './Sections.css';

export default function Projects() {

    return (
        <div className="pageContent paddingLarge">
            <div className="pageContentHeader">
                <div className="pageContentHeader-section">
                    <h2 id="projects" className="headerTitle-medium">
                        Projects
                    </h2>
                </div>
            </div>
            <div className="projects-grid">
                <div className="project-card project-featured">
                    <img className="project-img" src="Pissproject.png" alt="Alcohol Price Comparison"></img>
                    <div className="project-body">
                        <div className="project-header">
                            <span className="project-name">The Piss Project - In Progress</span>
                            <a className="project-link" href="https://github.com/Ivpadi/The-Piss-Project ">Github</a>
                        </div>
                        <p className="project-date">2026</p>
                        <div className="chips">
                            <span className="chip chip-neutral"></span>
                            <span className="chip chip-neutral"></span>
                            <span className="chip chip-neutral"></span>
                        </div>
                        <p className="project-desc">The Piss Project is a full stack price comparison platform that aggregates the data of different alcoholic drinks between the biggest retailers across NZ. It scrapes the websites of the biggest retailers for the drinks' information, standardises it and stores it into a PostgreSQL database. This data is then extracted and displayed on the website as product cards allowing the user to compare the prices across multiple stores to find the best deal.</p>
                    </div>
                </div>
                <div className="project-card">
                    <img className="project-img" src="Portfolio.png" alt="Porfolio"></img>
                    <div className="project-body">
                        <div className="project-header">
                            <span className="project-name">Portfolio</span>
                            <a className="project-link" href="https://github.com/Ivpadi/Portfolio">Github</a>
                        </div>
                        <p className="project-date">2026</p>
                        <div className="chips">
                            <span className="chip chip-neutral"></span>
                            <span className="chip chip-neutral"></span>
                            <span className="chip chip-neutral"></span>
                        </div>
                        <p className="project-desc">This website is my personal portfolio built with React to showcase my projects, technical skills, education and experience. My portfolio emphasises clean design and a smooth user experience while serving as a central hub for my work.</p>
                    </div>
                </div>
                <div className="project-card">
                    <img className="project-img" src="DocAnalyzer.png" alt="Document Analyzer and Scanner"></img>
                    <div className="project-body">
                        <div className="project-header">
                            <span className="project-name">DocAnalyzer</span>
                            <a className="project-link" href="https://github.com/Ivpadi/DocAnalyzer">Github</a>
                        </div>
                        <p className="project-date">2025</p>
                        <div className="chips">
                            <span className="chip chip-neutral"></span>
                            <span className="chip chip-neutral"></span>
                            <span className="chip chip-neutral"></span>
                        </div>
                        <p className="project-desc">DocAnalyzer is a full-stack web application developed in collaboration with four other students that transforms handwritten and printed documents into searchable digital notes using Google Cloud Vision OCR. The platform integrates Google Gemini to simplify technical jargon, while providing secure authentication, note management, document sharing and a responsive user interface built with Vue.js, Django REST framework and PostgreSQL.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
