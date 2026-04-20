'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import DomeGallery from '@/components/ui/DomeGallery';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

// Photo data with bento grid sizing based on actual image dimensions
// type: 'portrait' | 'landscape' | 'square' determines grid span
const photos = [
  // Row 1: Wide landscape + portrait
  { id: 1, src: '/Dr Haiku Photos/gpm-photo-53.jpeg', type: 'landscape', col: 'lg:col-span-3', row: 'lg:row-span-2' },
  { id: 2, src: '/Dr Haiku Photos/gpm-photo-01.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },

  // Row 2: Mix
  { id: 3, src: '/Dr Haiku Photos/gpm-photo-07.jpeg', type: 'landscape', col: 'lg:col-span-2', row: 'lg:row-span-1' },
  { id: 4, src: '/Dr Haiku Photos/gpm-photo-10.jpeg', type: 'square', col: 'lg:col-span-1', row: 'lg:row-span-1' },
  { id: 5, src: '/Dr Haiku Photos/gpm-photo-17.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },

  // Row 3
  { id: 6, src: '/Dr Haiku Photos/gpm-photo-12.jpeg', type: 'landscape', col: 'lg:col-span-1', row: 'lg:row-span-1' },
  { id: 7, src: '/Dr Haiku Photos/gpm-photo-48.jpeg', type: 'square', col: 'lg:col-span-1', row: 'lg:row-span-1' },
  { id: 8, src: '/Dr Haiku Photos/gpm-photo-14.jpeg', type: 'square', col: 'lg:col-span-1', row: 'lg:row-span-1' },

  // Row 4: Big landscape + portraits
  { id: 9, src: '/Dr Haiku Photos/gpm-photo-49.jpeg', type: 'landscape', col: 'lg:col-span-2', row: 'lg:row-span-2' },
  { id: 10, src: '/Dr Haiku Photos/gpm-photo-02.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 11, src: '/Dr Haiku Photos/gpm-photo-19.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },

  // Row 5
  { id: 12, src: '/Dr Haiku Photos/gpm-photo-24.jpeg', type: 'landscape', col: 'lg:col-span-2', row: 'lg:row-span-1' },
  { id: 13, src: '/Dr Haiku Photos/gpm-photo-25.jpeg', type: 'landscape', col: 'lg:col-span-1', row: 'lg:row-span-1' },
  { id: 14, src: '/Dr Haiku Photos/gpm-photo-26.jpeg', type: 'landscape', col: 'lg:col-span-1', row: 'lg:row-span-1' },

  // Row 6: Portraits heavy
  { id: 15, src: '/Dr Haiku Photos/gpm-photo-04.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 16, src: '/Dr Haiku Photos/gpm-photo-29.jpeg', type: 'landscape', col: 'lg:col-span-2', row: 'lg:row-span-1' },
  { id: 17, src: '/Dr Haiku Photos/gpm-photo-06.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },

  // Row 7
  { id: 18, src: '/Dr Haiku Photos/gpm-photo-31.jpeg', type: 'landscape', col: 'lg:col-span-1', row: 'lg:row-span-1' },
  { id: 19, src: '/Dr Haiku Photos/gpm-photo-32.jpeg', type: 'landscape', col: 'lg:col-span-1', row: 'lg:row-span-1' },

  // Row 8: Wide panoramic
  { id: 20, src: '/Dr Haiku Photos/gpm-photo-36.jpeg', type: 'landscape', col: 'lg:col-span-2', row: 'lg:row-span-1' },
  { id: 21, src: '/Dr Haiku Photos/gpm-photo-11.jpeg', type: 'square', col: 'lg:col-span-1', row: 'lg:row-span-1' },
  { id: 22, src: '/Dr Haiku Photos/gpm-photo-16.jpeg', type: 'square', col: 'lg:col-span-1', row: 'lg:row-span-1' },

  // Row 9: Tall portraits + landscape
  { id: 23, src: '/Dr Haiku Photos/gpm-photo-05.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 24, src: '/Dr Haiku Photos/gpm-photo-08.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 25, src: '/Dr Haiku Photos/gpm-photo-27.jpeg', type: 'landscape', col: 'lg:col-span-2', row: 'lg:row-span-1' },

  // Row 10
  { id: 26, src: '/Dr Haiku Photos/gpm-photo-03.jpeg', type: 'square', col: 'lg:col-span-1', row: 'lg:row-span-1' },
  { id: 27, src: '/Dr Haiku Photos/gpm-photo-34.jpeg', type: 'square', col: 'lg:col-span-1', row: 'lg:row-span-1' },

  // Row 11
  { id: 28, src: '/Dr Haiku Photos/gpm-photo-09.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 29, src: '/Dr Haiku Photos/gpm-photo-15.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 30, src: '/Dr Haiku Photos/gpm-photo-20.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 31, src: '/Dr Haiku Photos/gpm-photo-13.jpeg', type: 'square', col: 'lg:col-span-1', row: 'lg:row-span-1' },

  // Row 12
  { id: 32, src: '/Dr Haiku Photos/gpm-photo-35.jpeg', type: 'square', col: 'lg:col-span-1', row: 'lg:row-span-1' },

  // Row 13: More landscapes
  { id: 33, src: '/Dr Haiku Photos/gpm-photo-21.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 34, src: '/Dr Haiku Photos/gpm-photo-22.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 35, src: '/Dr Haiku Photos/gpm-photo-23.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 36, src: '/Dr Haiku Photos/gpm-photo-39.jpeg', type: 'square', col: 'lg:col-span-1', row: 'lg:row-span-1' },

  // Row 14
  { id: 37, src: '/Dr Haiku Photos/gpm-photo-44.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-1' },

  // Row 15
  { id: 38, src: '/Dr Haiku Photos/gpm-photo-28.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 39, src: '/Dr Haiku Photos/gpm-photo-30.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 40, src: '/Dr Haiku Photos/gpm-photo-37.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 41, src: '/Dr Haiku Photos/gpm-photo-33.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },

  // Row 16
  { id: 42, src: '/Dr Haiku Photos/gpm-photo-38.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 43, src: '/Dr Haiku Photos/gpm-photo-40.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 44, src: '/Dr Haiku Photos/gpm-photo-41.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 45, src: '/Dr Haiku Photos/gpm-photo-42.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },

  // Row 17
  { id: 46, src: '/Dr Haiku Photos/gpm-photo-43.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 47, src: '/Dr Haiku Photos/gpm-photo-45.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 48, src: '/Dr Haiku Photos/gpm-photo-46.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 49, src: '/Dr Haiku Photos/gpm-photo-47.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },

  // Final row
  { id: 50, src: '/Dr Haiku Photos/gpm-photo-50.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 51, src: '/Dr Haiku Photos/gpm-photo-51.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 52, src: '/Dr Haiku Photos/gpm-photo-52.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 53, src: '/Dr Haiku Photos/gpm-photo-18.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 54, src: '/Dr Haiku Photos/gpm-photo-54.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 61, src: '/Dr Haiku Photos/gpm-photo-101.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 62, src: '/Dr Haiku Photos/gpm-photo-102.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 63, src: '/Dr Haiku Photos/gpm-photo-103.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 64, src: '/Dr Haiku Photos/gpm-photo-104.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 55, src: '/Dr Haiku Photos/WhatsApp Image 2026-04-13 at 11.21.16.jpeg', type: 'landscape', col: 'lg:col-span-2', row: 'lg:row-span-1' },
  { id: 56, src: '/Dr Haiku Photos/WhatsApp Image 2026-04-13 at 11.21.23.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 57, src: '/Dr Haiku Photos/WhatsApp Image 2026-04-13 at 11.21.24.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 58, src: '/Dr Haiku Photos/WhatsApp Image 2026-04-13 at 11.21.26.jpeg', type: 'landscape', col: 'lg:col-span-2', row: 'lg:row-span-1' },
  { id: 59, src: '/Dr Haiku Photos/WhatsApp Image 2026-04-13 at 11.21.28.jpeg', type: 'portrait', col: 'lg:col-span-1', row: 'lg:row-span-2' },
  { id: 60, src: '/Dr Haiku Photos/WhatsApp Image 2026-04-13 at 11.21.29.jpeg', type: 'landscape', col: 'lg:col-span-2', row: 'lg:row-span-1' },
];


export default function GalleryPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images = photos.map(p => ({ src: p.src, alt: `Ministry photo ${p.id}` }));

  return (
    <div className="flex flex-col w-full bg-[#120F17] min-h-screen relative overflow-hidden">
      {/* Overlay Title */}
      <div className="absolute top-28 left-6 md:left-12 z-20 pointer-events-none">
        <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-light-sage mb-2">Moments</h2>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-cream drop-shadow-lg">
          Photo Gallery.
        </h1>
      </div>

      <div className="w-full h-screen relative mt-16 md:mt-0">
        <DomeGallery
          images={images}
          fit={0.9}
          minRadius={700}
          maxVerticalRotationDeg={7}
          segments={28}
          dragDampening={1}
          grayscale={false}
        />
      </div>
    </div>
  );
}
