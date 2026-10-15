import { experience } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="experience__header">
          <div className="section-eyebrow">Professional History</div>
          <h2 className="section-title">Practical Experience</h2>
          <p className="section-subtitle">
            Applying engineering principles and analytical rigor to real-world security and intelligence
            initiatives.
          </p>
        </div>

        <div className="experience__timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-item__marker">
                <span className="timeline-item__dot" />
                <span className="timeline-item__line" />
              </div>

              <div className="card timeline-item__card">
                <div className="timeline-item__header">
                  <div>
                    <span className="timeline-item__org">{item.organization}</span>
                    <h3 className="timeline-item__role">{item.role}</h3>
                  </div>
                  {item.dates && (
                    <span className="timeline-item__date">{item.dates}</span>
                  )}
                </div>

                <ul className="timeline-item__bullets">
                  {item.description.map((bullet, idx) => (
                    <li key={idx} className="timeline-item__bullet">
                      <svg
                        className="timeline-item__check"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-item__footer">
                  <span className="timeline-item__tech-label">Environment:</span>
                  <div className="timeline-item__tags">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
