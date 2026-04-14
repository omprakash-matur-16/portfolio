import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function BedazzleCover() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0, ease: 'easeInOut' }}
      className="absolute inset-0 w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* 16:9 canvas */}
      <div
        className="relative"
        style={{ aspectRatio: '16/9', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
      >
        {/* Background */}
        <img
          src="/portfolio/assets/2_2_4.png"
          alt="Bedazzle"
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
        />

        <BackButton to="/projects" />

        {/* "Know more about Bedazzle" CTA button */}
        <motion.button
          onClick={() => navigate('/bedazzle')}
          className="absolute cursor-pointer"
          style={{
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
