import { useEffect, useRef, useCallback } from 'react';

interface Pixel {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    color: string;
    size: number;
    speed: number;
    wobbleOffset: number;
    wobbleSpeed: number;
}

interface PixelPortraitProps {
    src: string;
    width?: number;
    height?: number;
    pixelSize?: number;
}

const PixelPortrait: React.FC<PixelPortraitProps> = ({
    src,
    width = 280,
    height = 320,
    pixelSize = 5,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pixelsRef = useRef<Pixel[]>([]);
    const animFrameRef = useRef<number>(0);
    const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
    const assembledRef = useRef(false);

    const initPixels = useCallback(
        (img: HTMLImageElement) => {
            const offscreen = document.createElement('canvas');
            offscreen.width = width;
            offscreen.height = height;
            const offCtx = offscreen.getContext('2d')!;

            // Draw image to fill canvas
            const scale = Math.max(width / img.width, height / img.height);
            const w = img.width * scale;
            const h = img.height * scale;
            offCtx.drawImage(img, (width - w) / 2, (height - h) / 2, w, h);

            const imageData = offCtx.getImageData(0, 0, width, height);
            const pixels: Pixel[] = [];

            for (let y = 0; y < height; y += pixelSize) {
                for (let x = 0; x < width; x += pixelSize) {
                    const i = (y * width + x) * 4;
                    const r = imageData.data[i];
                    const g = imageData.data[i + 1];
                    const b = imageData.data[i + 2];
                    const a = imageData.data[i + 3];

                    // Skip transparent pixels - increased threshold
                    if (a < 20) continue;

                    // Calculate luminance to skip dark background pixels if the image has a dark background
                    // Adjust these values based on the specific image if needed
                    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
                    if (luminance < 20) continue; // Skip very dark pixels

                    // Tint towards the green/cyan theme
                    const tintR = Math.round(r * 0.3 + 30);
                    const tintG = Math.round(g * 0.5 + 100);
                    const tintB = Math.round(b * 0.4 + 80);

                    const color = `rgba(${tintR}, ${tintG}, ${tintB}, ${(a / 255) * 0.8})`;

                    pixels.push({
                        x: Math.random() * width,
                        y: Math.random() * height, // Start from random positions on screen
                        targetX: x,
                        targetY: y,
                        color,
                        size: pixelSize, // Slightly larger pixels for fuller look
                        speed: 0.05 + Math.random() * 0.05, // Faster movement
                        wobbleOffset: Math.random() * Math.PI * 2,
                        wobbleSpeed: 1 + Math.random() * 2, // Faster wobble
                    });
                }
            }

            pixelsRef.current = pixels;
            assembledRef.current = false;
        },
        [width, height, pixelSize]
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d')!;
        // Set canvas size to match display size for sharpness
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        // Load the image
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            initPixels(img);
            animate();
        };
        img.src = src;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        function animate() {
            ctx.clearRect(0, 0, width, height);

            const time = Date.now() * 0.001;
            const mouse = mouseRef.current;
            let allAssembled = true;

            for (const p of pixelsRef.current) {
                // Base target position
                let tx = p.targetX;
                let ty = p.targetY;

                // Add "breathing" movement to the target itself so the whole shape feels alive
                tx += Math.sin(time * 0.5 + p.y * 0.01) * 2;
                ty += Math.cos(time * 0.5 + p.x * 0.01) * 2;

                // Move towards target
                const dx = tx - p.x;
                const dy = ty - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist > 0.5) {
                    p.x += dx * p.speed;
                    p.y += dy * p.speed;
                    allAssembled = false;
                } else {
                    p.x = tx;
                    p.y = ty;
                }

                // Mouse repulsion effect - stronger and wider
                const mdx = p.x - mouse.x;
                const mdy = p.y - mouse.y;
                const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                const repelRadius = 80;

                let drawX = p.x;
                let drawY = p.y;

                if (mDist < repelRadius && mDist > 0) {
                    const force = (repelRadius - mDist) / repelRadius;
                    const angle = Math.atan2(mdy, mdx);
                    const repelStrength = 40 * force;

                    drawX += Math.cos(angle) * repelStrength;
                    drawY += Math.sin(angle) * repelStrength;
                }

                // Individual pixel wobble
                drawX += Math.sin(time * p.wobbleSpeed + p.wobbleOffset) * 1;
                drawY += Math.cos(time * p.wobbleSpeed * 0.8 + p.wobbleOffset) * 1;

                ctx.fillStyle = p.color;
                ctx.fillRect(drawX, drawY, p.size, p.size);
            }

            if (allAssembled) assembledRef.current = true;

            animFrameRef.current = requestAnimationFrame(animate);
        }

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [src, width, height, pixelSize, initPixels]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="pixel-portrait-canvas"
        />
    );
};

export default PixelPortrait;
