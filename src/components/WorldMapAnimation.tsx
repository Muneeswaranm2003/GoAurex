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

    // Generate world map dots (continent shapes) - more detailed continents
    const generateMapDots = (): MapDot[] => {
      const dots: MapDot[] = [];
      
      // Continent regions with more accurate shapes (approximate normalized coordinates)
      const continents = [
        // North America
        { xStart: 0.08, xEnd: 0.25, yStart: 0.15, yEnd: 0.45, density: 200 },
        // South America
        { xStart: 0.18, xEnd: 0.28, yStart: 0.48, yEnd: 0.75, density: 150 },
        // Europe
        { xStart: 0.43, xEnd: 0.52, yStart: 0.18, yEnd: 0.35, density: 120 },
        // Africa
        { xStart: 0.43, xEnd: 0.56, yStart: 0.35, yEnd: 0.72, density: 180 },
        // Asia
        { xStart: 0.52, xEnd: 0.80, yStart: 0.12, yEnd: 0.55, density: 300 },
        // Australia
        { xStart: 0.73, xEnd: 0.83, yStart: 0.58, yEnd: 0.72, density: 100 },
        // Middle East
        { xStart: 0.50, xEnd: 0.58, yStart: 0.30, yEnd: 0.40, density: 80 },
      ];

      continents.forEach(continent => {
        for (let i = 0; i < continent.density; i++) {
          // Create more defined edges with clustering
          const edgeFactor = Math.random();
          let x, y;
          
          if (edgeFactor > 0.3) {
            // Interior points
            x = continent.xStart + Math.random() * (continent.xEnd - continent.xStart);
            y = continent.yStart + Math.random() * (continent.yEnd - continent.yStart);
          } else {
            // Edge points for definition
            const side = Math.floor(Math.random() * 4);
            switch(side) {
              case 0: // top
                x = continent.xStart + Math.random() * (continent.xEnd - continent.xStart);
                y = continent.yStart;
                break;
              case 1: // right
                x = continent.xEnd;
                y = continent.yStart + Math.random() * (continent.yEnd - continent.yStart);
                break;
              case 2: // bottom
                x = continent.xStart + Math.random() * (continent.xEnd - continent.xStart);
                y = continent.yEnd;
                break;
              default: // left
                x = continent.xStart;
                y = continent.yStart + Math.random() * (continent.yEnd - continent.yStart);
            }
          }
          
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

    // Helper function to draw person icon
    const drawPerson = (x: number, y: number, size: number, alpha: number) => {
      ctx.save();
      
      // Glow effect
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(249, 115, 22, ${alpha * 0.5})`;
      
      // Head
      ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y - size * 0.4, size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Body
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.1);
      ctx.lineTo(x, y + size * 0.5);
      ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
      ctx.lineWidth = size * 0.2;
      ctx.lineCap = 'round';
      ctx.stroke();
      
      // Arms
      ctx.beginPath();
      ctx.moveTo(x - size * 0.4, y);
      ctx.lineTo(x + size * 0.4, y);
      ctx.stroke();
      
      // Legs
      ctx.beginPath();
      ctx.moveTo(x, y + size * 0.5);
      ctx.lineTo(x - size * 0.25, y + size * 0.9);
      ctx.moveTo(x, y + size * 0.5);
      ctx.lineTo(x + size * 0.25, y + size * 0.9);
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw world map with people icons
      mapDots.forEach(dot => {
        const x = dot.x * canvas.width;
        const y = dot.y * canvas.height;
        const alpha = dot.brightness * (0.5 + Math.sin(pulsePhase + dot.x * 10) * 0.3);
        const size = 4 + Math.sin(pulsePhase + dot.y * 10) * 1;
        
        drawPerson(x, y, size, alpha);
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

          // Gradient line
          const gradient = ctx.createLinearGradient(startX, startY, currentEndX, currentEndY);
          gradient.addColorStop(0, `rgba(249, 115, 22, ${0.6 + Math.sin(pulsePhase + connIdx) * 0.3})`);
          gradient.addColorStop(0.5, `rgba(253, 186, 116, ${0.8})`);
          gradient.addColorStop(1, `rgba(249, 115, 22, ${0.6 + Math.sin(pulsePhase + connIdx) * 0.3})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2.5;
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(249, 115, 22, 0.5)';
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(currentEndX, currentEndY);
          ctx.stroke();

          // Draw animated person icon along the line
          if (localProgress === 1) {
            const dotProgress = (animationProgress * 3 + connIdx * 0.3) % 1;
            const dotX = startX + (endX - startX) * dotProgress;
            const dotY = startY + (endY - startY) * dotProgress;

            // Moving person with glow
            ctx.save();
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'rgba(249, 115, 22, 0.8)';
            drawPerson(dotX, dotY, 6, 0.9);
            ctx.restore();
          }
        }
      });

      // Draw major city nodes with enhanced person icons
      cities.forEach((city, idx) => {
        const x = city.x * canvas.width;
        const y = city.y * canvas.height;
        const pulse = Math.sin(pulsePhase + idx * 0.5) * 0.2 + 0.8;

        // Outer glow ring
        ctx.save();
        ctx.strokeStyle = `rgba(249, 115, 22, ${0.3 * pulse})`;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(249, 115, 22, 0.6)';
        ctx.beginPath();
        ctx.arc(x, y, 15 * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Inner glow
        ctx.fillStyle = `rgba(249, 115, 22, ${0.15 * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, 10 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Draw larger person icon for cities
        drawPerson(x, y, 8 * pulse, 1);
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
