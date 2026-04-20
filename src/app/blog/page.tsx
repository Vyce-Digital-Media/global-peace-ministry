'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
   initial: { opacity: 0, y: 30 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.8 }
};

const articles = [
   {
      slug: "why-global-peace-is-not-a-dream",
      title: "Why Global Peace Is Not a Dream — It Is a Human Calling",
      desc: "An exploration of the Biblical and scholarly foundation for world peace — drawing on Dr. Momodu's doctoral research and life experience across Nigeria, Italy, and the United Kingdom.",
      category: "Peace & Advocacy",
      readTime: "12 min read",
      image: "/blog-images/peace.png"
   },
   {
      slug: "the-power-of-prayer-in-a-world-at-war",
      title: "The Power of Prayer in a World at War",
      desc: "How intercession changes nations — a look at the history of prayer movements and their documented impact on political and social change.",
      category: "Prayer & Faith",
      readTime: "11 min read",
      image: "/blog-images/prayer.png"
   },
   {
      slug: "understanding-your-calling",
      title: "Understanding Your Calling: How to Discover Why God Created You",
      desc: "A practical guide for Christians seeking to identify and step into their God-given purpose.",
      category: "Discipleship & Purpose",
      readTime: "11 min read",
      image: "/blog-images/calling.png"
   },
   {
      slug: "forgiveness-across-faiths",
      title: "The Gospel of Forgiveness: How Grace Changes Everything",
      desc: "A reflection by Dr. Momodu on the radical power of Christian forgiveness — from Scripture's greatest portraits of grace to what it means to forgive as peacemakers in a broken world.",
      category: "Personal Testimony & Peace",
      readTime: "13 min read",
      image: "/blog-images/forgiveness.png"
   },
   {
      slug: "what-the-bible-says-about-poverty",
      title: "What the Bible Says About Poverty and Our Responsibility",
      desc: "A Biblical teaching on God's heart for the poor and practical steps Christians can take to make a difference.",
      category: "Charity & Service",
      readTime: "10 min read",
      image: "/blog-images/poverty.png"
   },
   {
      slug: "healing-is-for-today",
      title: "Healing Is For Today: God's Will for Your Health",
      desc: "A Scripture-based exploration of divine healing and how to receive and walk in God's healing power.",
      category: "Healing & Faith",
      readTime: "11 min read",
      image: "/blog-images/healing.png"
   }
];

export default function BlogPage() {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   // 4 Image Parameters for Hero Section (Desktop)
   const imageX = 'center';        // Horizontal Position
   const imageY = 'center';        // Vertical Position
   const imageZoom = '1.0';        // Scale
   const imageBrightness = '0.5';  // Brightness

   // MOBILE ONLY PARAMETERS
   const mX = 'center';        // Horizontal Position
   const mY = 'center';        // Vertical Position
   const mZoom = '1.0';        // Scale
   const mBright = '0.5';      // Brightness

   return (
      <div className="flex flex-col w-full bg-cream min-h-screen">

         {/* 1. Hero Section (100vh) */}
         <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-primary-900 overflow-hidden pt-20 pb-20">
            <div className="absolute inset-0 z-0">
               <img
                  src="/Dr Haiku Photos/gpm-photo-32.jpeg"
                  alt="Bible and Notes"
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale"
                  style={{
                     objectPosition: isMobile ? `${mX} ${mY}` : `${imageX} ${imageY}`,
                     scale: isMobile ? mZoom : imageZoom,
                     filter: `brightness(${isMobile ? mBright : imageBrightness}) grayscale(1)`
                  }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-10">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
               >
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-light-sage mb-6">Library</h2>
                  <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-8 leading-none">
                     Blog &amp; Articles.
                  </h1>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-cream/70 mb-12 max-w-3xl mx-auto">
                     Welcome to the Global Peace Ministry Blog — a space for reflection, teaching, and inspiration. Here you will find articles on world peace, Christian living, faith, prayer, healing, purpose, and much more. We invite you to read, share, and be encouraged.
                  </p>
               </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-light-sage animate-bounce">
               <ArrowDown className="w-8 h-8 opacity-70" />
            </div>
         </section>

         {/* 2. Articles List */}
         <section className="py-24 px-6 md:px-12 bg-cream relative z-10">
            <div className="max-w-7xl mx-auto w-full">

               <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <motion.div {...fadeInUp}>
                     <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 mb-4 block">Recent Posts</h2>
                     <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900">Featured Readings</h3>
                  </motion.div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {articles.map((article, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                     >
                        <Link href={`/blog/${article.slug}`} className="group flex flex-col h-full bg-white rounded-2xl border border-muted-teal/20 shadow-sm hover:shadow-xl hover:border-primary-600/30 transition-all duration-500 relative overflow-hidden">
                           <div className="w-full h-56 relative overflow-hidden bg-primary-900/5">
                              <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500" />
                           </div>
                           
                           <div className="p-8 flex flex-col flex-1 relative">
                              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-125 transition-transform duration-700 pointer-events-none">
                                 <BookOpen className="w-24 h-24 text-primary-900" />
                              </div>

                              <div className="flex items-center gap-3 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-600 border-b border-muted-teal/20 pb-4">
                                 <Tag className="w-3 h-3" />
                                 {article.category}
                              </div>

                              <h4 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4 leading-snug group-hover:text-primary-600 transition-colors">
                                 {article.title}
                              </h4>

                              <p className="text-primary-900/90 font-medium leading-relaxed mb-8 flex-1 text-[15px]">
                                 {article.desc}
                              </p>

                              <div className="flex items-center justify-between mt-auto pt-6 border-t border-muted-teal/20 text-primary-900/80">
                                 <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]">
                                    <Clock className="w-4 h-4" />
                                    {article.readTime}
                                 </div>
                                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-600 group-hover:underline">Read →</span>
                              </div>
                           </div>
                        </Link>
                     </motion.div>
                  ))}
               </div>

               {/* 3. Action Section */}
               <motion.div {...fadeInUp} className="max-w-4xl mx-auto mt-24 bg-primary-900 p-12 md:p-16 rounded-3xl shadow-2xl relative text-center border-t-8 border-primary-600">
                  <h4 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">Have a Story to Tell?</h4>
                  <p className="text-lg md:text-xl text-cream/70 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                     Are you a member of our global community with a powerful testimony or an insight to share on peace, faith, and charity? We welcome your submissions.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                     <Link href="/contact" className="btn-secondary !border-primary-600 !text-primary-900 !bg-primary-600 hover:!bg-white w-full sm:w-auto text-center px-10">
                        Submit Your Story or Testimony
                     </Link>
                     <Link href="/book" className="btn-secondary !border-cream text-cream hover:bg-cream hover:text-primary-900 w-full sm:w-auto text-center px-10">
                        Read The Book
                     </Link>
                  </div>
               </motion.div>

            </div>
         </section>

      </div>
   );
}
