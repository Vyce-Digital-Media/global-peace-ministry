'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyDonate() {
  const pathname = usePathname();
  
  // Hide on donate page
  if (pathname === '/donate') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-8 right-8 z-[60]"
      >
        <Link
          href="/donate"
          className="group flex items-center gap-3 bg-primary-900 text-cream px-6 py-4 rounded-full shadow-2xl hover:bg-primary-600 transition-all duration-500 border border-primary-900/20 hover:scale-105 active:scale-95"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Donate</span>
          <div className="w-8 h-8 bg-cream/10 rounded-full flex items-center justify-center group-hover:bg-cream/20 transition-colors">
            <Heart className="w-4 h-4 text-cream" fill="currentColor" />
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
