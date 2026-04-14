import { motion } from 'framer-motion';

export default function ImageBackground({ imageSrc, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative h-full aspect-[16/9] max-w-full">
        <img
          src={imageSrc}
          alt="background"
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
        />
        
        {/* Absolute Hotspots container overlay */}
        <div className="absolute top-0 left-0 w-full h-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
