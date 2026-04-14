import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ImageBackground({ imageSrc, children, animatedBg = false }) {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative h-full aspect-[16/9] max-w-full">
        <motion.img
          src={imageSrc}
          alt="background"
          onLoad={() => setBgLoaded(true)}
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
          animate={animatedBg ? { scale: [1, 1.04, 1] } : undefined}
          transition={animatedBg ? { repeat: Infinity, duration: 10, ease: "easeInOut" } : undefined}
        />
        
        {/* Absolute Hotspots container overlay */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: bgLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
