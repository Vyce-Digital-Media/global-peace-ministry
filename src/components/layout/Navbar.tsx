'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Ministry', href: '/ministries' },
  { name: 'Book', href: '/book' },
  { name: 'Prayer', href: '/prayer' },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-700 bg-primary-900 border-b border-primary-600/20 py-4 shadow-lg shadow-black/10">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">

          <Link href="/" className="flex items-center gap-3 group z-50">
            <img src="/GPC Logo.png" alt="Global Peace Ministry Logo" className="h-10 md:h-14 w-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="flex flex-col text-white font-bold leading-tight">
              <div className="flex items-baseline gap-1.5 mb-1.5">
                <span className="text-lg md:text-xl tracking-wider uppercase whitespace-nowrap leading-none">GLOBAL PEACE Ministry</span>
              </div>
              <div className="inline-block">
                <span className="text-[9px] md:text-[11px] tracking-[0.2em] text-red-600 font-black uppercase leading-none bg-white px-2 py-1 rounded-[2px] shadow-sm">
                  JESUS IS LORD
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 ml-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[11px] xl:text-[14px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 py-1 group ${isActive ? 'text-primary-600' : 'text-white hover:text-primary-600'
                    }`}
                >
                  {link.name}


                  {/* Active Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="navActive"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/donate"
              className={`text-m font-bold uppercase tracking-[0.2em] px-4 py-2 border transition-colors duration-500 bg-primary-600 text-primary-900 border-primary-600 hover:bg-white hover:text-primary-900 hover:border-white ${pathname === '/donate' ? 'invisible pointer-events-none' : ''}`}
            >
              Donate
            </Link>
          </div>

          <div className="flex items-center lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors duration-500 text-white"
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-primary-900 z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 bg-primary-900">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold uppercase tracking-[0.3em] ${pathname === link.href ? 'text-primary-600' : 'text-white'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="px-12 py-4 bg-primary-600 text-white font-bold uppercase tracking-[0.2em] rounded-sm"
              >
                Donate
              </Link>
            </div>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-8 text-xs font-bold uppercase tracking-widest text-white/50">
              <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-gray-400 transition-colors">YouTube</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
