import { certifications } from '../data/portfolioData';

const Certifications: React.FC = () => {
    return (
        <section id="certifications" className="section certifications-section fade-in">
            <h2 className="section-heading">
                <span className="slash">/</span> certifications
            </h2>

            <div className="cert-cards">
                {certifications.map((cert, idx) => (
                    <div key={idx} className="cert-card">
                        <header className="cert-header">
                            <h3 className="cert-title">{cert.title}</h3>
                            <div className="cert-issuer">{cert.issuer}</div>
                            <div className="cert-date">{cert.date}</div>
                        </header>
                        <ul className="cert-bullets">
                            {cert.bullets.map((bullet, bIdx) => (
                                <li key={bIdx}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
