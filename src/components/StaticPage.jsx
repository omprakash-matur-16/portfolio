import ImageBackground from '../components/ImageBackground';
import BackButton from './BackButton';

export default function StaticPage({ imageSrc, backTo }) {
  return (
    <ImageBackground imageSrc={imageSrc}>
      {/* Return Button */}
      <BackButton to={backTo} />
    </ImageBackground>
  );
}
