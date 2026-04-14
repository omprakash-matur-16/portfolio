import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function BedazzleFlow() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const navigate = useNavigate();
  const totalImages = 21;

  const handleNext = () => {
    if (currentIndex < totalImages) {
      setCurrentIndex(prev => prev + 1);
    } else {
      navigate('/projects');
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 1) {
      setCurrentIndex(prev => prev - 1);
    } else {
      navigate('/projects');
    }
  };

  const currentImageSrc = `/assets/b${currentIndex}.png`;

  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* Return Button */}
      <BackButton to="/projects" />

      {/* Main Slideshow Container */}
      <div className="relative w-full h-full flex-grow cursor-none" onClick={handleNext}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentImageSrc}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            alt={`Bedazzle Slide ${currentIndex}`}
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          />
        </AnimatePresence>
      </div>

      {/* Progress Indicator - Subdued, non-intrusive */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 pointer-events-none z-20">
        {Array.from({ length: totalImages }).map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
              i + 1 === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>
      
      {/* Invisible Back handler for left side of screen */}
      <div 
        className="absolute top-0 left-0 w-1/4 h-full z-10 cursor-none" 
        onClick={handlePrev}
      />

    </div>
  );
}
