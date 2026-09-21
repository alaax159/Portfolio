// ──────────────────────────────────────────────
// Pixel-art monogram: an arcade reticle framing "AF", with a blinking
// terminal cursor. Everything sits on a 16×16 grid, so the mark stays
// crisp at any size and matches the pixel portrait in the hero.
// ──────────────────────────────────────────────

type Cell = [x: number, y: number];

const GRID = 16;

// Each string is one row of a glyph; '#' is a filled pixel.
const A_GLYPH = [
    '.###.',
    '#...#',
    '#...#',
    '#####',
    '#...#',
    '#...#',
    '#...#',
];

const F_GLYPH = [
    '#####',
    '#....',
    '#....',
    '####.',
    '#....',
    '#....',
    '#....',
];

/** Turns glyph rows into grid cells, offset to their place on the grid. */
const place = (rows: string[], dx: number, dy: number): Cell[] =>
    rows.flatMap((row, y) =>
        [...row].flatMap((cell, x) => (cell === '#' ? [[x + dx, y + dy] as Cell] : []))
    );

// The reticle that frames the monogram — corners only, like a target
// lock in an arcade game rather than a closed box.
const BRACKETS: Cell[] = [
    [0, 0], [1, 0], [2, 0], [0, 1], [0, 2],
    [13, 0], [14, 0], [15, 0], [15, 1], [15, 2],
    [0, 13], [0, 14], [0, 15], [1, 15], [2, 15],
    [13, 15], [14, 15], [15, 15], [15, 13], [15, 14],
];

const MONOGRAM: Cell[] = [...place(A_GLYPH, 2, 4), ...place(F_GLYPH, 9, 4)];

// Terminal cursor under the F — the only part that moves.
const CURSOR: Cell[] = [[11, 12], [12, 12], [13, 12]];

const pixels = (cells: Cell[], prefix: string) =>
    cells.map(([x, y]) => (
        <rect key={`${prefix}${x}-${y}`} x={x} y={y} width="1" height="1" />
    ));

interface LogoProps {
    size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 32 }) => (
    <svg
        className="logo-mark"
        viewBox={`0 0 ${GRID} ${GRID}`}
        width={size}
        height={size}
        shapeRendering="crispEdges"
        aria-hidden="true"
    >
        <g className="logo-bracket">{pixels(BRACKETS, 'b')}</g>
        <g className="logo-glyph">{pixels(MONOGRAM, 'm')}</g>
        <g className="logo-cursor">{pixels(CURSOR, 'c')}</g>
    </svg>
);

export default Logo;
