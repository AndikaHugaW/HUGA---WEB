"use client";

import { useEffect, useRef } from "react";

export default function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      time += 0.002;
      const width = canvas.width;
      const height = canvas.height;

      // Create gradient
      const gradient1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time) * 100,
        height * 0.3 + Math.cos(time) * 100,
        0,
        width * 0.3 + Math.sin(time) * 100,
        height * 0.3 + Math.cos(time) * 100,
        width * 0.8
      );
      gradient1.addColorStop(0, "rgba(138, 43, 226, 0.15)");
      gradient1.addColorStop(1, "rgba(138, 43, 226, 0)");

      const gradient2 = ctx.createRadialGradient(
        width * 0.7 + Math.cos(time * 1.2) * 150,
        height * 0.7 + Math.sin(time * 1.2) * 150,
        0,
        width * 0.7 + Math.cos(time * 1.2) * 150,
        height * 0.7 + Math.sin(time * 1.2) * 150,
        width * 0.9
      );
      gradient2.addColorStop(0, "rgba(0, 191, 255, 0.12)");
      gradient2.addColorStop(1, "rgba(0, 191, 255, 0)");

      const gradient3 = ctx.createRadialGradient(
        width * 0.5 + Math.sin(time * 0.8) * 80,
        height * 0.5 + Math.cos(time * 0.8) * 80,
        0,
        width * 0.5 + Math.sin(time * 0.8) * 80,
        height * 0.5 + Math.cos(time * 0.8) * 80,
        width * 0.6
      );
      gradient3.addColorStop(0, "rgba(255, 20, 147, 0.1)");
      gradient3.addColorStop(1, "rgba(255, 20, 147, 0)");

      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}

