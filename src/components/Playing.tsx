import { games } from '../data/portfolioData';

const Playing: React.FC = () => {
    if (games.length === 0) return null;

    return (
        <section id="playing" className="section playing-section fade-in">
            <h2 className="section-heading">
                <span className="slash">/</span> when i'm not coding
            </h2>

            <div className="playing-cards">
                {games.map((game) => (
                    <article className="playing-card" key={game.title}>
                        <span className="playing-tag">now playing</span>
                        <h3 className="playing-title">{game.title}</h3>
                        <p className="playing-note">{game.note}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Playing;
