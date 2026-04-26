import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { resolveAsset } from '../utils/paths';
import useMobile from '../utils/useMobile';

export default function BedazzleCover() {
  const navigate = useNavigate();
  const isMobile = useMobile();

  useEffect(() => {
    // Silently preload the first few slides while the user is reading this cover page
    [1, 2, 3].forEach((num) => {
      const img = new window.Image();
      img.src = resolveAsset(`assets/b${num}.png`);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0, ease: 'easeInOut' }}
      className={`absolute inset-0 w-full ${isMobile ? 'h-[100dvh] overflow-y-auto' : 'h-screen overflow-hidden'} bg-black flex ${isMobile ? 'items-start' : 'items-center'} justify-center`}
    >
      {/* 16:9 canvas */}
      <div
        className={`relative aspect-[16/9] ${isMobile ? 'w-full h-auto' : 'h-full max-w-full'}`}
        style={isMobile ? { flexShrink: 0 } : { 
          aspectRatio: '16/9', height: '100%', maxWidth: '100%', maxHeight: '100%' 
        }}
      >
        {/* Background */}
        <img
          src={resolveAsset('assets/2_2_4.png')}
          alt="Bedazzle"
          className="w-full h-full object-fill pointer-events-none select-none"
        />

        <BackButton to="/projects" />

        {/* "Know more about Bedazzle" CTA button */}
        <motion.button
          onClick={() => navigate('/bedazzle')}
          className="absolute cursor-pointer z-30"
          style={isMobile ? {
            bottom: '8%',
            right: '8%',
            background: 'linear-gradient(135deg, #b5a58a 0%, #8c7b60 100%)',
            color: '#fff',
            fontFamily: "'Georgia', serif",
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.06em',
            padding: '10px 20px',
            borderRadius: '999px',
            border: '2px solid rgba(255,255,255,0.35)',
            boxShadow: '0 4px 24px rgba(140,123,96,0.35)',
            whiteSpace: 'nowrap',
          } : {
            bottom: '3%',
            left: '28%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #b5a58a 0%, #8c7b60 100%)',
            color: '#fff',
            fontFamily: "'Georgia', serif",
            fontSize: 'clamp(11px, 1.4vw, 18px)',
            fontWeight: '600',
            letterSpacing: '0.06em',
            padding: '0.75em 2.2em',
            borderRadius: '999px',
            border: '2px solid rgba(255,255,255,0.35)',
            boxShadow: '0 4px 24px rgba(140,123,96,0.35)',
            whiteSpace: 'nowrap',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          whileHover={{
            scale: 1.06,
            boxShadow: '0 8px 32px rgba(140,123,96,0.55)',
            filter: 'brightness(1.1)',
          }}
          whileTap={{ scale: 0.97 }}
        >
          ✦ Know more about Bedazzle
        </motion.button>
      </div>
    </motion.div>
  );
}
