import { personalInfo, skills } from '../data/portfolioData';

const About: React.FC = () => {
    return (
        <section id="about" className="section fade-in">
            <h2 className="section-heading">
                <span className="slash">/</span> about me
            </h2>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am a <span className="highlight">Computer Engineering</span> student at{' '}
                        <span className="highlight">Birzeit University</span> with a GPA of{' '}
                        <span className="highlight">81.1%</span>, graduating in 2027. I have a strong foundation in
                        software development, machine learning, and computer architecture.
                    </p>
                    <p>
                        Most recently I spent a summer as an{' '}
                        <span className="highlight">AI Engineer intern at ASAL Technologies</span>, where I built a{' '}
                        <span className="highlight">RAG pipeline over FDA drug labels</span> — including the grounding
                        guardrails that validate every answer against its cited source — and the{' '}
                        <span className="highlight">NestJS</span> backend behind it. I also hold two{' '}
                        <span className="highlight">Udacity machine learning nanodegrees</span>.
                    </p>
                    <p>Here are some technologies I have been working with:</p>

                    <ul className="tech-list">
                        {skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>

                    <p className="about-hobbies">
                        Outside of coding, I enjoy exploring new tech, working on hardware projects,
                        and constantly expanding my knowledge in AI and systems engineering.
                    </p>
                    <p className="about-hobbies">
                        Languages: {personalInfo.languages}
                    </p>
                </div>

                <div className="about-image-wrapper">
                    <img
                        className="about-image"
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        loading="lazy"
                    />
                    <div className="about-image-overlay"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
