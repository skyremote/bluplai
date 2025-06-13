import React, { useRef, useEffect } from 'react';
import './PressureText.css';

interface PressureTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  stiffness?: number;
  repelFactor?: number;
  radius?: number;
}

const PressureText: React.FC<PressureTextProps> = ({
  children,
  className = '',
  style = {},
  stiffness = 0.5,
  repelFactor = 0.8,
  radius = 80,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<{ el: HTMLSpanElement; x: number; y: number; dx: number; dy: number }[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const chars = Array.from(container.querySelectorAll<HTMLSpanElement>('.pressure-char'));
    charsRef.current = chars.map(el => ({ el, x: 0, y: 0, dx: 0, dy: 0 }));

    const updateMouse = { x: -1000, y: -1000 };
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      updateMouse.x = e.clientX - rect.left;
      updateMouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      updateMouse.x = -1000;
      updateMouse.y = -1000;
    };
    
    const animate = () => {
      charsRef.current.forEach(char => {
        const charRect = char.el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const charX = charRect.left - containerRect.left + charRect.width / 2;
        const charY = charRect.top - containerRect.top + charRect.height / 2;

        const distX = charX - updateMouse.x;
        const distY = charY - updateMouse.y;
        const dist = Math.hypot(distX, distY);

        let force = 0;
        let angle = 0;

        if (dist < radius) {
          force = (1 - (dist / radius)) * -repelFactor;
          angle = Math.atan2(distY, distX);
        }

        char.dx += (force * Math.cos(angle) - char.x) * stiffness;
        char.dy += (force * Math.sin(angle) - char.y) * stiffness;

        char.x += char.dx;
        char.y += char.dy;
        char.dx *= 0.9; // damping
        char.dy *= 0.9; // damping

        char.el.style.transform = `translate(${char.x}px, ${char.y}px)`;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [children, stiffness, repelFactor, radius]);

  return (
    <div ref={containerRef} className={`pressure-container ${className}`} style={style}>
      {children.split('').map((char, index) => (
        <span key={index} className="pressure-char">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default PressureText; 