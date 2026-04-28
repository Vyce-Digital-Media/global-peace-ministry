'use client';

import { Article } from '@/data/blog';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Tag, Clock, BookOpen } from 'lucide-react';

const fadeInUp = {
   initial: { opacity: 0, y: 30 },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.8 },
};

export default function BlogClient({ article }: { article: Article }) {
   return (
      <div className="flex flex-col w-full bg-cream min-h-screen">
         {/* Hero */}
         <section className="relative bg-primary-900 text-cream pt-36 pb-32 px-6 md:px-12 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-600/10 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-4xl mx-auto relative z-10">
               <motion.div {...fadeInUp}>
                  <Link href="/blog" className="inline-flex items-center gap-2 text-light-sage/70 hover:text-light-sage text-sm font-bold uppercase tracking-widest mb-10 transition-colors">
                     <ArrowLeft className="w-4 h-4" />
                     Back to Blog
                  </Link>
                  <div className="flex items-center gap-3 mb-6 text-[11px] font-bold uppercase tracking-[0.25em] text-primary-600">
                     <Tag className="w-3.5 h-3.5" />
                     {article.category}
                  </div>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                     {article.title}
                  </h1>
                  <div className="flex items-center gap-6 text-cream/50 text-sm font-medium">
                     <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{article.readTime}</span>
                     <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" />{article.date}</span>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* Featured Image */}
         <div className="w-full relative z-20 px-6 md:px-12 -mt-16 md:-mt-24">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="max-w-5xl mx-auto w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-primary-900/10 border border-muted-teal/20"
            >
               <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </motion.div>
         </div>

         {/* Article Body */}
         <article className="pt-16 pb-20 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
               {/* Intro */}
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl text-primary-900 font-medium leading-relaxed mb-16 border-l-4 border-primary-600 pl-8 italic"
               >
                  {article.intro}
               </motion.p>

               {/* Body Sections */}
               <div className="space-y-14">
                  {article.body.map((section, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.05 }}
                     >
                        {section.heading && (
                           <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-5">
                              {section.heading}
                           </h2>
                        )}
                        {section.text.split('\n\n').map((para, j) => (
                           <p key={j} className="text-[17px] text-primary-900/80 leading-[1.85] mb-5 font-medium">
                              {para}
                           </p>
                        ))}
                     </motion.div>
                  ))}
               </div>

               {/* Footer CTA */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mt-24 bg-primary-900 text-cream p-12 md:p-16 rounded-3xl text-center border-t-4 border-primary-600"
               >
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Continue Reading</h3>
                  <p className="text-cream/70 text-lg mb-8 max-w-xl mx-auto">
                     Explore more reflections, teachings, and testimonies from Global Peace Ministry.
                  </p>
                  <Link href="/blog" className="btn-secondary !border-primary-600 !text-primary-900 !bg-primary-600 hover:!bg-white inline-block px-10">
                     ← All Articles
                  </Link>
               </motion.div>
            </div>
         </article>
      </div>
   );
}
