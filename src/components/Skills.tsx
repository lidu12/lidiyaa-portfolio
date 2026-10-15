import { skillCategories } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__header">
          <div className="section-eyebrow">Technical Competencies</div>
          <h2 className="section-title">Skills & Toolkit</h2>
          <p className="section-subtitle">
            Core technologies and engineering proficiencies cultivated through project execution, coursework,
            and research.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="card skill-card">
              <div className="skill-card__header">
                <span className="skill-card__number">0{idx + 1}</span>
                <h3 className="skill-card__title">{cat.title}</h3>
              </div>
              <ul className="skill-card__list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skill-card__item">
                    <span className="skill-card__dot" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
