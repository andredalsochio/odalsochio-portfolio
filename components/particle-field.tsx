'use client';

import { useEffect, useRef, useState } from 'react';

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, frame = 0, time = 0, last = 0;
    let pointerX = 0, pointerY = 0;
    let seed = 42;
    const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const particles = Array.from({ length: 1500 }, (_, i) => ({
      radius: Math.sqrt(random()), angle: random() * Math.PI * 2,
      arm: i % 3, scatter: (random() - .5) * .6,
      depth: (random() - .5) * .3, size: random(),
    }));
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * ratio; canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const pointer = (event: PointerEvent) => {
      pointerX = (event.clientX / width - .5) * 25;
      pointerY = (event.clientY / height - .5) * 15;
    };
    const draw = (now: number) => {
      const still = paused || motion.matches;
      if (!still && !document.hidden) time += Math.min(now - last, 50) * .00006;
      last = now;
      ctx.clearRect(0, 0, width, height);
      const progress = still ? 0 : Math.min(window.scrollY / height, 2);
      const scale = Math.min(width, height) * (.57 + progress * .17);
      const cx = width * (width > 800 ? .70 : .55) - progress * width * .12;
      const cy = height * .49 - progress * height * .09;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, scale);
      glow.addColorStop(0, 'rgba(170,220,112,.10)');
      glow.addColorStop(.4, 'rgba(90,130,75,.04)');
      glow.addColorStop(1, 'rgba(10,16,12,0)');
      ctx.fillStyle = glow; ctx.fillRect(0, 0, width, height);
      const count = width < 600 ? 800 : particles.length;
      for (let i = 0; i < count; i++) {
        const p = particles[i];
        const angle = p.arm * Math.PI * 2 / 3 + p.radius * 7 + p.scatter + time + progress * .8;
        const r = p.radius * scale;
        const x = cx + Math.cos(angle) * r + (still ? 0 : pointerX * p.radius);
        const y = cy + Math.sin(angle) * r * (.78 - progress * .12) + p.depth * scale + (still ? 0 : pointerY * p.radius);
        const alpha = (.25 + p.size * .65) * (1 - progress * .25);
        ctx.fillStyle = i % 4 === 0 ? `rgba(192,243,106,${alpha})` : `rgba(226,239,215,${alpha})`;
        ctx.beginPath(); ctx.arc(x, y, .45 + p.size * 1.1, 0, Math.PI * 2); ctx.fill();
        if (p.size > .97) {
          ctx.fillStyle = `rgba(192,243,106,${alpha * .08})`;
          ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
        }
      }
      if (!still && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const restart = () => { cancelAnimationFrame(frame); last = performance.now(); frame = requestAnimationFrame(draw); };
    resize(); restart();
    window.addEventListener('resize', resize);
    window.addEventListener('resize', restart);
    window.addEventListener('pointermove', pointer, { passive: true });
    motion.addEventListener('change', restart);
    document.addEventListener('visibilitychange', restart);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', restart);
      window.removeEventListener('pointermove', pointer);
      motion.removeEventListener('change', restart);
      document.removeEventListener('visibilitychange', restart);
    };
  }, [paused]);

  return <><canvas ref={canvasRef} className="particle-field" aria-hidden="true" /><button className="motion-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? 'Retomar animação' : 'Pausar animação'}</button></>;
}
