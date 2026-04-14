import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a class to indicate JS is loaded, allowing CSS to hide default cursor
    document.documentElement.classList.add('js-loaded');

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOut = () => setIsVisible(false);
    const handleMouseOver = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor fixed w-8 h-8 pointer-events-none z-[9999]"
      style={{
        left: `${position.x - 12}px`,
        top: `${position.y - 12}px`,
        backgroundImage: "url('/assets/cursor-pointer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}
