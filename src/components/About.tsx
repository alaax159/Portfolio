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
                        <span className="highlight">82.9%</span>. I have a strong foundation in software development,
                        machine learning, and computer architecture.
                    </p>
                    <p>
                        I completed an{' '}
                        <span className="highlight">AI Programming with Python Nanodegree</span> from{' '}
                        <span className="highlight">Udacity</span>, where I built deep learning image classifiers
                        using TensorFlow. I also trained in Front-End Development at{' '}
                        <span className="highlight">The Hope International Company</span>.
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
