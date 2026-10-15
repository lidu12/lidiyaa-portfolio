import { useState } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'blockchain' | 'fullstack'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'ai') {
      return (
        project.id === 'documind' ||
        project.id === 'eunoia' ||
        project.id === 'ai-study'
      );
    }
    if (filter === 'blockchain') {
      return project.id === 'wallet-analysis';
    }
    if (filter === 'fullstack') {
      return (
        project.id === 'documind' ||
        project.id === 'wallet-analysis' ||
        project.id === 'vet-drug' ||
        project.id === 'eunoia'
      );
    }
    return true;
  });

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects__header">
          <div>
            <div className="section-eyebrow">Featured Work</div>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">
              A curated selection of systems and applications spanning generative AI, document intelligence,
              blockchain forensic analysis, and secure full-stack software.
            </p>
          </div>

          <div className="projects__filter-tabs" role="tablist" aria-label="Project domain filters">
            <button
              role="tab"
              aria-selected={filter === 'all'}
              className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects ({projects.length})
            </button>
            <button
              role="tab"
              aria-selected={filter === 'ai'}
              className={`filter-btn ${filter === 'ai' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('ai')}
            >
              AI & Intelligent Systems
            </button>
            <button
              role="tab"
              aria-selected={filter === 'blockchain'}
              className={`filter-btn ${filter === 'blockchain' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('blockchain')}
            >
              Blockchain & Analysis
            </button>
            <button
              role="tab"
              aria-selected={filter === 'fullstack'}
              className={`filter-btn ${filter === 'fullstack' ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter('fullstack')}
            >
              Full-Stack Systems
            </button>
          </div>
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`card project-card ${project.featured ? 'project-card--featured' : ''}`}
              style={{ '--project-accent': project.accentColor } as React.CSSProperties}
            >
              <div className="project-card__top">
                <div className="project-card__badge-row">
                  <span className="project-card__icon-box">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={project.icon} />
                    </svg>
                  </span>
                  {project.featured && (
                    <span className="project-card__featured-pill">Featured Project</span>
                  )}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link-icon"
                    aria-label={`GitHub Repository for ${project.title}`}
                    title="View Source on GitHub"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link-icon"
                      aria-label={`Live Demo for ${project.title}`}
                      title="Launch Live Demo"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card__content">
                <div className="project-card__subtitle">{project.subtitle}</div>
                <h3 className="project-card__title">
                  <a href={project.liveUrl || project.repoUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="project-card__description">{project.description}</p>
              </div>

              <div className="project-card__footer">
                <div className="project-card__tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__action-row">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__cta-btn"
                    >
                      <span>Live Demo</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__cta-btn"
                    >
                      <span>View Code</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
