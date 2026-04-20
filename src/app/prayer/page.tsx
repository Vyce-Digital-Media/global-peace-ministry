'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Heart, Users, Shield, Link2, HandHeart, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
   initial: { opacity: 0, y: 30 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.8 }
};

const offerings = [
   { icon: Heart, title: "Personal Prayer Ministry", desc: "One-on-one prayer sessions, by appointment, in person or remotely." },
   { icon: Users, title: "Group Prayer Meetings", desc: "Interdenominational prayer gatherings (2–5 hours), open to all." },
   { icon: Shield, title: "Marriage & Family Counselling", desc: "Strengthening marriages and families in distress." },
   { icon: RefreshCw, title: "Deliverance Ministry", desc: "Prayer and ministry for those experiencing spiritual oppression." },
   { icon: HandHeart, title: "Ministry for Children", desc: "We are equipped to minister to children in age-appropriate, safe settings." },
   { icon: Link2, title: "Grief Support & Life Challenges", desc: "Compassionate support for those navigating loss, illness, or major life transitions." }
];

export default function PrayerPage() {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   // 4 Image Parameters for Prayer Side Image (Desktop)
   const imageX = 'center';      // Horizontal Position
   const imageY = 'center';      // Vertical Position
   const imageZoom = '1.0';      // Scale (1.0 = original)
   const imageBrightness = '0.5'; // Brightness (0.0 to 1.0)

   // MOBILE ONLY PARAMETERS
   const mX = 'center';        // Horizontal Position
   const mY = 'center';        // Vertical Position
   const mZoom = '1.0';        // Scale
   const mBright = '0.5';      // Brightness

   return (
      <div className="flex flex-col w-full bg-cream min-h-screen">

         {/* Hero Content Sections */}
         <section className="w-full mt-10 pt-36 pb-16 px-6 md:px-12 bg-cream flex flex-col justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

               {/* Left: Text */}
               <div className="flex flex-col">
                  <motion.div {...fadeInUp}>
                     <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-900 mb-6 border border-primary-600/30 rounded-full px-4 py-2 inline-block">Support &amp; Healing</h2>
                     <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight">
                        We Are Here For You.
                     </h1>
                     <div className="w-20 h-1 bg-primary-600 rounded-full mb-8" />

                     <p className="text-xl md:text-xl font-medium leading-relaxed text-primary-900/80 mb-6">
                        Life can be overwhelming. Whether you are facing illness, family breakdown, spiritual oppression, grief, financial hardship, or simply a deep longing for something more - Global Peace Ministry is here for you.
                     </p>
                     <p className="text-xl md:text-xl font-medium leading-relaxed text-primary-900/80 mb-6">
                        We offer prayer support and personal counselling in a warm, confidential, and non-judgmental environment.Have you or someone you love been affected by sickness, loss, conflict, or any other challenge? You are not alone. Reach out today.
                     </p>

                  </motion.div>
               </div>

               {/* Right: Scripture Redesign */}
               <div className="flex flex-col w-full">
                  <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                     <div className="w-full flex-1 aspect-square lg:aspect-square max-h-[600px] rounded-[2.5rem] overflow-hidden bg-primary-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative border border-white/10 group transition-transform duration-700 hover:scale-[1.01]">
                        {/* Image background with overlay */}
                        <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-80" />
                        <img
                           src="/Dr Haiku Photos/gpm-photo-13.jpeg"
                           alt="Hope and Support"
                           className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 group-hover:!scale-110"
                           style={{
                              objectPosition: isMobile ? `${mX} ${mY}` : `${imageX} ${imageY}`,
                              scale: isMobile ? mZoom : imageZoom,
                              filter: `brightness(${isMobile ? mBright : imageBrightness})`
                           }}
                        />

                        <div className="relative z-20 flex flex-col items-center justify-center p-8 md:p-12 h-full text-center">
                           <div className="mb-6 md:mb-8 rotate-180 opacity-50 scale-75 md:scale-100">
                              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10 11L10 16L6 16L6 11L8.5 6L10.5 6L8.5 11L10 11ZM18 11L18 16L14 16L14 11L16.5 6L18.5 6L16.5 11L18 11Z" fill="white" />
                              </svg>
                           </div>
                           <h4 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white font-bold italic mb-8 md:mb-10 leading-snug drop-shadow-2xl">
                              Weeping may endure for a night, but joy comes in the morning.
                           </h4>
                           <div className="flex items-center gap-4 md:gap-6">
                              <div className="h-px bg-primary-600 w-10 md:w-16" />
                              <p className="text-primary-600 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Psalm 30:5</p>
                              <div className="h-px bg-primary-600 w-10 md:w-16" />
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* 3. What We Hope to Offer */}
         <section className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-white border-t border-muted-teal/20 relative">
            <div className="max-w-7xl mx-auto w-full relative z-10">

               <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-20 gap-6">
                  <motion.div {...fadeInUp}>
                     <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-900 border border-primary-600/30 rounded-full px-4 py-2 inline-block mb-6">Our Offerings</h2>
                     <h3 className="font-serif text-4xl md:text-6xl font-bold text-primary-900 leading-tight max-w-xl">What We Hope <br className="hidden md:block" />to Offer You</h3>
                  </motion.div>
                  <motion.p {...fadeInUp} className="text-lg text-primary-900/70 font-medium max-w-md leading-relaxed text-right mt-10">
                     Our ministry provides a range of spiritual and practical support services in a confidential, loving environment.
                  </motion.p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {offerings.map((offering, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08, duration: 0.6 }}
                        className="group bg-cream/30 p-8 md:p-10 rounded-2xl border border-muted-teal/20 hover:border-primary-600/40 hover:shadow-xl transition-all duration-500 flex items-start gap-6 relative overflow-hidden"
                     >
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 rounded-r" />
                        <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center border border-muted-teal/10 shadow-sm shrink-0 group-hover:bg-primary-600 group-hover:border-primary-600 transition-colors duration-500">
                           <offering.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div>
                           <h4 className="font-serif text-xl md:text-2xl font-bold text-primary-900 mb-2">{offering.title}</h4>
                           <p className="text-primary-900/80 font-medium leading-relaxed text-[15px]">
                              {offering.desc}
                           </p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* 4. Action Banner */}
         <section className="py-24 px-6 md:px-12 bg-primary-900 text-cream text-center border-t-8 border-primary-600">
            <div className="max-w-4xl mx-auto w-full">
               <motion.div {...fadeInUp}>
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">How to Request Prayer or Counselling</h3>
                  <p className="text-[16px] md:text-xl font-medium leading-relaxed text-cream/70 mb-12 max-w-2xl mx-auto">
                     Simply reach out to us via any of the following methods. All sessions are strictly confidential. We serve in love, without judgement.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                     <div className="bg-primary-900/50 border border-primary-600/30 rounded-xl p-8 flex flex-col items-center">
                        <Mail className="w-8 h-8 text-light-sage mb-4" />
                        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-cream/80 mb-2">Email</p>
                        <a href="mailto:pastor@globalpeaceministry.org" className="text-sm font-bold text-primary-600 hover:text-white transition-colors">pastor@globalpeaceministry.org</a>
                     </div>
                     <div className="bg-primary-900/50 border border-primary-600/30 rounded-xl p-8 flex flex-col items-center">
                        <Phone className="w-8 h-8 text-light-sage mb-4" />
                        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-cream/80 mb-2">Phone / WhatsApp</p>
                        <a href="tel:+447453387868" className="text-sm font-bold text-primary-600 hover:text-white transition-colors">+44-7453387868</a>
                     </div>
                     <div className="bg-primary-900/50 border border-primary-600/30 rounded-xl p-8 flex flex-col items-center sm:col-span-2 lg:col-span-1">
                        <Heart className="w-8 h-8 text-light-sage mb-4" />
                        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-cream/80 mb-2">Web Form</p>
                        <Link href="/contact" className="text-sm font-bold text-primary-600 flex items-center gap-1 hover:text-white transition-colors">Contact Form &rarr;</Link>
                     </div>
                  </div>

                  <div className="bg-primary-600 text-primary-900 px-8 py-10 rounded-2xl max-w-full mx-auto ring-4 ring-primary-600/20">
                     <h4 className="font-serif text-3xl md:text-4xl font-black italic mb-6 leading-tight uppercase drop-shadow-sm tracking-wide">
                        Don&apos;t give up. Help is here.
                     </h4>
                     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        <Link href="/contact" className="btn-secondary w-full sm:w-auto text-center !border-primary-900 !text-primary-900 hover:!bg-primary-900 hover:!text-white border-2">
                           Request Prayer Now
                        </Link>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>

      </div>
   );
}
