import { personalInfo } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'Database Systems & Modeling',
    'Object-Oriented Programming',
    'Operating Systems',
    'Computer Systems & Architecture',
    'Computer Networks & Protocols',
    'Software Engineering Methodologies',
    'Artificial Intelligence & Logic',
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="education__header">
          <div className="section-eyebrow">Academic Background</div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal foundations in computing theory, software system design, and algorithmic problem-solving.
          </p>
        </div>

        <div className="card education__card">
          <div className="education__card-header">
            <div className="education__icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div className="education__main-info">
              <span className="education__degree">Bachelor of Science in {personalInfo.degree}</span>
              <h3 className="education__university">{personalInfo.university}</h3>
              <p className="education__location">Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="education__coursework-wrapper">
            <h4 className="education__subheading">Relevant Coursework & Focus Areas</h4>
            <div className="education__course-grid">
              {coursework.map((course) => (
                <div key={course} className="education__course-item">
                  <span className="education__bullet" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
