import { useState } from 'react';
import { experiences, education } from '../data/portfolioData';

const Experience: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Merge experiences + education entries into tab list
    const allEntries = [
        ...experiences,
        ...education.map((edu) => ({
            company: edu.school,
            title: edu.degree,
            date: edu.date,
            bullets: edu.note ? [edu.note] : [],
        })),
    ];

    const active = allEntries[activeTab];

    return (
        <section id="experience" className="section fade-in">
            <h2 className="section-heading">
                <span className="slash">/</span> experience
            </h2>

            <div className="experience-content">
                {/* Tab sidebar */}
                <div className="exp-tabs" role="tablist">
                    {allEntries.map((entry, i) => (
                        <button
                            key={i}
                            className={`exp-tab-btn${activeTab === i ? ' active' : ''}`}
                            onClick={() => setActiveTab(i)}
                            role="tab"
                            aria-selected={activeTab === i}
                        >
                            {entry.company.length > 20
                                ? entry.company.slice(0, 18) + '…'
                                : entry.company}
                        </button>
                    ))}
                </div>

                {/* Panel */}
                <div className="exp-panel" role="tabpanel">
                    <h3 className="exp-panel-title">
                        {active.title} <span className="company-name">@ {active.company}</span>
                    </h3>
                    <p className="exp-panel-date">{active.date}</p>
                    <ul className="exp-panel-bullets">
                        {active.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
