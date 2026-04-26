import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrientationHint() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      // Show hint if in portrait and on a mobile device (touch-based)
      const isPortrait = window.innerHeight > window.innerWidth;
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 
                      ('ontouchstart' in window) || 
                      (navigator.maxTouchPoints > 0);
      setShowHint(isPortrait && isTouch);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  return (
    <AnimatePresence>
      {showHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center text-white p-8 text-center"
        >
          <motion.div
            animate={{ rotate: 90 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 1 }}
            className="mb-6"
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Rotate for the best experience</h2>
          <p className="text-white/60">This portfolio is designed to be viewed in landscape mode.</p>
          
          <button 
            onClick={() => setShowHint(false)}
            className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors"
          >
            Continue anyway
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
