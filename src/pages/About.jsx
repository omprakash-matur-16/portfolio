import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';



export default function About() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-full aspect-[16/9] max-w-full flex items-center justify-center">

        {/* Background Video containing the layout */}
        <video
          src="/portfolio/assets/about_me.mp4"
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />

        {/* Back Button */}
        <BackButton to="/main" />

        {/* Conveyor Belt (Top) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap z-20 pointer-events-none">
          <div style={{ animation: 'scrollBelt 12s linear infinite' }} className="flex w-[200%] origin-left">
            <img src="/portfolio/assets/conveyor belt.png" className="w-1/2 object-cover" alt="" />
            <img src="/portfolio/assets/conveyor belt.png" className="w-1/2 object-cover" alt="" />
          </div>
        </div>



      </div>
    </motion.div>
  );
}
