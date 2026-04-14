import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ImageBackground({ imageSrc, children }) {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: bgLoaded ? 1 : 0, y: bgLoaded ? 0 : 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative h-full aspect-[16/9] max-w-full">
        <img
          src={imageSrc}
          alt="background"
          onLoad={() => setBgLoaded(true)}
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
        />
        
        {/* Absolute Hotspots container overlay */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: bgLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
