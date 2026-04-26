import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hotspot({ to, top, left, width, height, onClick, iconSrc, alt = "interactive icon" }) {
  const style = {
    top: typeof top === 'number' ? `${top}%` : top,
    left: typeof left === 'number' ? `${left}%` : left,
    width: typeof width === 'number' ? `${width}%` : width,
    height: typeof height === 'number' ? `${height}%` : height,
  };

  // If we have an actual image asset from the user, render it.
  // Otherwise, fallback to the transparent clickable area (for the back button which doesn't have an icon yet, though I will add one).
  const content = iconSrc ? (
    <motion.img 
      src={iconSrc} 
      alt={alt}
      className="w-full h-full object-contain drop-shadow-md"
      whileHover={{ scale: 1.08, filter: "brightness(1.1)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    />
  ) : (
    <div className="w-full h-full" />
  );

  const containerClasses = "absolute block z-10";

  if (onClick && !to) {
    return (
      <button 
        onClick={onClick}
        style={style}
        className={containerClasses}
        aria-label={alt}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      to={to}
      style={style}
      className={containerClasses}
      aria-label={`Navigate to ${to || alt}`}
    >
      {content}
    </Link>
  );
}
