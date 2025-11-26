
import React, { useEffect, useRef } from 'react';

const Snow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; size: number; speed: number; }[] = [];
    // Reduced count for bigger particles, but still enough to be chaotic
    const particleCount = 75;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Bigger 8-bit sizes: 4px to 10px squares
        size: Math.floor(Math.random() * 6) + 4,
        speed: Math.random() * 3 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'white';
      
      for (const p of particles) {
        // Draw squares for 8-bit feel
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
        
        p.y += p.speed;
        // Simple pixel drop, maybe slight jitter
        if (Math.random() > 0.9) {
            p.x += (Math.random() > 0.5 ? 2 : -2); 
        }

        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-10] opacity-80"
      aria-hidden="true"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};

export default Snow;
