import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Landing from './pages/Landing';
import MainDashboard from './pages/MainDashboard';
import About from './pages/About';
import Projects from './pages/Projects';
import StaticPage from './components/StaticPage';
import BedazzleCover from './pages/BedazzleCover';
import BedazzleFlow from './pages/BedazzleFlow';
import GlobalPreloader from './components/GlobalPreloader';

export default function App() {
  const location = useLocation();

  return (
    <>
      <GlobalPreloader />
      <CustomCursor />
      
      {/* Route transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<MainDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          
          {/* Main folder static pages */}
          <Route path="/journey" element={<StaticPage imageSrc="/portfolio/assets/2_3.png" backTo="/main" />} />
          <Route path="/contact" element={<StaticPage imageSrc="/portfolio/assets/2_4.png" backTo="/main" />} />

          {/* Project sub-pages */}
          <Route path="/projects/lenskart" element={<StaticPage imageSrc="/portfolio/assets/2_2_1.png" backTo="/projects" />} />
          <Route path="/projects/candle-bar" element={<StaticPage imageSrc="/portfolio/assets/2_2_2.png" backTo="/projects" />} />
          <Route path="/projects/newme" element={<StaticPage imageSrc="/portfolio/assets/2_2_3.png" backTo="/projects" />} />
          
          {/* Bedazzle cover page which leads into the flow */}
          <Route path="/bedazzle-cover" element={<BedazzleCover />} />
          
          <Route path="/bedazzle" element={<BedazzleFlow />} />

        </Routes>
      </AnimatePresence>
    </>
  );
}
