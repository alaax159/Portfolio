import { education } from '../data/portfolioData';

const Education: React.FC = () => {
    return (
        <section id="education" className="section education-section fade-in">
            <h2 className="section-heading">
                <span className="slash">/</span> education
            </h2>

            <div className="edu-cards">
                {education.map((edu, idx) => (
                    <div key={idx} className="edu-card">
                        <h3 className="edu-card-degree">{edu.degree}</h3>
                        <div className="edu-card-school">{edu.school}</div>
                        <div className="edu-card-date">{edu.date}</div>
                        {edu.note && <div className="edu-card-note">{edu.note}</div>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
