import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import BackButton from '../components/BackButton';
import { resolveAsset } from '../utils/paths';

// The envelope graphics were exported as centered 1920x1080 images.
// We use a fixed wrapper exactly where the envelope should appear on screen,
// and scale the `img` inside it so the actual envelope visual fills the container.
const projects = [
  {
    id: 'lenskart',
    to: '/projects/lenskart',
    alt: 'Lenskart',
    icon: resolveAsset('assets/lenskart folder icon.png'),
    // Nudge up and scale up slightly
    style: { top: '55%', left: '15%', width: '16%', height: '30%' },
    imgScale: 5.5,
  },
  {
    id: 'candle-bar',
    to: '/projects/candle-bar',
    alt: 'The Candle Bar',
    icon: resolveAsset('assets/the candle bar folder icon.png'),
    // Nudge down and scale down slightly
    style: { top: '55%', left: '33%', width: '16%', height: '24.5%' },
    imgScale: 5.5,
  },
  {
    id: 'newme',
    to: '/projects/newme',
    alt: 'NewMe',
    icon: resolveAsset('assets/new me folder icon.png'),
    // Baseline
    style: { top: '55%', left: '56%', width: '16%', height: '24%' },
    imgScale: 5.5,
  },
  {
    id: 'bedazzle',
    to: '/bedazzle-cover',
    alt: 'Bedazzle',
    icon: resolveAsset('assets/bedazzle folder icon.png'),
    // Nudge moderately down to align with baseline
    style: { top: '55%', left: '73%', width: '16%', height: '38%' },
    imgScale: 5.5,
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const [bgLoaded, setBgLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setBgLoaded(true);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.0, ease: 'easeInOut' }}
      className="absolute inset-0 w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div
        className="relative"
        style={{ aspectRatio: '16/9', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
      >
        <img
          ref={imgRef}
          src={resolveAsset('assets/2_2.png')}
          alt="background"
          onLoad={() => setBgLoaded(true)}
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
        />

        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: bgLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <BackButton to="/main" />

          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.to}
              className="absolute block z-20 cursor-pointer flex items-center justify-center"
              style={project.style}
              aria-label={project.alt}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.img
                src={project.icon}
                alt={project.alt}
                className="w-full h-full object-contain pointer-events-none drop-shadow-xl"
                initial={{ scale: project.imgScale, filter: 'brightness(1)' }}
                animate={{
                  scale: hovered === project.id ? project.imgScale * 1.05 : project.imgScale,
                  filter: hovered === project.id ? 'brightness(1.15)' : 'brightness(1)',
                }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
