import ImageBackground from '../components/ImageBackground';
import BackButton from './BackButton';

export default function StaticPage({ imageSrc, backTo, children }) {
  return (
    <ImageBackground imageSrc={imageSrc}>
      {children}
      {/* Return Button */}
      <BackButton to={backTo} />
    </ImageBackground>
  );
}
