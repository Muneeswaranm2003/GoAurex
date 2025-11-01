import { useEffect, useRef } from "react";

interface City {
  x: number;
  y: number;
  name: string;
}

const WorldMapAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Major cities coordinates (approximate positions on canvas)
    const cities: City[] = [
      { x: 0.15, y: 0.35, name: "New York" },
      { x: 0.25, y: 0.25, name: "London" },
      { x: 0.35, y: 0.3, name: "Paris" },
      { x: 0.45, y: 0.4, name: "Dubai" },
      { x: 0.55, y: 0.35, name: "Mumbai" },
      { x: 0.65, y: 0.3, name: "Singapore" },
      { x: 0.75, y: 0.25, name: "Tokyo" },
      { x: 0.8, y: 0.5, name: "Sydney" },
      { x: 0.2, y: 0.5, name: "São Paulo" },
      { x: 0.5, y: 0.55, name: "Johannesburg" },
      { x: 0.7, y: 0.4, name: "Hong Kong" },
      { x: 0.1, y: 0.3, name: "Los Angeles" },
    ];

    // Create connections between cities
    const connections: [number, number][] = [];
    for (let i = 0; i < cities.length; i++) {
      for (let j = i + 1; j < cities.length; j++) {
        if (Math.random() > 0.6) {
          connections.push([i, j]);
        }
      }
    }

    // Animation state
    let animationProgress = 0;
    const animationSpeed = 0.003;
    const pulseSpeed = 0.05;
    let pulsePhase = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw world map dots (grid pattern)
      ctx.fillStyle = "rgba(249, 115, 22, 0.4)";
      const dotSpacing = 30;
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          if (Math.random() > 0.5) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw connections with animation
      connections.forEach(([startIdx, endIdx], connIdx) => {
        const start = cities[startIdx];
        const end = cities[endIdx];
        
        const startX = start.x * canvas.width;
        const startY = start.y * canvas.height;
        const endX = end.x * canvas.width;
        const endY = end.y * canvas.height;

        // Calculate animation progress for this connection
        const connectionDelay = connIdx * 0.1;
        const localProgress = Math.max(0, Math.min(1, animationProgress - connectionDelay));

        if (localProgress > 0) {
          // Draw line
          const currentEndX = startX + (endX - startX) * localProgress;
          const currentEndY = startY + (endY - startY) * localProgress;

          ctx.strokeStyle = `rgba(249, 115, 22, ${0.5 + Math.sin(pulsePhase + connIdx) * 0.3})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(currentEndX, currentEndY);
          ctx.stroke();

          // Draw animated dot along the line
          if (localProgress === 1) {
            const dotProgress = (animationProgress * 3 + connIdx * 0.3) % 1;
            const dotX = startX + (endX - startX) * dotProgress;
            const dotY = startY + (endY - startY) * dotProgress;

            ctx.fillStyle = "rgba(249, 115, 22, 0.8)";
            ctx.beginPath();
            ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
            ctx.fill();

            // Glow effect
            ctx.fillStyle = "rgba(249, 115, 22, 0.3)";
            ctx.beginPath();
            ctx.arc(dotX, dotY, 8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Draw city nodes
      cities.forEach((city, idx) => {
        const x = city.x * canvas.width;
        const y = city.y * canvas.height;
        const pulse = Math.sin(pulsePhase + idx * 0.5) * 0.3 + 0.7;

        // Outer glow
        ctx.fillStyle = `rgba(249, 115, 22, ${0.2 * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, 12 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Inner dot
        ctx.fillStyle = `rgba(249, 115, 22, ${0.9 * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = "rgba(253, 186, 116, 1)";
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update animation
      animationProgress += animationSpeed;
      if (animationProgress > 2) {
        animationProgress = 0;
      }
      pulsePhase += pulseSpeed;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
};

export default WorldMapAnimation;
