import { useEffect, useRef, useState } from 'react';

// ──────────────────────────────────────────────
// Hidden easter egg: the Konami code flips the site into an amber CRT
// arcade mode. Nothing about it is advertised on the page — a Screener
// skimming for thirty seconds will never trip it.
// ──────────────────────────────────────────────

const KONAMI = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
];

const ArcadeMode: React.FC = () => {
    const [on, setOn] = useState(false);
    const progress = useRef(0);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                progress.current = 0;
                setOn(false);
                return;
            }

            // Arrow names arrive as-is; letter keys are matched case-insensitively.
            const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

            if (key === KONAMI[progress.current]) {
                progress.current += 1;
            } else {
                // A wrong key restarts, but may itself be a fresh first key.
                progress.current = key === KONAMI[0] ? 1 : 0;
            }

            if (progress.current === KONAMI.length) {
                progress.current = 0;
                setOn(true);
            }
        };

        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    // The palette lives in CSS: :root.arcade redefines the design tokens,
    // so every colour on the page follows without touching a component.
    useEffect(() => {
        document.documentElement.classList.toggle('arcade', on);
        return () => document.documentElement.classList.remove('arcade');
    }, [on]);

    if (!on) return null;

    return (
        <>
            <div className="arcade-scanlines" aria-hidden="true" />
            <button className="arcade-coin" onClick={() => setOn(false)}>
                <span className="arcade-coin-text">insert coin</span>
                <span className="arcade-coin-hint">esc to exit</span>
            </button>
        </>
    );
};

export default ArcadeMode;
