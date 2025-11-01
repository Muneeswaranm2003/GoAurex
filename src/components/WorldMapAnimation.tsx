import { useEffect, useRef } from "react";

interface City {
  x: number;
  y: number;
  name: string;
}

interface MapDot {
  x: number;
  y: number;
  brightness: number;
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

    // Generate world map dots (continent shapes)
    const generateMapDots = (): MapDot[] => {
      const dots: MapDot[] = [];
      const density = 8;
      
      // Continent regions (approximate normalized coordinates)
      const continents = [
        // North America
        { xStart: 0.08, xEnd: 0.25, yStart: 0.2, yEnd: 0.45 },
        // South America
        { xStart: 0.18, xEnd: 0.28, yStart: 0.48, yEnd: 0.75 },
        // Europe
        { xStart: 0.42, xEnd: 0.52, yStart: 0.18, yEnd: 0.35 },
        // Africa
        { xStart: 0.42, xEnd: 0.55, yStart: 0.38, yEnd: 0.72 },
        // Asia
        { xStart: 0.52, xEnd: 0.78, yStart: 0.15, yEnd: 0.55 },
        // Australia
        { xStart: 0.72, xEnd: 0.82, yStart: 0.58, yEnd: 0.72 },
      ];

      continents.forEach(continent => {
        const dotsInContinent = Math.floor(Math.random() * 100 + 150);
        for (let i = 0; i < dotsInContinent; i++) {
          const x = continent.xStart + Math.random() * (continent.xEnd - continent.xStart);
          const y = continent.yStart + Math.random() * (continent.yEnd - continent.yStart);
          dots.push({
            x,
            y,
            brightness: Math.random() * 0.5 + 0.5
          });
        }
      });

      return dots;
    };

    const mapDots = generateMapDots();

    // Major cities coordinates (approximate positions on canvas)
    const cities: City[] = [
      { x: 0.15, y: 0.35, name: "New York" },
      { x: 0.25, y: 0.25, name: "London" },
      { x: 0.46, y: 0.28, name: "Paris" },
      { x: 0.52, y: 0.38, name: "Dubai" },
      { x: 0.62, y: 0.38, name: "Mumbai" },
      { x: 0.70, y: 0.42, name: "Singapore" },
      { x: 0.76, y: 0.32, name: "Tokyo" },
      { x: 0.78, y: 0.65, name: "Sydney" },
      { x: 0.23, y: 0.58, name: "São Paulo" },
      { x: 0.48, y: 0.62, name: "Johannesburg" },
      { x: 0.73, y: 0.38, name: "Hong Kong" },
      { x: 0.12, y: 0.32, name: "Los Angeles" },
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

      // Draw world map dots (continent shapes)
      mapDots.forEach(dot => {
        const x = dot.x * canvas.width;
        const y = dot.y * canvas.height;
        const alpha = dot.brightness * (0.6 + Math.sin(pulsePhase + dot.x * 10) * 0.2);
        
        // Glow effect
        ctx.fillStyle = `rgba(249, 115, 22, ${alpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core dot
        ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

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
