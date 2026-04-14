import ImageBackground from '../components/ImageBackground';
import Hotspot from '../components/Hotspot';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <ImageBackground imageSrc="/portfolio/assets/1.png" animatedBg={true}>
      {/* 
        The entire screen is clickable on the landing page,
        so covering the whole area as a single Hotspot. 
      */}
      <Hotspot
        top={0}
        left={0}
        width={100}
        height={100}
        onClick={() => navigate('/main')}
      />
    </ImageBackground>
  );
}
