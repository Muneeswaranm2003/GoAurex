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

    // Draw person icon with better design
    const drawPersonIcon = (x: number, y: number, size: number, alpha: number, isGlowing: boolean = false) => {
      const headRadius = size * 0.35;
      const bodyWidth = size * 0.6;
      const bodyHeight = size * 0.7;
      
      if (isGlowing) {
        // Large outer glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 1.5);
        gradient.addColorStop(0, `rgba(249, 115, 22, ${alpha * 0.4})`);
        gradient.addColorStop(0.5, `rgba(249, 115, 22, ${alpha * 0.2})`);
        gradient.addColorStop(1, `rgba(249, 115, 22, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Head with glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(249, 115, 22, ${alpha})`;
      ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y - bodyHeight * 0.3, headRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Body (rounded rectangle shape)
      ctx.beginPath();
      ctx.ellipse(x, y + bodyHeight * 0.15, bodyWidth * 0.4, bodyHeight * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Arms (small circles on sides)
      ctx.beginPath();
      ctx.arc(x - bodyWidth * 0.45, y + bodyHeight * 0.1, headRadius * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + bodyWidth * 0.45, y + bodyHeight * 0.1, headRadius * 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 0;
      
      // Core highlight
      ctx.fillStyle = `rgba(253, 186, 116, ${alpha * 0.8})`;
      ctx.beginPath();
      ctx.arc(x, y - bodyHeight * 0.3, headRadius * 0.4, 0, Math.PI * 2);
      ctx.fill();
    };

    // Generate world map dots with highly detailed continent shapes
    const generateMapDots = (): MapDot[] => {
      const dots: MapDot[] = [];
      
      // Highly detailed continent regions for realistic world map
      const continents = [
        // NORTH AMERICA
        // Alaska
        { xStart: 0.06, xEnd: 0.12, yStart: 0.20, yEnd: 0.28, density: 0.6 },
        // Canada - West
        { xStart: 0.08, xEnd: 0.16, yStart: 0.24, yEnd: 0.32, density: 0.7 },
        // Canada - Central
        { xStart: 0.14, xEnd: 0.20, yStart: 0.26, yEnd: 0.33, density: 0.7 },
        // Canada - East
        { xStart: 0.18, xEnd: 0.22, yStart: 0.28, yEnd: 0.34, density: 0.7 },
        // USA - West Coast
        { xStart: 0.08, xEnd: 0.13, yStart: 0.32, yEnd: 0.40, density: 0.8 },
        // USA - Central
        { xStart: 0.12, xEnd: 0.18, yStart: 0.33, yEnd: 0.40, density: 0.8 },
        // USA - East Coast
        { xStart: 0.17, xEnd: 0.21, yStart: 0.34, yEnd: 0.40, density: 0.8 },
        // Mexico
        { xStart: 0.11, xEnd: 0.18, yStart: 0.40, yEnd: 0.45, density: 0.75 },
        // Central America
        { xStart: 0.14, xEnd: 0.18, yStart: 0.44, yEnd: 0.48, density: 0.5 },
        
        // SOUTH AMERICA
        // Colombia/Venezuela
        { xStart: 0.17, xEnd: 0.22, yStart: 0.47, yEnd: 0.52, density: 0.7 },
        // Brazil - North
        { xStart: 0.19, xEnd: 0.26, yStart: 0.50, yEnd: 0.58, density: 0.85 },
        // Brazil - Central/East
        { xStart: 0.22, xEnd: 0.28, yStart: 0.56, yEnd: 0.66, density: 0.85 },
        // Brazil - South
        { xStart: 0.21, xEnd: 0.26, yStart: 0.64, yEnd: 0.70, density: 0.8 },
        // Peru/Bolivia
        { xStart: 0.18, xEnd: 0.22, yStart: 0.54, yEnd: 0.64, density: 0.7 },
        // Argentina/Chile
        { xStart: 0.19, xEnd: 0.24, yStart: 0.68, yEnd: 0.78, density: 0.75 },
        
        // EUROPE
        // Scandinavia
        { xStart: 0.46, xEnd: 0.52, yStart: 0.18, yEnd: 0.26, density: 0.7 },
        // British Isles
        { xStart: 0.43, xEnd: 0.46, yStart: 0.24, yEnd: 0.28, density: 0.7 },
        // Western Europe
        { xStart: 0.44, xEnd: 0.49, yStart: 0.26, yEnd: 0.32, density: 0.85 },
        // Central Europe
        { xStart: 0.48, xEnd: 0.52, yStart: 0.26, yEnd: 0.32, density: 0.85 },
        // Eastern Europe
        { xStart: 0.50, xEnd: 0.56, yStart: 0.24, yEnd: 0.32, density: 0.8 },
        // Southern Europe
        { xStart: 0.46, xEnd: 0.52, yStart: 0.31, yEnd: 0.35, density: 0.75 },
        
        // AFRICA
        // North Africa - Morocco/Algeria
        { xStart: 0.43, xEnd: 0.50, yStart: 0.34, yEnd: 0.40, density: 0.65 },
        // North Africa - Libya/Egypt
        { xStart: 0.48, xEnd: 0.54, yStart: 0.34, yEnd: 0.42, density: 0.65 },
        // West Africa
        { xStart: 0.42, xEnd: 0.48, yStart: 0.40, yEnd: 0.50, density: 0.75 },
        // Central Africa
        { xStart: 0.46, xEnd: 0.54, yStart: 0.44, yEnd: 0.56, density: 0.8 },
        // East Africa
        { xStart: 0.52, xEnd: 0.57, yStart: 0.42, yEnd: 0.58, density: 0.75 },
        // Southern Africa
        { xStart: 0.46, xEnd: 0.54, yStart: 0.56, yEnd: 0.68, density: 0.75 },
        // Madagascar
        { xStart: 0.56, xEnd: 0.58, yStart: 0.58, yEnd: 0.64, density: 0.5 },
        
        // MIDDLE EAST
        // Arabian Peninsula
        { xStart: 0.52, xEnd: 0.58, yStart: 0.36, yEnd: 0.44, density: 0.7 },
        // Turkey/Levant
        { xStart: 0.52, xEnd: 0.56, yStart: 0.32, yEnd: 0.36, density: 0.75 },
        
        // ASIA
        // Russia - Western
        { xStart: 0.54, xEnd: 0.64, yStart: 0.20, yEnd: 0.30, density: 0.7 },
        // Russia - Central
        { xStart: 0.62, xEnd: 0.72, yStart: 0.18, yEnd: 0.28, density: 0.65 },
        // Russia - Eastern
        { xStart: 0.70, xEnd: 0.82, yStart: 0.20, yEnd: 0.30, density: 0.65 },
        // Central Asia
        { xStart: 0.58, xEnd: 0.66, yStart: 0.30, yEnd: 0.38, density: 0.7 },
        // India
        { xStart: 0.62, xEnd: 0.68, yStart: 0.38, yEnd: 0.48, density: 0.85 },
        // China - West
        { xStart: 0.66, xEnd: 0.72, yStart: 0.32, yEnd: 0.42, density: 0.8 },
        // China - East
        { xStart: 0.71, xEnd: 0.76, yStart: 0.30, yEnd: 0.42, density: 0.85 },
        // Southeast Asia - Mainland
        { xStart: 0.68, xEnd: 0.72, yStart: 0.42, yEnd: 0.48, density: 0.8 },
        // Southeast Asia - Islands (Indonesia)
        { xStart: 0.70, xEnd: 0.78, yStart: 0.48, yEnd: 0.52, density: 0.7 },
        // Philippines
        { xStart: 0.75, xEnd: 0.77, yStart: 0.42, yEnd: 0.48, density: 0.6 },
        // Japan
        { xStart: 0.78, xEnd: 0.80, yStart: 0.30, yEnd: 0.38, density: 0.75 },
        // Korea
        { xStart: 0.76, xEnd: 0.78, yStart: 0.34, yEnd: 0.38, density: 0.7 },
        
        // OCEANIA
        // Australia - West
        { xStart: 0.72, xEnd: 0.78, yStart: 0.58, yEnd: 0.68, density: 0.75 },
        // Australia - East
        { xStart: 0.76, xEnd: 0.82, yStart: 0.60, yEnd: 0.70, density: 0.8 },
        // New Zealand
        { xStart: 0.84, xEnd: 0.86, yStart: 0.68, yEnd: 0.74, density: 0.6 },
      ];

      continents.forEach(continent => {
        const area = (continent.xEnd - continent.xStart) * (continent.yEnd - continent.yStart);
        const dotsInContinent = Math.floor(area * 15000 * (continent.density || 1));
        
        for (let i = 0; i < dotsInContinent; i++) {
          const x = continent.xStart + Math.random() * (continent.xEnd - continent.xStart);
          const y = continent.yStart + Math.random() * (continent.yEnd - continent.yStart);
          dots.push({
            x,
            y,
            brightness: Math.random() * 0.3 + 0.7
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

      // Draw world map dots with orange/warm glow
      mapDots.forEach(dot => {
        const x = dot.x * canvas.width;
        const y = dot.y * canvas.height;
        const alpha = dot.brightness * (0.5 + Math.sin(pulsePhase + dot.x * 10) * 0.3);
        
        // Outer glow (orange)
        ctx.fillStyle = `rgba(249, 115, 22, ${alpha * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Core dot (brighter orange)
        ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;
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
          gradient.addColorStop(0, `rgba(249, 115, 22, ${0.6 + Math.sin(pulsePhase + connIdx) * 0.2})`);
          gradient.addColorStop(0.5, `rgba(249, 115, 22, ${0.8})`);
          gradient.addColorStop(1, `rgba(249, 115, 22, ${0.6 + Math.sin(pulsePhase + connIdx) * 0.2})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(249, 115, 22, 0.6)';
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

            drawPersonIcon(x, y, 10, 0.9, true);
          }
        }
      });

      // Draw city person icons
      cities.forEach((city, idx) => {
        const x = city.x * canvas.width;
        const y = city.y * canvas.height;
        const pulse = Math.sin(pulsePhase + idx * 0.5) * 0.3 + 0.7;

        // Large outer glow ring
        ctx.fillStyle = `rgba(249, 115, 22, ${0.15 * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, 18 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Medium glow ring
        ctx.fillStyle = `rgba(249, 115, 22, ${0.25 * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, 12 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Draw person icon at city location
        drawPersonIcon(x, y, 12, 0.95 * pulse, true);
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
