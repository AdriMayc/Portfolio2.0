import React, { useEffect, useRef } from "react";

const RotatedGridBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsPointerInteraction = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const shouldAnimate = !reducedMotion;
    const cellSize = 48;
    const scale = 2.2;
    const rotation = -Math.PI / 4;
    const glowRadius = 110;
    const mouse = { x: -999, y: -999, smoothX: -999, smoothY: -999, active: 0 };
    let particles = [];
    let width = 0;
    let height = 0;
    let deviceScale = 1;
    let animationFrame;
    let previousTime = performance.now();
    const fixedMobileHeight = window.innerHeight;

    const color = theme === "light" ? "71,85,105" : "148,163,184";
    const effectOpacity = 0.6;
    const toGridCoordinates = (x, y) => {
      const dx = x - width / 2;
      const dy = y - height / 2;
      const diagonal = Math.SQRT1_2;
      return [
        width / 2 + ((dx - dy) * diagonal) / scale,
        height / 2 + ((dx + dy) * diagonal) / scale,
      ];
    };

    const createParticle = () => {
      let i;
      let j;
      do {
        i = Math.round((width / 2 + (Math.random() - 0.5) * 640) / cellSize);
        j = Math.round((height / 2 + (Math.random() - 0.5) * 640) / cellSize);
      } while (Math.hypot(i * cellSize - width / 2, j * cellSize - height / 2) > 330);

      const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]][Math.floor(Math.random() * 4)];
      return {
        i,
        j,
        dx: direction[0],
        dy: direction[1],
        progress: Math.random(),
        speed: 0.25 + Math.random() * 0.2,
        history: [],
      };
    };

    const resize = () => {
      deviceScale = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = supportsPointerInteraction ? window.innerHeight : fixedMobileHeight;
      canvas.width = width * deviceScale;
      canvas.height = height * deviceScale;
      particles = Array.from({ length: width < 600 ? 5 : 9 }, createParticle);
    };

    const draw = (now) => {
      const delta = Math.min((now - previousTime) / 1000 || 0, 0.05);
      previousTime = now;
      if (supportsPointerInteraction) {
        mouse.active += ((mouse.x > -900 ? 1 : 0) - mouse.active) * 0.08;
        mouse.smoothX += (mouse.x - mouse.smoothX) * 0.14;
        mouse.smoothY += (mouse.y - mouse.smoothY) * 0.14;
      }

      context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
      context.clearRect(0, 0, width, height);

      if (mouse.active > 0.01) {
        const glow = context.createRadialGradient(
          mouse.smoothX,
          mouse.smoothY,
          0,
          mouse.smoothX,
          mouse.smoothY,
          300,
        );
        glow.addColorStop(0, `rgba(${color},${0.1 * mouse.active * effectOpacity})`);
        glow.addColorStop(1, `rgba(${color},0)`);
        context.fillStyle = glow;
        context.fillRect(mouse.smoothX - 300, mouse.smoothY - 300, 600, 600);
      }

      context.translate(width / 2, height / 2);
      context.rotate(rotation);
      context.scale(scale, scale);
      context.translate(-width / 2, -height / 2);
      context.lineCap = "round";
      context.lineWidth = 1 / scale;
      context.strokeStyle = theme === "light"
        ? "rgba(200, 200, 200, 0.3)"
        : "rgba(220, 220, 220, 0.05)";

      const firstGridX = Math.floor(-width / cellSize) * cellSize;
      const firstGridY = Math.floor(-height / cellSize) * cellSize;

      for (let x = firstGridX; x <= width * 2; x += cellSize) {
        context.beginPath();
        context.moveTo(x, -height);
        context.lineTo(x, height * 2);
        context.stroke();
      }
      for (let y = firstGridY; y <= height * 2; y += cellSize) {
        context.beginPath();
        context.moveTo(-width, y);
        context.lineTo(width * 2, y);
        context.stroke();
      }

      const [gridX, gridY] = toGridCoordinates(mouse.smoothX, mouse.smoothY);
      const startX = Math.floor((width / 2 - 360) / cellSize);
      const endX = Math.ceil((width / 2 + 360) / cellSize);
      const startY = Math.floor((height / 2 - 360) / cellSize);
      const endY = Math.ceil((height / 2 + 360) / cellSize);

      if (mouse.active > 0.02) {
        context.lineWidth = 0.8;
        for (let index = Math.floor((gridX - glowRadius) / cellSize); index <= Math.ceil((gridX + glowRadius) / cellSize); index += 1) {
          const x = index * cellSize;
          const intensity = 1 - Math.abs(x - gridX) / glowRadius;
          if (intensity <= 0) continue;
          const halfHeight = Math.sqrt(glowRadius ** 2 - (x - gridX) ** 2);
          const lineGlow = context.createLinearGradient(0, gridY - halfHeight, 0, gridY + halfHeight);
          lineGlow.addColorStop(0, `rgba(${color},0)`);
          lineGlow.addColorStop(0.5, `rgba(${color},${intensity * 0.6 * mouse.active * effectOpacity})`);
          lineGlow.addColorStop(1, `rgba(${color},0)`);
          context.strokeStyle = lineGlow;
          context.beginPath();
          context.moveTo(x, gridY - halfHeight);
          context.lineTo(x, gridY + halfHeight);
          context.stroke();
        }
        for (let index = Math.floor((gridY - glowRadius) / cellSize); index <= Math.ceil((gridY + glowRadius) / cellSize); index += 1) {
          const y = index * cellSize;
          const intensity = 1 - Math.abs(y - gridY) / glowRadius;
          if (intensity <= 0) continue;
          const halfWidth = Math.sqrt(glowRadius ** 2 - (y - gridY) ** 2);
          const lineGlow = context.createLinearGradient(gridX - halfWidth, 0, gridX + halfWidth, 0);
          lineGlow.addColorStop(0, `rgba(${color},0)`);
          lineGlow.addColorStop(0.5, `rgba(${color},${intensity * 0.6 * mouse.active * effectOpacity})`);
          lineGlow.addColorStop(1, `rgba(${color},0)`);
          context.strokeStyle = lineGlow;
          context.beginPath();
          context.moveTo(gridX - halfWidth, y);
          context.lineTo(gridX + halfWidth, y);
          context.stroke();
        }
      }

      for (let i = startX; i <= endX; i += 1) {
        for (let j = startY; j <= endY; j += 1) {
          const x = i * cellSize;
          const y = j * cellSize;
          let intensity = 0;
          const distance = Math.hypot(x - gridX, y - gridY);
          if (mouse.active > 0.02 && distance < glowRadius) {
            intensity = (1 - distance / glowRadius) ** 2 * mouse.active;
          }
          if (intensity > 0.03) {
            context.fillStyle = `rgba(${color},${Math.min(0.9, (0.15 + intensity * 0.8) * effectOpacity)})`;
            context.beginPath();
            context.arc(x, y, 0.9 + intensity * 2.4, 0, Math.PI * 2);
            context.fill();
          }
        }
      }

      for (const particle of particles) {
        particle.progress += particle.speed * delta;
        while (particle.progress >= 1) {
          particle.progress -= 1;
          particle.i += particle.dx;
          particle.j += particle.dy;
          if (Math.random() > 0.62) {
            const sign = Math.random() < 0.5 ? 1 : -1;
            [particle.dx, particle.dy] = [-particle.dy * sign, particle.dx * sign];
          }
          if (Math.hypot(particle.i * cellSize - width / 2, particle.j * cellSize - height / 2) > 340) {
            Object.assign(particle, createParticle());
            break;
          }
        }
        const x = (particle.i + particle.dx * particle.progress) * cellSize;
        const y = (particle.j + particle.dy * particle.progress) * cellSize;
        const lastPoint = particle.history[particle.history.length - 1];
        if (!lastPoint || Math.hypot(x - lastPoint[0], y - lastPoint[1]) > 2.5) {
          particle.history.push([x, y]);
          if (particle.history.length > 16) particle.history.shift();
        }
        context.lineWidth = 0.9;
        for (let index = 1; index < particle.history.length; index += 1) {
          context.strokeStyle = `rgba(${color},${(index / particle.history.length) * 0.5 * effectOpacity})`;
          context.beginPath();
          context.moveTo(...particle.history[index - 1]);
          context.lineTo(...particle.history[index]);
          context.stroke();
        }
        context.fillStyle = `rgba(${color},${0.5 * effectOpacity})`;
        context.beginPath();
        context.arc(x, y, 1.5, 0, Math.PI * 2);
        context.fill();
      }

      if (shouldAnimate) animationFrame = requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
    };
    const handlePointerLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };
    resize();
    if (supportsPointerInteraction) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("pointerleave", handlePointerLeave);
    }
    if (supportsPointerInteraction) {
      window.addEventListener("resize", resize);
    }
    draw(performance.now());
    if (shouldAnimate) animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      if (supportsPointerInteraction) {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerleave", handlePointerLeave);
      }
      if (supportsPointerInteraction) {
        window.removeEventListener("resize", resize);
      }
    };
  }, [theme]);

  const opacity = theme === "light" ? 1 : 0.1;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-[100svh] w-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(217,216,255,0.5), rgba(255,255,255,0))",
          opacity,
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
    </div>
  );
};

export default RotatedGridBackground;
