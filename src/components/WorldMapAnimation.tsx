import { useEffect, useRef } from "react";
import { Users } from "lucide-react";

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

    // Draw person icon
    const drawPersonIcon = (x: number, y: number, size: number, alpha: number, isGlowing: boolean = false) => {
      const headRadius = size * 0.3;
      const bodyHeight = size * 0.5;
      
      if (isGlowing) {
        // Outer glow
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y - bodyHeight / 2, headRadius * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Head
      ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y - bodyHeight / 2, headRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Body (circle for simplicity)
      ctx.beginPath();
      ctx.arc(x, y + bodyHeight / 4, headRadius * 1.2, 0, Math.PI * 2);
      ctx.fill();
    };

    // Generate world map dots (continent shapes with more detail)
    const generateMapDots = (): MapDot[] => {
      const dots: MapDot[] = [];
      
      // More detailed continent regions
      const continents = [
        // North America - West Coast
        { xStart: 0.08, xEnd: 0.14, yStart: 0.25, yEnd: 0.42 },
        // North America - East Coast
        { xStart: 0.14, xEnd: 0.22, yStart: 0.28, yEnd: 0.40 },
        // Central America
        { xStart: 0.16, xEnd: 0.20, yStart: 0.42, yEnd: 0.48 },
        // South America - North
        { xStart: 0.18, xEnd: 0.26, yStart: 0.48, yEnd: 0.60 },
        // South America - South
        { xStart: 0.20, xEnd: 0.26, yStart: 0.60, yEnd: 0.72 },
        // Europe - West
        { xStart: 0.42, xEnd: 0.48, yStart: 0.20, yEnd: 0.32 },
        // Europe - East
        { xStart: 0.48, xEnd: 0.54, yStart: 0.22, yEnd: 0.35 },
        // Africa - North
        { xStart: 0.44, xEnd: 0.54, yStart: 0.35, yEnd: 0.48 },
        // Africa - Central
        { xStart: 0.42, xEnd: 0.56, yStart: 0.48, yEnd: 0.62 },
        // Africa - South
        { xStart: 0.46, xEnd: 0.52, yStart: 0.62, yEnd: 0.70 },
        // Middle East
        { xStart: 0.52, xEnd: 0.60, yStart: 0.32, yEnd: 0.42 },
        // Russia/North Asia
        { xStart: 0.54, xEnd: 0.76, yStart: 0.18, yEnd: 0.32 },
        // Central Asia
        { xStart: 0.58, xEnd: 0.68, yStart: 0.30, yEnd: 0.40 },
        // South Asia
        { xStart: 0.60, xEnd: 0.68, yStart: 0.38, yEnd: 0.48 },
        // Southeast Asia
        { xStart: 0.68, xEnd: 0.74, yStart: 0.42, yEnd: 0.52 },
        // East Asia
        { xStart: 0.70, xEnd: 0.78, yStart: 0.28, yEnd: 0.42 },
        // Australia - West
        { xStart: 0.72, xEnd: 0.78, yStart: 0.58, yEnd: 0.68 },
        // Australia - East
        { xStart: 0.76, xEnd: 0.82, yStart: 0.60, yEnd: 0.70 },
      ];

      continents.forEach(continent => {
        const dotsInContinent = Math.floor(Math.random() * 80 + 120);
        for (let i = 0; i < dotsInContinent; i++) {
          const x = continent.xStart + Math.random() * (continent.xEnd - continent.xStart);
          const y = continent.yStart + Math.random() * (continent.yEnd - continent.yStart);
          dots.push({
            x,
            y,
            brightness: Math.random() * 0.4 + 0.6
          });
        }
      });

      return dots;
    };

    const mapDots = generateMapDots();

    // Major cities coordinates
    const cities: City[] = [
      { x: 0.12, y: 0.32, name: "Los Angeles" },
      { x: 0.18, y: 0.35, name: "New York" },
      { x: 0.23, y: 0.58, name: "São Paulo" },
      { x: 0.46, y: 0.26, name: "London" },
      { x: 0.48, y: 0.28, name: "Paris" },
      { x: 0.48, y: 0.62, name: "Johannesburg" },
      { x: 0.56, y: 0.36, name: "Dubai" },
      { x: 0.64, y: 0.42, name: "Mumbai" },
      { x: 0.70, y: 0.46, name: "Singapore" },
      { x: 0.74, y: 0.35, name: "Hong Kong" },
      { x: 0.76, y: 0.34, name: "Tokyo" },
      { x: 0.78, y: 0.64, name: "Sydney" },
    ];

    // Create connections between cities
    const connections: [number, number][] = [];
    for (let i = 0; i < cities.length; i++) {
      for (let j = i + 1; j < cities.length; j++) {
        if (Math.random() > 0.65) {
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

      // Draw world map dots with teal/green glow
      mapDots.forEach(dot => {
        const x = dot.x * canvas.width;
        const y = dot.y * canvas.height;
        const alpha = dot.brightness * (0.5 + Math.sin(pulsePhase + dot.x * 10) * 0.3);
        
        // Outer glow (teal)
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Core dot (brighter teal)
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections with curved lines
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
          // Calculate control points for curved line
          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;
          const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
          const curvature = distance * 0.2;
          
          // Perpendicular offset for curve
          const dx = endX - startX;
          const dy = endY - startY;
          const perpX = -dy / distance * curvature;
          const perpY = dx / distance * curvature;
          
          const controlX = midX + perpX;
          const controlY = midY + perpY;

          // Draw curved line with gradient
          const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
          gradient.addColorStop(0, `rgba(34, 211, 238, ${0.6 + Math.sin(pulsePhase + connIdx) * 0.2})`);
          gradient.addColorStop(0.5, `rgba(34, 211, 238, ${0.8})`);
          gradient.addColorStop(1, `rgba(34, 211, 238, ${0.6 + Math.sin(pulsePhase + connIdx) * 0.2})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(34, 211, 238, 0.6)';
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          
          // Draw partial curve based on animation progress
          const segments = 50;
          for (let i = 0; i <= segments * localProgress; i++) {
            const t = i / segments;
            const x = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * controlX + Math.pow(t, 2) * endX;
            const y = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * controlY + Math.pow(t, 2) * endY;
            ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Draw animated person icon along the curve
          if (localProgress === 1) {
            const dotProgress = (animationProgress * 2 + connIdx * 0.3) % 1;
            const t = dotProgress;
            const x = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * controlX + Math.pow(t, 2) * endX;
            const y = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * controlY + Math.pow(t, 2) * endY;

            drawPersonIcon(x, y, 8, 0.9, true);
          }
        }
      });

      // Draw city person icons
      cities.forEach((city, idx) => {
        const x = city.x * canvas.width;
        const y = city.y * canvas.height;
        const pulse = Math.sin(pulsePhase + idx * 0.5) * 0.3 + 0.7;

        // Large outer glow ring
        ctx.fillStyle = `rgba(34, 211, 238, ${0.15 * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, 18 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Medium glow ring
        ctx.fillStyle = `rgba(34, 211, 238, ${0.25 * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, 12 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Draw person icon at city location
        drawPersonIcon(x, y, 10, 0.95 * pulse, true);
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
      style={{ opacity: 0.95 }}
    />
  );
};

export default WorldMapAnimation;
