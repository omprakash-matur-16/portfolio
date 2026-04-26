import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMobile from '../utils/useMobile';

export default function ImageBackground({ imageSrc, children, animatedBg = false, fullScreenChildren }) {
  const [bgLoaded, setBgLoaded] = useState(false);
  const isMobile = useMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
      className={`absolute inset-0 w-full ${isMobile ? 'h-[100dvh] overflow-y-auto' : 'h-screen overflow-hidden'} bg-black flex ${isMobile ? 'items-start' : 'items-center'} justify-center`}
    >
      {fullScreenChildren}
      
      <div 
        className={`relative aspect-[16/9] ${isMobile ? 'w-full h-auto' : 'h-full max-w-full'}`}
        style={isMobile ? { flexShrink: 0 } : {}}
      >
        <motion.img
          src={imageSrc}
          alt="background"
          onLoad={() => setBgLoaded(true)}
          className="w-full h-full object-fill pointer-events-none select-none"
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
