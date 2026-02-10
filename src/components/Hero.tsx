import { personalInfo } from '../data/portfolioData';
import PixelPortrait from './PixelPortrait';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                {/* Pixel-art profile from actual photo */}
                <div className="hero-ascii">
                    <PixelPortrait
                        src={personalInfo.profileImage}
                        width={280}
                        height={320}
                        pixelSize={5}
                    />
                </div>

                {/* Text side */}
                <div className="hero-text">
                    <h1 className="hero-greeting">
                        hi, <strong>{personalInfo.shortName.split(' ')[0].toLowerCase()}</strong> here.
                        <span className="hero-cursor"></span>
                    </h1>
                    <p className="hero-bio">
                        {personalInfo.bio}
                    </p>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="hero-cta"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        Say Hi
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
