import { useEffect, useRef } from 'react';

interface DNACanvasProps {
  className?: string;
}

export default function DNACanvas({ className = '' }: DNACanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Animation state
    let animationTime = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // DNA Configuration
    const config = {
      speed: 0.02, // Animation speed
      amplitude: 40, // Wave height
      frequency: 0.008, // Wave frequency
      pointSize: 2, // Dot size
      lineWidth: 1.5, // Line thickness
      spacing: 8, // Distance between points
      phaseOffset: Math.PI / 2, // Phase difference between strands
      verticalOffset: 60, // Vertical separation between strands
      connectorFrequency: 20, // How often to draw connectors
      amplitudeOscillation: 0.3, // Living oscillation effect
    };

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);

    // Gradient creation for DNA strands
    const createGradient = (x1: number, y1: number, x2: number, y2: number, colors: string[]) => {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(0.5, colors[1]);
      gradient.addColorStop(1, colors[2]);
      return gradient;
    };

    // Calculate wave position
    const getWaveY = (x: number, time: number, strand: number) => {
      const centerY = height / 2;
      const phaseShift = strand * config.phaseOffset;
      const timeOffset = time * config.speed;
      
      // Living amplitude oscillation
      const amplitudeVariation = Math.sin(time * config.amplitudeOscillation) * 5;
      const currentAmplitude = config.amplitude + amplitudeVariation;
      
      const waveY = centerY + 
        Math.sin((x + timeOffset) * config.frequency + phaseShift) * currentAmplitude +
        (strand === 0 ? -config.verticalOffset / 2 : config.verticalOffset / 2);
      
      return waveY;
    };

    // Draw DNA strand
    const drawStrand = (strand: number, color: string[]) => {
      const gradient = createGradient(0, 0, width, 0, color);
      ctx.strokeStyle = gradient;
      ctx.fillStyle = gradient;
      ctx.lineWidth = config.lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Calculate points extending beyond viewport for infinite effect
      const startX = -config.spacing * 10;
      const endX = width + config.spacing * 10;
      const points: { x: number; y: number }[] = [];

      // Generate points for the strand
      for (let x = startX; x < endX; x += config.spacing) {
        const y = getWaveY(x, animationTime, strand);
        points.push({ x, y });
      }

      // Draw connected line
      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        // Use quadratic curves for smooth connections
        for (let i = 1; i < points.length - 1; i++) {
          const cpx = (points[i].x + points[i + 1].x) / 2;
          const cpy = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, cpx, cpy);
        }
        ctx.stroke();
      }

      // Draw individual dots for extra effect
      points.forEach(point => {
        if (point.x >= 0 && point.x <= width) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, config.pointSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      return points;
    };

    // Draw connectors between strands
    const drawConnectors = (strand1Points: { x: number; y: number }[], strand2Points: { x: number; y: number }[]) => {
      const connectorGradient = createGradient(0, 0, 0, height, [
        'rgba(59, 130, 246, 0.1)',
        'rgba(34, 197, 94, 0.2)',
        'rgba(59, 130, 246, 0.1)'
      ]);
      
      ctx.strokeStyle = connectorGradient;
      ctx.lineWidth = 1;
      
      const minLength = Math.min(strand1Points.length, strand2Points.length);
      
      for (let i = 0; i < minLength; i += config.connectorFrequency) {
        const p1 = strand1Points[i];
        const p2 = strand2Points[i];
        
        if (p1.x >= 0 && p1.x <= width) {
          // Add slight curve to connectors
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          const curveOffset = Math.sin((p1.x + animationTime * 0.1) * 0.02) * 3;
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.quadraticCurveTo(midX + curveOffset, midY, p2.x, p2.y);
          ctx.stroke();
        }
      }
    };

    // Main animation loop
    const animate = () => {
      // Clear canvas with slight transparency for trail effect
      ctx.fillStyle = 'rgba(245, 243, 235, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
      // Draw both DNA strands
      const strand1Points = drawStrand(0, [
        'rgba(59, 130, 246, 0.8)',
        'rgba(34, 197, 94, 0.9)',
        'rgba(59, 130, 246, 0.7)'
      ]);
      
      const strand2Points = drawStrand(1, [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.9)',
        'rgba(34, 197, 94, 0.7)'
      ]);

      // Draw connectors between strands
      drawConnectors(strand1Points, strand2Points);
      
      // Increment time for continuous animation
      animationTime += 1;
      
      // Request next frame
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.4,
        mixBlendMode: 'multiply'
      }}
    />
  );
}