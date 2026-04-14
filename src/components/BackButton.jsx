import { Link } from 'react-router-dom';

export default function BackButton({ to = "/main" }) {
  return (
    <Link
      to={to}
      className="absolute bottom-5 left-10 text-black/70 hover:text-black hover:underline z-50 text-xl font-mono tracking-wide transition-all duration-300 cursor-none"
    >
      ↩️ back to desktop
    </Link>
  );
}
