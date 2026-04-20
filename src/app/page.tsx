'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Globe, BookOpen, Users, MapPin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 4 Image Parameters for Hero Section (Desktop)
  const imageX = '0%';        // Horizontal Position (0% to 100%)
  const imageY = '75%';     // Vertical Position (0% to 100% or 'center')
  const imageZoom = '1.4';     // Scale (1.0 = original, 1.1 = slightly zoomed)
  const imageBrightness = '0.7'; // Brightness (0.0 to 1.0)

  // MOBILE ONLY PARAMETERS
  const mX = 'center';        // Horizontal Position
  const mY = 'center';        // Vertical Position
  const mZoom = '1.0';        // Scale
  const mBright = '0.7';      // Brightness

  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">

      {/* 1. Hero Section — Full-screen Cinematic */}
      <section className="relative min-h-[92vh] flex flex-col justify-center w-full overflow-hidden bg-primary-900 mt-10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Dr Haiku Photos/hahaha.webp"
            alt="Global Peace Ministry - Dr. Momodu preaching"
            className="w-full h-full object-cover grayscale brightness-[1]"
            style={{
              objectPosition: isMobile ? `${mX} ${mY}` : `${imageX} ${imageY}`,
              scale: isMobile ? mZoom : imageZoom
            }}
          />
          {/* Neutral Black overlays for true B&W look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-primary-600" />
              <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.4em] text-primary-600">
                Welcome to
              </span>
              <div className="h-px w-10 bg-primary-600" />
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[1.05] tracking-tight drop-shadow-2xl">
              Global Peace<br />Ministry
            </h1>



            {/* Tagline */}
            <p className="font-serif text-xl md:text-3xl text-white/80 italic mb-10 max-w-2xl leading-relaxed">
              &quot;Global Peace Is Possible&quot;
            </p>

            {/* Mission Statements */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-2 text-white/60 text-sm md:text-base font-medium tracking-widest opacity-70">
              <span>People Should Relate on the Basis of Humanity</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-12 text-white/60 text-sm md:text-base font-medium uppercase tracking-widest">
              <span>No Discrimination</span>
              <span className="hidden sm:block text-primary-600">✦</span>
              <span>No Wars</span>
              <span className="hidden sm:block text-primary-600">✦</span>
              <span>No Killings</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/ministries"
                className="bg-white text-primary-900 border-2 border-white px-10 py-4 rounded-sm font-bold transition-all duration-300 hover:bg-transparent hover:text-white text-center uppercase tracking-widest text-[13px] shadow-lg"
              >
                Explore Our Ministry
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-white border-2 border-white/30 px-10 py-4 rounded-sm font-bold transition-all duration-300 hover:border-white hover:bg-white/10 text-center uppercase tracking-widest text-[13px]"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Welcome Message */}
      <section className="min-h-[92vh] flex flex-col justify-center px-6 md:px-12 bg-cream border-b border-light-sage/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
          <motion.div {...fadeInUp}>
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-primary-600/30" />
                <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-primary-600">Welcome</span>
                <div className="h-[1px] w-8 bg-primary-600/30" />
              </div>
              <h2 className="flex items-center justify-center gap-2 text-lg md:text-xl text-primary-900/60 font-serif italic max-w-3xl">
                Global Peace Ministry
              </h2>
              <div className="font-serif text-2xl md:text-5xl font-bold text-primary-900 mb-4 tracking-tight">
                <span>A global movement of<br /> faith, compassion, and action.</span>
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-primary-600 rounded-full" />
            </div>
            <p className="text-xl md:text-2xl text-primary-900/70 font-medium max-w-4xl mx-auto mb-6">
              We believe that every human being is created with inherent dignity, that wars can be ended, and that nations can live in harmony. Led by Lord Professor Dr. Kingsley Kebiru Momodu, our ministry spans continents, serving communities in the United Kingdom, Nigeria, Italy, and across the world.
            </p>
            <p className="text-xl md:text-2xl text-primary-900/70 font-medium max-w-4xl mx-auto">
              Whether you are searching for spiritual guidance, healing prayers, Bible teaching, or simply the hope that the world can be a better place - you are in the right place. God has a plan for your life and for the world. We invite you to discover it with us.
            </p>
          </motion.div>
        </div>

        {/* Infinite Looping People Image Marquee */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 pointer-events-none opacity-40 mix-blend-multiply">
          <div className="flex w-max animate-marquee">
            {/* Block 1 */}
            <div className="flex shrink-0">
              <img src="/peoples_line.webp" alt="Community" className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto max-w-none" />
              <img src="/peoples_line.webp" alt="Community" className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto max-w-none" />
            </div>
            {/* Block 2 (identical duplicate to ensure perfect seamless loop) */}
            <div className="flex shrink-0">
              <img src="/peoples_line.webp" alt="Community" className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto max-w-none" />
              <img src="/peoples_line.webp" alt="Community" className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto max-w-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid (NEW) */}
      <section className="min-h-screen flex flex-col justify-center py-12 md:py-20 px-6 md:px-12 bg-primary-900 text-cream">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-light-sage mb-4">OUR MINISTRY VALUES & ACTIVITIES</h2>
              <h3 className="font-serif text-3xl md:text-5xl font-bold text-cream max-w-3xl mx-auto">Five Fold Ministry And Spiritual Gift In Operation.</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-primary-600 mt-4">Ephesians 4:11 • 1 Corinthians 12:7-11</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Globe, title: "Global Peace & Prayer", desc: "Promoting world peace through prayer, advocacy, and intercession for all nations." },
              { icon: Heart, title: "Charity & Foundation", desc: "Empowering the less privileged through practical charity work and community development." },
              { icon: Users, title: "Healing & Deliverance", desc: "Preaching the Gospel, praying for the sick, and ministering healing and prophetic messages." },
              { icon: BookOpen, title: "Bible Studies & Discipleship", desc: "In-depth Bible teaching, Christian living training, and growing disciples of Christ." },
              { icon: MapPin, title: "Global Evangelism", desc: "Taking the message of Christ to every corner of the world — Africa, Europe, the Americas, and Asia." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group flex flex-col items-center text-center p-6 md:p-8 border border-light-sage/10 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 hover:border-light-sage/40 hover:-translate-y-2 transition-all duration-500 cursor-default shadow-lg hover:shadow-xl hover:shadow-primary-900/30"
              >
                <div className="w-14 h-14 rounded-xl bg-light-sage/10 flex items-center justify-center mb-6 border border-light-sage/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <value.icon className="w-7 h-7 text-light-sage" />
                </div>
                <h4 className="font-serif text-2xl font-bold mb-3 text-cream group-hover:text-white transition-colors">{value.title}</h4>
                <p className="text-cream/70 text-[15px] leading-relaxed group-hover:text-cream transition-colors">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Authority & Daily Word (Combined - 100vh) */}
      <section className="min-h-[92vh] flex flex-col justify-center py-20 px-6 md:px-12 bg-light-sage/10 relative overflow-hidden">
        {/* Background Decorative Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white opacity-40 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto w-full space-y-24">
          {/* The Daily Word */}
          <div className="relative max-w-4xl mx-auto">
            {/* Floral Frame Image behind the box */}
            <motion.img
              initial={{ "--mask-size": "0%", opacity: 0 } as any}
              whileInView={{ "--mask-size": "300%", opacity: 0.6 } as any}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 10, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src="/vecteezy_isolated-line-flower-frame-icon-leaf-floral-border-divider_33078035.jpg"
              alt="Floral Frame"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[240%] md:w-[260%] md:h-[320%] object-contain mix-blend-multiply pointer-events-none"
              style={{
                WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 60%)',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'var(--mask-size)',
                maskSize: 'var(--mask-size)'
              }}
            />

            <motion.div
              {...fadeInUp}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-muted-teal/10 border border-muted-teal/20 relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
            >
              <div className="flex flex-col justify-center items-center px-6 py-4 bg-cream rounded-xl border border-muted-teal/30 shadow-inner text-primary-900 shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-teal mb-1">Scripture of</span>
                <span className="font-serif text-3xl font-bold">Peace</span>
              </div>
              <div className="flex-1">
                <p className="font-serif text-primary-900 text-xl md:text-3xl font-bold italic mb-3 leading-snug">
                  &quot;Blessed are the peacemakers, for they shall be called children of God.&quot;
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="h-px bg-primary-600/30 w-12" />
                  <p className="text-primary-900/80 font-medium tracking-wider uppercase text-[10px]">
                    Matthew 5:9
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 4. Featured Book Section */}
      <section className="min-h-[92vh] flex items-center justify-center py-24 px-6 md:px-12 bg-cream overflow-hidden border-t border-primary-900/5">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book Image Container */}
          <motion.div {...fadeInUp} className="relative aspect-[3/4] max-w-sm mx-auto w-full group order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary-900/10 rounded-lg -rotate-3 transition-transform duration-700 group-hover:-rotate-6" />
            <div className="relative w-full h-full bg-white shadow-2xl rounded-sm border border-black/5 overflow-hidden ring-8 ring-white/50">
              <img
                src="/Dr Haiku Photos/gpm-photo-54.jpeg"
                alt="Lord Professor Dr. Kingsley Kebiru Momodu"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col order-1 lg:order-2 ">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary-600 mb-6">Featured Publication</span>

            <h2 className="text-primary-900 font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Author: Lord Professor <br /> Dr. Kingsley Kebiru Momodu
            </h2>

            <div className="h-1 w-20 bg-primary-600 mb-8" />

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4 italic">
              WORLD PEACE - &apos;Global Peace Is Possible&apos;
            </h3>
            <p className="text-primary-900/70 text-sm font-bold uppercase tracking-widest mb-8">
              Published by Nexus Stories Publication, India, 2026.
            </p>

            <p className="text-lg md:text-xl text-primary-900/80 font-medium leading-relaxed mb-6 max-w-2xl">
              This groundbreaking book draws on doctoral research, personal testimony, and interviews across multiple nations to argue that global peace is not merely an ideal -it is a human capacity waiting to be unleashed.
            </p>

            <div className="flex flex-wrap items-center gap-10 pt-4 border-t border-primary-900/10">
              <div className="flex flex-col">
                <span className="text-[13px] font-bold uppercase tracking-widest text-primary-900/50 mb-1">Price</span>
                <span className="text-xl font-bold text-primary-900 font-sans">£12.99</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold uppercase tracking-widest text-primary-900/50 mb-1">Availability</span>
                <span className="text-sm font-bold text-primary-900 uppercase tracking-wider text-balance">Nexus Stores</span>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">

              <Link href="/" target="_blank" className="btn-primary px-10 hover:bg-transparent hover:text-primary-900">
                ORDER YOUR COPY
              </Link>
              <Link href="/book" className="text-primary-900 font-bold uppercase tracking-[0.2em] text-sm hover:text-primary-600 transition-colors">
                [ READ MORE ]
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-h-[90vh] flex flex-col justify-center py-20 px-6 md:px-12 bg-light-sage/20 border-t border-muted-teal/30">
        <div className="max-w-7xl mx-auto w-full mt-30">
          <motion.div
            {...fadeInUp}
            className="bg-white border border-primary-600/20 rounded-3xl p-10 md:p-16 lg:p-24 shadow-2xl shadow-primary-900/10 relative overflow-visible flex flex-col md:flex-row items-center justify-between gap-12"
          >
            {/* Content Side */}
            <div className="flex-1 text-left relative z-10 max-w-2xl">
              <div className="inline-block mb-8">
                <h2 className="px-4 py-2 bg-primary-900/5 border border-primary-600/20 rounded-md text-[10px] md:text-[12px] font-black uppercase tracking-[0.35em] text-primary-900 drop-shadow-sm inline-block">
                  Are you in need of prayer or counselling?
                </h2>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-8 leading-tight">
                We are here for you.<br className="hidden md:block" /> Reach out to us today.
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 w-full">
                <Link href="/prayer" className="w-full sm:w-auto text-center group flex items-center justify-center gap-4 bg-primary-900 text-cream px-10 py-5 rounded-lg hover:bg-primary-600 transition-colors duration-500 font-bold uppercase tracking-[0.2em] text-sm shadow-lg hover:bg-transparent hover:text-primary-900">
                  Request Prayer
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="w-full sm:w-auto text-center group flex items-center justify-center gap-4 border-2 border-primary-900 text-primary-900 px-10 py-5 rounded-lg hover:bg-primary-900 hover:text-white transition-colors duration-500 font-bold uppercase tracking-[0.2em] text-sm">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Image Side - Sticking out from top, touched at bottom */}
            <img
              src="/Dr Haiku Photos/gpm-photo-33-bgrm.png"
              alt="Dr. Momodu"
              className="hidden lg:block absolute bottom-0 right-10 h-[120%] max-w-none z-30 object-contain object-bottom drop-shadow-[0_5px_8px_rgba(0,0,0,0.65)]"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
