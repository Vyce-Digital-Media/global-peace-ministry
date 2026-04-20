'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
   initial: { opacity: 0, y: 30 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.8 }
};

export default function BookPage() {
   return (
      <div className="flex flex-col w-full bg-cream min-h-screen">

         {/* 1. Book Detail Section */}
         <section className="mt-10 pt-32 pb-24 px-6 md:px-12 bg-cream">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

               {/* Left: Book Co ver */}
               <div className="lg:col-span-5 relative">
                  <motion.div {...fadeInUp} className="sticky top-32">
                     <div className="w-full aspect-[2/3] md:aspect-[3/4] rounded-2xl overflow-hidden bg-primary-900/5 shadow-2xl relative border-4 border-white">
                        <img
                           src="/Dr Haiku Photos/gpm-photo-54.jpeg"
                           alt="Lord Professor Dr. Kingsley Kebiru Momodu — Author"
                           className="w-full h-full object-cover object-top"
                        />
                        {/* Book title overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/95 to-transparent p-6 text-center text-cream">
                           <p className="font-serif text-xl font-bold">WORLD PEACE</p>
                           <p className="text-xs tracking-widest text-primary-400 mt-1">&quot;Global Peace Is Possible&quot;</p>
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* Right: Book Details */}
               <div className="lg:col-span-7 my-20">
                  <motion.div {...fadeInUp}>
                     <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 mb-6"> </h2>
                     <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4 leading-tight">
                        &quot;Global Peace Is Possible&quot;
                     </h3>

                     <div className="bg-white p-6 rounded-xl border border-muted-teal/20 shadow-sm mb-10 flex flex-col gap-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                           <ShoppingCart className="w-24 h-24 text-primary-900" />
                        </div>
                        <p className="text-sm text-primary-900 font-bold uppercase tracking-widest border-b border-primary-600/20 pb-2 mb-2">Book Info</p>
                        <p className="text-primary-900 font-medium"><strong>Author:</strong> Lord Professor Dr. Kingsley Kebiru Momodu <br /><span className="text-sm text-primary-900/60 font-normal">PhD in World Peace | Honorary Doctorate | Honorary Professor of World Peace <br />Kennedy University of Baptist, United States of America</span></p>
                        <p className="text-primary-900 font-medium mt-2"><strong>Publisher:</strong> Nexus Stores</p>
                        <p className="text-primary-900/80"><strong>First Published:</strong> 2026 | <strong>ISBN:</strong> 978-93-47491-13-9</p>
                        <p className="text-primary-900 font-bold text-2xl mt-4">MRP: £12.99</p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                           <a href="/" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                              Order Now - nexus stores
                           </a>
                           <Link href="/contact" className="btn-secondary text-primary-900 border-primary-900 hover:bg-primary-900 hover:text-white text-center">
                              Contact us for a copy
                           </Link>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>

            {/* Side by Side Content Row */}
            <div className="max-w-7xl mx-auto w-full mt-24 py-16 border-t border-muted-teal/10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Left column: About */}
                  <motion.div {...fadeInUp}>
                     <h4 className="font-serif text-3xl font-bold text-primary-900 mb-6">About This Book</h4>
                     <div className="space-y-4">
                        <p className="text-lg text-primary-900/80 leading-relaxed font-medium">
                           This landmark work explores the profound yet often overlooked truth that peace is not merely a distant aspiration, but an inherent human capacity. Drawing on a life shaped by migration, intercultural encounters, and rigorous academic research, the author examines how individuals and societies navigate diversity across religion, language, and culture.
                        </p>
                        <p className="text-lg text-primary-900/80 leading-relaxed font-medium">
                           From childhood experiences in Nigeria where Islam and Christianity intersected - to years of living in the multicultural landscape of London - the narrative reveals how everyday acts of kindness and coexistence form the foundation of global harmony.
                        </p>
                        <p className="text-lg text-primary-900/80 leading-relaxed">
                           Blending personal testimony, scholarly analysis, and insights from interviews and surveys conducted across multiple nations, the work investigates the conditions that nurture peace and those that suppress it. Through stories of forgiveness, reconciliation, and shared humanity, the book argues that global peace is achievable when institutions, communities, and individuals consciously cultivate empathy, dialogue, and mutual respect.
                        </p>
                        <p className="text-lg text-primary-900/80 leading-relaxed font-bold italic">
                           Ultimately, World Peace presents peace not as an abstract ideal but as a practical, collective responsibility for humanity.
                        </p>
                     </div>
                  </motion.div>

                  {/* Right column: Research & Callout */}
                  <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                     <h4 className="font-serif text-3xl font-bold text-primary-900 mb-6">Research Foundation</h4>
                     <p className="text-lg text-primary-900/80 leading-relaxed mb-10">
                        The doctoral research that underpins this volume was conducted at Kennedy University of Baptist and employed rigorous academic methods: quantitative survey data from 300 participants across multiple countries, 25 in-depth qualitative interviews, and detailed case studies of successful peace processes from South Africa to Northern Ireland to Colombia. This empirical foundation supports the philosophical and theological arguments developed throughout the book.
                     </p>

                     <div className="bg-primary-900/5 border-l-4 border-primary-600 p-8 rounded-r-2xl text-center">
                        <h5 className="font-serif text-3xl font-bold text-primary-900 mb-2 italic">&quot;Global Peace Is Possible&quot;</h5>
                        <p className="text-primary-900/70 font-medium text-lg mb-1">People Should Relate based on Humanity</p>
                        <p className="text-primary-900/70 font-medium text-lg">No Discrimination &middot; No Wars &middot; No Killings of Any Sort</p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

      </div>
   );
}
