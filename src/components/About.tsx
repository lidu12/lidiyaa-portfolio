import { personalInfo } from '../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__text-col">
            <div className="section-eyebrow">Background & Mindset</div>
            <h2 className="section-title">
              Engineering with curiosity, precision, and purpose.
            </h2>

            <div className="about__body">
              <p>
                I am a Computer Science student at <strong>{personalInfo.university}</strong>, driven by an interest
                in constructing intelligent, reliable software systems that solve tangible problems.
              </p>
              <p>
                My work spans generative AI applications, vector-indexed retrieval systems (RAG), Ethereum
                blockchain transaction forensics, and scalable backend services. I believe in writing
                disciplined, typed, and well-structured code that bridges modern computational models with
                intuitive user interfaces.
              </p>
              <p>
                Whether building multi-tenant document intelligence engines or tracing fund flows across
                cryptographic ledgers, I prioritize security, data integrity, and clean software architecture.
              </p>
            </div>

            <div className="about__cta-row">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let's Connect
              </a>
            </div>
          </div>

          <div className="about__cards-col">
            <div className="card about-card">
              <div className="about-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="about-card__title">Academic Foundation</h3>
              <p className="about-card__desc">
                Pursuing Computer Science at Addis Ababa University with a rigorous foundation in algorithms,
                data structures, software engineering, databases, and distributed systems.
              </p>
            </div>

            <div className="card about-card">
              <div className="about-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4.5a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0z" />
                </svg>
              </div>
              <h3 className="about-card__title">Applied AI & Intelligence</h3>
              <p className="about-card__desc">
                Implementing production-ready RAG architectures, semantic embeddings with vector databases
                (pgvector), and contextual LLM agents utilizing the Gemini API.
              </p>
            </div>

            <div className="card about-card">
              <div className="about-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="about-card__title">Blockchain & Forensics</h3>
              <p className="about-card__desc">
                Analyzing cryptographic transaction networks, building automated ETL pipelines for block
                ingestion, and designing graph-based wallet clustering engines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
