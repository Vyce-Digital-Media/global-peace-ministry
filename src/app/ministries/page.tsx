'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Globe, Heart, Users, BookOpen, Scroll, HandHeart } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const fiveFoldMinistries = [
  {
    title: "Global Peace Advocacy & Prayers for the World",
    desc: "At the heart of everything we do is a burning conviction: that global peace is possible. We pray for the world daily — for nations in conflict, for governments and leaders, for refugees and displaced peoples, and for the ordinary men, women, and children who bear the weight of war, injustice, and division.\n\nWe organise and participate in international prayer events, peace conferences, and awareness campaigns. Through the academic and theological work of our founder, we contribute to the global conversation on what it takes to build lasting peace.",
    number: "01",
    verse: "\"Pray without ceasing. In everything give thanks.\" — 1 Thessalonians 5:17"
  },
  {
    title: "Charity Work & Foundation — Helping the Less Privileged",
    desc: "We believe that faith without works is dead. Our charity arm reaches out to the most vulnerable members of our communities — the homeless, the hungry, the sick, children in need, widows, and orphans — providing practical support, food relief, financial assistance, and emotional care.\n\nIf you wish to support our charitable work or partner with us to reach more people in need, please visit our Contact page or Donate section.",
    number: "02",
    image: "/Dr Haiku Photos/ministry-new.jpeg",
    imageConfig: { x: '50%', y: '50%', zoom: '1.0', bright: '1.0' }
  },
  {
    title: "Preaching, Healing Prayer & the Prophetic",
    desc: "We are a ministry of the Word and the Spirit. Our meetings include powerful, Spirit-filled preaching from the Scriptures, prayer for physical and emotional healing, and prophetic ministry — where God speaks specifically into the lives of individuals, families, and situations.\n\nOur meetings are interdenominational, welcoming people of all Christian backgrounds. They typically last between 2 to 5 hours, depending on the need of the gathering. You can attend our meetings or request one-on-one ministry simply as you are — God meets you where you are.",
    number: "03",
    verse: "\"To one there is given through the Spirit a message of wisdom, to another a message of knowledge... to another miraculous powers, to another prophecy...\" — 1 Corinthians 12:8-10"
  },
  {
    title: "Bible Studies, Christian Living & Discipleship",
    desc: "We run regular Bible study sessions designed to help believers grow in their knowledge of the Scriptures and their personal relationship with God. Topics include foundational Christian doctrines, practical Christian living, understanding the gifts of the Spirit, prayer and fasting, the character of Christ, and how to navigate life's challenges with Biblical wisdom.\n\nOur discipleship approach is warm, accessible, and suited to all levels — from new believers to mature Christians seeking to deepen their walk with God.",
    number: "04"
  },
  {
    title: "Global Evangelism & Help Ministry",
    desc: "The Great Commission calls us to go into all the world. Dr. Momodu has preached and ministered across the United Kingdom, Nigeria, Italy, and many other nations. Our ministry is committed to taking the Good News of Jesus Christ to every people group, every culture, and every corner of the earth.\n\nWe also operate a Help Ministry — a practical arm of our evangelism that meets the immediate needs of people we encounter on the mission field, recognising that people are more ready to receive the Gospel when their physical needs are first acknowledged.",
    number: "05",
    image: "/Dr Haiku Photos/gpm-photo-30.jpeg",
    imageConfig: { x: '0%', y: '30%', zoom: '1.0', bright: '1.0' }
  }
];

export default function MinistriesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 4 Image Parameters for Hero Section (Desktop)
  const imageX = 'center';        // Horizontal Position (0% to 100%)
  const imageY = 'top';           // Vertical Position (0% to 100% or 'center')
  const imageZoom = '1.4';        // Scale (1.0 = original)
  const imageBrightness = '0.5';  // Brightness (0.0 to 1.0)

  // MOBILE ONLY PARAMETERS
  const mX = 'center';        // Horizontal Position
  const mY = 'center';        // Vertical Position
  const mZoom = '1.0';        // Scale
  const mBright = '0.5';      // Brightness

  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">

      {/* 1. Hero Section (100vh) */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-primary-900 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/Dr Haiku Photos/hahaha.webp"
            alt="Dr. Momodu preaching"
            className="w-full h-full object-cover mix-blend-overlay"
            style={{
              objectPosition: isMobile ? `${mX} ${mY}` : `${imageX} ${imageY}`,
              scale: isMobile ? mZoom : imageZoom,
              filter: `brightness(${isMobile ? mBright : imageBrightness})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-9xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.5em] text-light-sage/60 mb-8">OUR MINISTRY VALUES & ACTIVITIES</h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-10 leading-[1.1]">
              Five Fold Ministry <br className="hidden md:block" /> & Spiritual Gift In Operation.
            </h1>
            <div className="flex flex-col items-center gap-4">
              <div className="h-px w-20 bg-primary-600/50" />
              <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-primary-600">
                Ephesians 4:11 • 1 Corinthians 12:7-11
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-light-sage animate-bounce">
          <ArrowDown className="w-8 h-8 opacity-70" />
        </div>
      </section>

      {/* 2. Ministries Sections */}
      {fiveFoldMinistries.map((item, i) => (
        <section
          key={i}
          className={`min-h-screen w-full flex items-center py-24 px-6 md:px-12 relative overflow-hidden ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          {/* Section Number Background (shifted to right to accommodate left-aligned text) */}
          <div className="absolute top-1/2 right-[5%] -translate-y-1/2 font-serif text-[20rem] md:text-[30rem] lg:text-[40rem] font-bold text-primary-900/[0.03] select-none pointer-events-none z-0">
            {item.number}
          </div>

          <div className="max-w-[1400px] mx-auto w-full relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center`}>

              {/* Content Column (Always first, always left-aligned) */}
              <motion.div
                {...fadeInUp}
                className={`flex flex-col gap-6 ${item.image ? 'lg:col-span-7' : 'lg:col-span-10'}`}
              >
                <div className="flex items-center gap-4 border-b border-primary-900/10 pb-6 mb-2">
                  <div className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-900">Ministry {item.number}</div>
                </div>

                <h3 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary-900 mb-4 leading-tight">
                  {item.title}
                </h3>

                <div className="space-y-6">
                  {item.desc.split('\n\n').map((para, idx) => (
                    <p key={idx} className="text-lg md:text-xl text-primary-900/80 font-medium leading-relaxed max-w-4xl">
                      {para}
                    </p>
                  ))}
                </div>

                {item.verse && (
                  <div className="mt-8 bg-cream md:bg-white/50 p-8 border-l-4 border-primary-600 font-serif italic text-xl text-primary-900/70 shadow-sm rounded-r-xl max-w-3xl">
                    {item.verse}
                  </div>
                )}
              </motion.div>

              {/* Image Column */}
              {item.image && (
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-5 relative"
                >
                  <div className="aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative group bg-primary-900/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      style={{
                        objectPosition: item.imageConfig ? `${item.imageConfig.x} ${item.imageConfig.y}` : 'center',
                        scale: item.imageConfig ? item.imageConfig.zoom : '1.0',
                        filter: item.imageConfig ? `brightness(${item.imageConfig.bright})` : 'none'
                      }}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]" />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}
