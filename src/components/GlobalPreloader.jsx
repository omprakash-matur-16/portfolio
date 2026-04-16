import { useEffect } from 'react';
import { resolveAsset } from '../utils/paths';

const criticalImages = [
  resolveAsset('assets/2.png'),
  resolveAsset('assets/2_2.png'),
  resolveAsset('assets/2_3.png'),
  resolveAsset('assets/2_4.png'),
  resolveAsset('assets/2_2_1.png'),
  resolveAsset('assets/2_2_2.png'),
  resolveAsset('assets/2_2_3.png'),
  resolveAsset('assets/2_2_4.png'),
  resolveAsset('assets/about me folder icon.png'),
  resolveAsset('assets/contact me folder icon.png'),
  resolveAsset('assets/my journey folder icon.png'),
  resolveAsset('assets/my projects folder icon.png'),
  resolveAsset('assets/lenskart folder icon.png'),
  resolveAsset('assets/the candle bar folder icon.png'),
  resolveAsset('assets/new me folder icon.png'),
  resolveAsset('assets/bedazzle folder icon.png'),
  resolveAsset('assets/conveyor belt.png')
];

export default function GlobalPreloader() {
  useEffect(() => {
    // Quietly download all heavy backgrounds and icons into browser RAM
    criticalImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    // HTML5 native video preloading
    const preloadVideo = document.createElement('link');
    preloadVideo.rel = 'preload';
    preloadVideo.as = 'video';
    preloadVideo.href = resolveAsset('assets/about_me.mp4');
    document.head.appendChild(preloadVideo);

  }, []);

  return null; 
}
