import { projects as allWork } from '../data/portfolioData';
import { partitionWork } from '../data/partitionWork';

const Coursework: React.FC = () => {
    const { coursework } = partitionWork(allWork);

    if (coursework.length === 0) return null;

    return (
        <section id="coursework" className="section coursework-section fade-in">
            <details className="coursework-details">
                <summary className="coursework-summary">
                    <span className="slash">/</span> coursework
                    <span className="coursework-count">({coursework.length})</span>
                </summary>

                <p className="coursework-note">
                    Assignments and course projects, kept for completeness.
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
