import { useEffect } from 'react';

const criticalImages = [
  '/portfolio/assets/2.png',
  '/portfolio/assets/2_2.png',
  '/portfolio/assets/2_3.png',
  '/portfolio/assets/2_4.png',
  '/portfolio/assets/2_2_1.png',
  '/portfolio/assets/2_2_2.png',
  '/portfolio/assets/2_2_3.png',
  '/portfolio/assets/2_2_4.png',
  '/portfolio/assets/about me folder icon.png',
  '/portfolio/assets/contact me folder icon.png',
  '/portfolio/assets/my journey folder icon.png',
  '/portfolio/assets/my projects folder icon.png',
  '/portfolio/assets/lenskart folder icon.png',
  '/portfolio/assets/the candle bar folder icon.png',
  '/portfolio/assets/new me folder icon.png',
  '/portfolio/assets/bedazzle folder icon.png',
  '/portfolio/assets/conveyor belt.png'
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
    preloadVideo.href = '/portfolio/assets/about_me.mp4';
    document.head.appendChild(preloadVideo);

  }, []);

  return null; 
}
