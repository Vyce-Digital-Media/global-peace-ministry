'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const fadeInUp = {
   initial: { opacity: 0, y: 30 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.8 }
};

export default function AboutPage() {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   // 4 Image Parameters for Hero Section (Desktop)
   const imageX = '0%';        // Horizontal Position
   const imageY = '-20%';      // Vertical Position
   const imageZoom = '1.0';    // Scale
   const imageBrightness = '0.5'; // Brightness

   // MOBILE ONLY PARAMETERS
   const mX = 'center';        // Horizontal Position
   const mY = 'center';        // Vertical Position
   const mZoom = '1.0';        // Scale
   const mBright = '0.5';      // Brightness

   return (
      <div className="flex flex-col w-full bg-cream min-h-screen overflow-x-hidden">

         {/* 1. Hero Section (100vh) */}
         <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-primary-900 pt-20">
            <div className="absolute inset-0 z-0">
               <img
                  src="/Dr Haiku Photos/gpm-photo-24.jpeg"
                  alt="Dr. Momodu preaching"
                  className="w-full h-full object-cover opacity-85 mix-blend-overlay grayscale"
                  style={{
                     objectPosition: isMobile ? `${mX} ${mY}` : `${imageX} ${imageY}`,
                     scale: isMobile ? mZoom : imageZoom,
                     filter: `brightness(${isMobile ? mBright : imageBrightness}) grayscale(1)`
                  }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-20">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
               >
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-light-sage mb-6">About Us</h2>
                  <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-8 leading-[1.1]">
                     About Global Peace Ministry &amp; Our Founder
                  </h1>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-cream/80 mb-12 max-w-3xl mx-auto">
                     A borderless ministry dedicated to the pursuit of global harmony through faith, conscious living, and community action.
                  </p>
               </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-light-sage animate-bounce">
               <ArrowDown className="w-8 h-8 opacity-70" />
            </div>
         </section>

         {/* 2. About the Ministry */}
         <section className="py-44 px-6 md:px-2 bg-cream">
            <div className="max-w-6xl mx-auto text-center">
               <motion.div {...fadeInUp}>
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted-teal border border-muted-teal/30 rounded-full px-4 py-2 inline-block mb-8">The Ministry</h3>
                  <p className="text-lg md:text-xl text-primary-900/80 font-medium leading-relaxed mb-6">
                     Global Peace Ministry is a Christian, interdenominational, non-governmental organisation (NGO) dedicated to proclaiming the Kingdom of God, promoting world peace, healing the sick, delivering the oppressed, and helping the less privileged across all nations.
                  </p>
                  <p className="text-lg md:text-xl text-primary-900/80 font-medium leading-relaxed mb-6">
                     Founded and led by Lord Professor Dr. Kingsley Kebiru Momodu, the ministry operates from its base in Romford, Essex, London, United Kingdom, with an active international outreach across Africa, Europe, the Americas, and Asia.
                  </p>
                  <p className="text-lg md:text-xl text-primary-900/80 font-medium leading-relaxed">
                     We believe that peace begins in the human heart, is nurtured in community, and can - through God&apos;s grace and collective human will - transform nations. Our work is not merely spiritual: it is practical, compassionate, and rooted in a conviction that every human being deserves dignity, freedom, and hope.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* 3. About the Founder */}
         <section className="py-24 px-6 md:px-0 bg-white border-t border-muted-teal/20">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-5 relative">
                  <motion.div {...fadeInUp} className="sticky top-24">
                     <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-primary-900/10 shadow-2xl relative mt-4">
                        <img src="/Dr Haiku Photos/gpm-photo-39.jpeg" alt="Prof. Dr. Kingsley Kebiru Momodu" className="w-full h-full object-cover object-top" />
                     </div>
                  </motion.div>
               </div>

               <div className="lg:col-span-7">
                  <motion.div {...fadeInUp}>
                     <h2 className="px-4 py-2 bg-primary-900/5 border border-primary-600/20 rounded-md text-[10px] md:text-[12px] font-black uppercase tracking-[0.35em] text-primary-900 drop-shadow-sm inline-block">
                        About the Founder
                     </h2>
                     <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-8 leading-tight">
                        Lord Professor Dr. Kingsley Kebiru Momodu
                     </h3>
                     <div className="w-20 h-1 bg-primary-600 rounded-full mb-6" />

                     <p className="max-w-2xl text-lg text-primary-900/80 leading-relaxed mb-8">
                        Lord Professor Dr. Kingsley Kebiru Momodu is a British-Nigerian scholar, humanitarian, ordained minister of God, and one of the world&apos;s leading voices for global peace. Born in Nigeria and a long-time resident of the United Kingdom, his life has traversed continents and cultures - a journey that has profoundly shaped his conviction that peace is not merely desirable, but achievable through the power of the Gospel of Jesus Christ.
                     </p>

                     <h4 className="font-serif text-2xl font-bold text-primary-900 mb-4">Academic Credentials &amp; Qualifications</h4>
                     <ul className="space-y-4 mb-10 text-primary-900/80 font-medium text-lg border-l-4 border-primary-600 pl-6">
                        <li><strong>PhD in World Peace</strong> - Kennedy University of Baptist, USA (2026)</li>
                        <li><strong>Honorary Doctorate</strong> - Kennedy University of Baptist, USA</li>
                        <li><strong>Honorary Professor of World Peace</strong> - Kennedy University of Baptist, USA</li>
                        <li><strong>Grade 5 GESE with Distinction</strong> - Trinity College London | CEFR Level B1.1 (2019)</li>
                        <li><strong>Certificate of Title: Lord</strong> - Prestige Titles, UK | Motto: <em className="italic">Decens et Honestum</em> (Decent and Honourable)</li>
                     </ul>

                  </motion.div>
               </div>
            </div>
         </section>

         {/* 3.1 His Story Section (Simplified) */}
         <section className="py-24 px-4 md:px-12 bg-primary-900 text-cream relative border-y border-primary-600/20">
            <div className="max-w-7xl mx-auto relative z-10">
               <motion.div {...fadeInUp} className="text-center mb-12">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 tracking-tight">His Story</h3>
                  <div className="w-16 h-0.5 bg-primary-600 mx-auto" />
               </motion.div>

               <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-10">
                  <p className="text-xl md:text-2xl text-cream/90 leading-relaxed font-medium">
                     &ldquo;Born in Nigeria and called by God from an early age, Dr. Momodu&apos;s spiritual journey - shaped by grace, tested by adversity, and anchored in the person of Jesus Christ - did not breed contempt for the world, but deepened his reverence for the divine calling placed on every human life.&rdquo;
                  </p>


                  <p className="text-xl text-cream/80 leading-relaxed">
                     This interior journey, accomplished not in isolation but in community, gave him a perspective that few scholars of peace can claim: the lived experience of walking with God through suffering, displacement, and perseverance - and emerging with a deeper conviction that God&apos;s grace is sufficient for every nation and every soul.He has travelled extensively across Africa, Europe, the Americas, and Asia - sitting in the palaces of the powerful and in the dwellings of the destitute. He has spoken in universities and in prisons, in cathedrals and in community halls.
                  </p>

                  <p className="text-xl text-cream/80 leading-relaxed">
                     He has broken bread with kings and with the homeless. Wherever he has gone, he has carried the same message: that every human being is worthy of dignity. Based in Romford, Essex, London - one of the world&apos;s most culturally diverse cities - he continues to lecture, write, and advocate for the realisation of global peace.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* 3.5 International Presence Photo Strip */}
         <section className="py-16 px-6 md:px-12 bg-cream border-t border-muted-teal/20">
            {/* Managed Image Parameters for Photo Strip */}
            {(() => {
               // Photo 1 (UK Dignitary)
               const p1 = { x: '60%', y: '0%', zoom: '1.2', bright: '1.0' };
               // Photo 2 (UK Celebration) 
               const p2 = { x: '0%', y: '50%', zoom: '1.0', bright: '1.0' };
               // Photo 3 (Community)
               const p3 = { x: 'center', y: 'center', zoom: '1.0', bright: '1.0' };

               return (
                  <div className="max-w-7xl mx-auto">
                     <motion.div {...fadeInUp} className="text-center mb-10">
                        <h3 className="text-[13px] font-bold uppercase tracking-[0.3em] text-muted-teal border border-muted-teal/30 rounded-full px-4 py-2 inline-block mb-4">International Ministry</h3>
                        <p className="text-primary-900/70 font-medium text-2xl max-w-2xl mx-auto mt-8 mb-10">Dr. Momodu has represented the ministry at the highest levels across the United Kingdom and beyond.</p>
                     </motion.div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <motion.div {...fadeInUp} className="group aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative cursor-pointer">
                           <motion.img
                              initial={{ scale: parseFloat(p1.zoom) }}
                              whileHover={{ scale: parseFloat(p1.zoom) * 1.1 }}
                              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                              src="/Dr Haiku Photos/gpm-photo-52.jpeg"
                              alt="Dr. Momodu with UK dignitary"
                              className="w-full h-full object-cover"
                              style={{ objectPosition: `${p1.x} ${p1.y}`, filter: `brightness(${p1.bright})` }}
                           />
                           <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-700 pointer-events-none" />
                        </motion.div>

                        <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="group aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative cursor-pointer">
                           <motion.img
                              initial={{ scale: parseFloat(p2.zoom) }}
                              whileHover={{ scale: parseFloat(p2.zoom) * 1.1 }}
                              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                              src="/Dr Haiku Photos/gpm-photo-50.jpeg"
                              alt="Dr. Momodu at UK celebration event"
                              className="w-full h-full object-cover"
                              style={{ objectPosition: `${p2.x} ${p2.y}`, filter: `brightness(${p2.bright})` }}
                           />
                           <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-700 pointer-events-none" />
                        </motion.div>

                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative cursor-pointer">
                           <motion.img
                              initial={{ scale: parseFloat(p3.zoom) }}
                              whileHover={{ scale: parseFloat(p3.zoom) * 1.1 }}
                              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                              src="/Dr Haiku Photos/gpm-photo-14.jpeg"
                              alt="Dr. Momodu with community members"
                              className="w-full h-full object-cover"
                              style={{ objectPosition: `${p3.x} ${p3.y}`, filter: `brightness(${p3.bright})` }}
                           />
                           <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-700 pointer-events-none" />
                        </motion.div>
                     </div>
                  </div>
               );
            })()}
         </section>

         {/* 4. Vision & Mission (100vh Split Layout) */}

         <section className="grid grid-cols-1 lg:grid-cols-2 bg-cream text-primary-900 border-t border-muted-teal/20">
            {/* Vision */}
            <div className="group flex flex-col justify-center p-12 md:p-24 lg:p-32 border-b lg:border-b-0 lg:border-r border-muted-teal/30 relative overflow-hidden">
               <motion.div {...fadeInUp}>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-teal border border-muted-teal/30 rounded-full px-5 py-2.5 inline-block mb-10 cursor-pointer group-hover:bg-muted-teal group-hover:text-cream transition-all duration-300">
                     Our Vision
                  </h3>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-8 leading-snug">
                     To see every nation on earth experience the peace of God.
                  </h2>
                  <p className="text-lg md:text-xl text-primary-900/70 font-medium leading-relaxed">
                     We envision a world where people relate on the basis of shared humanity - without discrimination, without war, and without violence of any kind. We envision communities healed of division, families restored, and individuals set free to live the lives God designed for them.
                  </p>
               </motion.div>
            </div>

            {/* Mission */}
            <div className="group flex flex-col justify-center p-12 md:p-24 lg:p-32 bg-white relative overflow-hidden">
               <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-teal border border-muted-teal/30 rounded-full px-5 py-2.5 inline-block mb-10 cursor-pointer group-hover:bg-muted-teal group-hover:text-cream transition-all duration-300">
                     Our Mission
                  </h3>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-8 leading-snug">
                     To proclaim God&apos;s Kingdom on Earth.
                  </h2>
                  <p className="text-lg md:text-xl text-primary-900/70 font-medium leading-relaxed mb-8">
                     Through evangelism, healing prayer, global peace advocacy, charity ministry, and the transformation of lives.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* 5. Core Values */}
         <section className="min-h-[92vh] py-24 px-6 md:px-12 bg-primary-900 text-cream">
            <div className="max-w-7xl mx-auto w-full">
               <div className="text-center mb-20">
                  <motion.div {...fadeInUp}>
                     <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-light-sage mb-6">Our Convictions</h2>
                     <h3 className="font-serif text-5xl md:text-6xl font-bold mb-8">Our Core Values</h3>
                  </motion.div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                     { title: "Humanity", desc: "Every person bears the image of God and deserves to be treated with dignity and respect." },
                     { title: "Peace", desc: "We are called to be peacemakers, in our homes, communities, nations, and the world." },
                     { title: "Faith", desc: "We believe in the power of prayer, the authority of Scripture, and the grace of God." },
                     { title: "Compassion", desc: "We serve the poor, the sick, the oppressed, and the forgotten with unconditional love." },
                     { title: "Integrity", desc: "We serve with transparency, accountability, and Godly character in everything we do." },
                     { title: "Unity", desc: "We are interdenominational. We welcome all who seek God, regardless of background." }
                  ].map((value, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                           y: -8,
                           scale: 1.02
                        }}
                        viewport={{ once: true }}
                        transition={{
                           delay: idx * 0.1,
                           duration: 0.3,
                           y: { type: "spring", stiffness: 100, damping: 25 },
                           scale: { duration: 1.2 }
                        }}
                        className="group bg-white p-7 rounded-xl border border-primary-900/5 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(190,154,103,0.15)] hover:border-primary-600/30 transition-all  cursor-default"
                     >
                        <div className="flex flex-col gap-5">
                           <div className="flex justify-between items-start">
                              <div className="w-12 h-12 rounded-full border border-primary-900/10 flex items-center justify-center font-bold font-serif text-lg bg-primary-900/5 text-primary-900 group-hover:bg-primary-600 group-hover:text-primary-900 group-hover:border-primary-600 transition-colors -3duration00">
                                 {idx + 1}
                              </div>
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                           </div>

                           <div>
                              <h4 className="font-serif text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors duration-100">
                                 {value.title}
                              </h4>
                              <p className="text-base font-medium leading-relaxed text-primary-900/70 group-hover:text-primary-900 transition-colors duration-100">
                                 {value.desc}
                              </p>
                           </div>

                           <div className="w-0 h-1 bg-primary-600 rounded-full group-hover:w-full transition-all duration-100 ease-out" />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

      </div>
   );
}
