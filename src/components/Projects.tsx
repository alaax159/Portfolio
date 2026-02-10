import { projects } from '../data/portfolioData';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const FolderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
    </svg>
);

const Projects: React.FC = () => {
    const featured = projects.filter((p) => p.featured);
    const other = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="section fade-in">
            <h2 className="section-heading">
                <span className="slash">/</span> projects
            </h2>

            {/* Featured Projects */}
            <div className="featured-projects">
                {featured.map((project) => (
                    <div className="featured-card" key={project.title}>
                        <p className="featured-label">Featured Project</p>
                        <h3 className="featured-title">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                {project.title}
                            </a>
                        </h3>
                        <p className="featured-desc">{project.description}</p>
                        <div className="featured-techs">
                            {project.techs.map((t) => (
                                <span key={t}>{t}</span>
                            ))}
                        </div>
                        <div className="featured-links">
                            <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                <GithubIcon />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Other Projects Grid */}
            <div className="projects-grid">
                {other.map((project) => (
                    <article className="project-card" key={project.title}>
                        <div className="project-card-header">
                            <span className="project-card-folder">
                                <FolderIcon />
                            </span>
                            <div className="project-card-links">
                                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <GithubIcon />
                                </a>
                            </div>
                        </div>
                        <h3 className="project-card-title">{project.title}</h3>
                        <p className="project-card-desc">{project.description}</p>
                        <div className="project-card-techs">
                            {project.techs.map((t, i) => (
                                <span key={i}>{t}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
