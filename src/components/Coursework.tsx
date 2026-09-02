import { coursework } from '../data/portfolioData';

const Coursework: React.FC = () => {
    if (coursework.length === 0) return null;

    return (
        <section id="coursework" className="section coursework-section fade-in">
            <details className="coursework-details">
                <summary className="coursework-summary">
                    <span className="slash">/</span> coursework
                    <span className="coursework-count">({coursework.length})</span>
                </summary>

                <p className="coursework-note">
                    Work built to a brief set by a course, kept here for completeness.
                </p>

                <ul className="coursework-list">
                    {coursework.map((item) => (
                        <li className="coursework-item" key={item.title}>
                            <a href={item.github} target="_blank" rel="noreferrer">
                                {item.title}
                            </a>
                            <span className="coursework-techs">{item.techs.join(' · ')}</span>
                        </li>
                    ))}
                </ul>
            </details>
        </section>
    );
};

export default Coursework;
