import { Link, useLocation } from 'react-router-dom';
import useMobile from '../utils/useMobile';

export default function BackButton({ to = "/main" }) {
  const isMobile = useMobile();
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  if (!isMobile) {
    return (
      <Link
        to={to}
        className="absolute bottom-4 left-8 text-black/70 hover:text-black hover:underline z-50 text-xl font-mono tracking-wide transition-all duration-300 cursor-none"
      >
        ↩️ back to desktop
      </Link>
    );
  }

  // Mobile positioning
  const mobileClasses = isAboutPage 
    ? "absolute bottom-4 left-4" 
    : "absolute top-12 right-6";

  return (
    <Link
      to={to}
      className={`${mobileClasses} flex items-center justify-center w-10 h-10 bg-black/10 backdrop-blur-xl border border-white/10 rounded-full text-white z-[100] shadow-lg active:scale-90 transition-all duration-300`}
      aria-label="Go back"
    >
      <span className="text-xl">↩</span>
    </Link>
  );
}
