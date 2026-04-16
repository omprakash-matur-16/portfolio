import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { resolveAsset } from '../utils/paths';

const folders = [
  {
    id: 'projects',
    to: '/projects',
    alt: 'My Projects',
    icon: resolveAsset('assets/my projects folder icon.png'),
    // Reference Image X~15%, Y~38%
    style: { top: '38%', left: '15%', width: '18%', height: '26%' },
    imgScale: 4.8,
  },
  {
    id: 'journey',
    to: '/journey',
    alt: 'My Journey',
    icon: resolveAsset('assets/my journey folder icon.png'),
    // Reference Image X~34%, Y~38%
    style: { top: '33%', left: '29%', width: '15%', height: '24%' },
    imgScale: 4.0,
  },
  {
    id: 'about',
    to: '/about',
    alt: 'About Me',
    icon: resolveAsset('assets/about me folder icon.png'),
    // Reference Image X~7%, Y~62%
    style: { top: '62%', left: '5%', width: '16%', height: '22%' },
    imgScale: 4.0,
  },
  {
    id: 'contact',
    to: '/contact',
    alt: 'Contact Me',
    icon: resolveAsset('assets/contact me folder icon.png'),
    // Reference Image X~47%, Y~55%
    style: { top: '55%', left: '47%', width: '16%', height: '24%' },
    imgScale: 4.3,
  },
];

export default function MainDashboard() {
  const [hovered, setHovered] = useState(null);
  const [bgLoaded, setBgLoaded] = useState(false);

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
          src={resolveAsset('assets/2.png')}
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
          {folders.map((folder) => (
            <Link
              key={folder.id}
              to={folder.to}
              className="absolute block z-20 cursor-pointer flex items-center justify-center"
              style={folder.style}
              aria-label={folder.alt}
              onMouseEnter={() => setHovered(folder.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.img
                src={folder.icon}
                alt={folder.alt}
                className="w-full h-full object-contain pointer-events-none drop-shadow-xl"
                initial={{ scale: folder.imgScale, filter: 'brightness(1)' }}
                animate={{
                  scale: hovered === folder.id ? folder.imgScale * 1.08 : folder.imgScale,
                  filter: hovered === folder.id ? 'brightness(1.15)' : 'brightness(1)',
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
