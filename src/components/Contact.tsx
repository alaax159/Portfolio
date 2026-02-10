import { personalInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact fade-in">
            <p className="contact-overline">What's Next?</p>
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-text">
                I'm currently looking for new opportunities and my inbox is always open.
                Whether you have a project idea, a question, or just want to say hi — I'll
                do my best to get back to you!
            </p>
            <a
                className="contact-btn"
                href={`mailto:${personalInfo.email}`}
            >
                Say Hello
            </a>
        </section>
    );
};

export default Contact;
