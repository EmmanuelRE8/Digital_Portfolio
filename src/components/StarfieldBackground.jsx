import { useEffect, useRef } from 'react';

const STAR_COUNT = 300;
const GLOW_RADIUS = 100;
const COLORS = ['0, 255, 255', '0, 255, 0', '255, 0, 255']; // cyan, green, magenta

function createStars(width, height) {
  // Scale density down on small screens so mobile stays light
  const count = Math.round(
    Math.min(STAR_COUNT, Math.max(120, (STAR_COUNT * width * height) / (1920 * 1080)))
  );
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.4 + 0.3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    baseOpacity: Math.random() * 0.5 + 0.15,
    twinkleSpeed: Math.random() * 0.002 + 0.0005,
    twinkleOffset: Math.random() * Math.PI * 2,
    glow: 0,
  }));
}

export default function StarfieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -9999, y: -9999 };
    let stars = [];
    let width = 0;
    let height = 0;
    let frameId;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = createStars(width, height);
      if (reducedMotion) draw(0);
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        const dx = star.x - pointer.x;
        const dy = star.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const target = distance < GLOW_RADIUS ? 1 - distance / GLOW_RADIUS : 0;
        // Ease toward target so stars fade in/out smoothly
        star.glow += (target - star.glow) * 0.1;

        const twinkle = reducedMotion
          ? 0
          : Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.15;
        const opacity = Math.min(1, star.baseOpacity + twinkle + star.glow * 0.8);
        const radius = star.radius * (1 + star.glow * 1.5);

        if (star.glow > 0.05) {
          ctx.shadowBlur = 12 * star.glow;
          ctx.shadowColor = `rgba(${star.color}, ${star.glow})`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${opacity})`;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    }

    function loop(time) {
      draw(time);
      frameId = requestAnimationFrame(loop);
    }

    function onPointerMove(event) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (reducedMotion) draw(0);
    }

    function onPointerLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerleave', onPointerLeave);
    if (!reducedMotion) frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-bg" aria-hidden="true" />;
}
