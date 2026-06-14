'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';

export default function DonateSuccessPage() {
   return (
      <div className="flex flex-col w-full bg-cream min-h-screen justify-center items-center px-6">
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-primary-900 text-cream p-12 md:p-20 rounded-[2rem] shadow-2xl max-w-2xl w-full text-center relative overflow-hidden"
         >
            {/* Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fdffd6_2px,transparent_2px)] [background-size:24px_24px]" />

            <div className="relative z-10 flex flex-col items-center">
               <div className="w-24 h-24 rounded-full bg-light-sage/20 border-4 border-light-sage flex items-center justify-center mb-8 text-light-sage">
                  <HeartHandshake className="w-12 h-12" />
               </div>

               <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                  Thank You!
               </h1>
               
               <p className="text-xl md:text-2xl font-medium leading-relaxed text-cream/80 mb-10">
                  Your generous donation has been successfully processed. Together, we are building a more peaceful world.
               </p>

               <Link 
                  href="/"
                  className="px-8 py-4 bg-light-sage text-primary-900 font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-cream transition-all duration-300 shadow-xl"
               >
                  Return Home
               </Link>
            </div>
         </motion.div>
      </div>
   );
}
