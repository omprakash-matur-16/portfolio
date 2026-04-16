import { useState } from 'react';
import StaticPage from '../components/StaticPage';
import { resolveAsset } from '../utils/paths';

export default function Contact() {

  // Invisible clickable hotspots for contact links
  // You can adjust these top/left/width/height percentages identically to how we matched the folder icons!
  const socialLinks = [
    {
      id: 'email',
      href: 'mailto:ritu.lokesh05@gmail.com',
      text: 'ritu.lokesh05@gmail.com',
      style: { top: '34.5%', left: '44%', width: '22%', height: '8%' },
      tilt: '-rotate-2',
      ariaLabel: 'Email'
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/ritu.lokesh/',
      text: '@ritu.lokesh',
      style: { top: '42.5%', left: '47%', width: '22%', height: '8%' },
      tilt: 'rotate-1',
      ariaLabel: 'Instagram'
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/ritulokesh/',
      text: 'ritulokesh',
      style: { top: '51.5%', left: '48%', width: '22%', height: '9%' },
      tilt: 'rotate-1',
      ariaLabel: 'LinkedIn'
    },
    {
      id: 'phone',
      href: 'tel:9880408303',
      text: '+91 9880408303',
      style: { top: '60.5%', left: '46%', width: '22%', height: '9%' },
      tilt: '-rotate-2',
      ariaLabel: 'Phone'
    }
  ];

  return (
    <StaticPage imageSrc={resolveAsset('assets/2_4.png')} backTo="/main">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute z-30 cursor-pointer flex items-center text-black hover:underline underline-offset-4 decoration-black/50 hover:decoration-black ${link.tilt || ''}`}
          style={{ ...link.style, fontSize: '1.4vw', fontFamily: 'sans-serif' }}
          aria-label={link.ariaLabel}
        >
          {link.text}
        </a>
      ))}
    </StaticPage>
  );
}
