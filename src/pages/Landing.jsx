import ImageBackground from '../components/ImageBackground';
import Hotspot from '../components/Hotspot';
import { useNavigate } from 'react-router-dom';
import { resolveAsset } from '../utils/paths';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <ImageBackground 
      imageSrc={resolveAsset('assets/1.png')} 
      animatedBg={true}
      fullScreenChildren={
        <Hotspot
          top={0}
          left={0}
          width={100}
          height={100}
          onClick={() => navigate('/main')}
        />
      }
    />
  );
}
