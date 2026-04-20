'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
   initial: { opacity: 0, y: 30 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.8 }
};

const events = [
   {
      title: "Global Peace Summit 2026",
      date: "Dec 10 - Dec 14",
      time: "All Day",
      location: "Stockholm Center / Virtual",
      desc: "Our annual gathering of minds. A series of world-class lectures, workshops, and meditation sessions.",
      img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1200",
      featured: true
   },
   {
      title: "Healing Circle: Inner Silence",
      date: "Dec 18",
      time: "6:00 PM - 7:30 PM",
      location: "Sanctuary Hall",
      desc: "A focused gathering on deep meditation and collective healing practices.",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce682b1?auto=format&fit=crop&q=80&w=1200",
      featured: false
   },
   {
      title: "Youth Dialogues: Future Peace",
      date: "Jan 03",
      time: "10:00 AM",
      location: "Global Youth Wing",
      desc: "Empowering young leaders to discuss and initiate peace projects in their local schools.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
      featured: false
   },
   {
      title: "Community Action: City Renew",
      date: "Jan 12",
      time: "8:00 AM - 1:00 PM",
      location: "Downtown Plaza",
      desc: "A city-wide initiative to clean public spaces and distribute necessary winter supplies.",
      img: "https://images.unsplash.com/photo-1593113544332-ceec88fc885e?auto=format&fit=crop&q=80&w=1200",
      featured: false
   }
];

export default function EventsPage() {
   const featuredEvent = events.find(e => e.featured);
   const regularEvents = events.filter(e => !e.featured);

   return (
      <div className="flex flex-col w-full bg-cream min-h-screen">

         {/* 1. Hero Section (100vh) */}
         <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-cream overflow-hidden">
            {/* Abstract Background Elements and  Image */}
            <div className="absolute inset-0 z-0">
               <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
                  alt="Event Gathering"
                  className="w-full h-full object-cover opacity-[0.15] mix-blend-multiply"
               />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-900/10 z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary-900/5 z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-muted-teal/5 z-0 pointer-events-none bg-primary-900/[0.02]" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
               >
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-muted-teal mb-6">Gather With Us</h2>
                  <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-bold text-primary-900 mb-8 leading-none tracking-tight">
                     Upcoming Events.
                  </h1>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-primary-900/70 mb-12 max-w-2xl mx-auto">
                     Join us in person or online for transformative experiences designed to deepen faith and connection.
                  </p>
               </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary-600 animate-bounce">
               <ArrowDown className="w-8 h-8 opacity-70" />
            </div>
         </section>

         {/* 2. Featured Event Spotlight (100vh) */}
         {featuredEvent && (
            <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-primary-900 relative">
               <div className="max-w-7xl mx-auto w-full relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     {/* Event Details */}
                     <div className="order-2 lg:order-1">
                        <motion.div {...fadeInUp}>
                           <div className="inline-flex items-center gap-3 border border-light-sage/30 bg-primary-900/50 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-light-sage mb-8">
                              <span className="w-2 h-2 rounded-full bg-light-sage animate-pulse" />
                              Featured Event
                           </div>
                           <h2 className="font-serif text-5xl md:text-7xl font-bold text-cream mb-8 leading-tight">
                              {featuredEvent.title}
                           </h2>
                           <p className="text-xl text-cream/70 leading-relaxed mb-12 max-w-lg">
                              {featuredEvent.desc}
                           </p>

                           <div className="space-y-6 mb-12 bg-white/5 p-8 rounded-2xl border border-white/10">
                              <div className="flex items-center gap-6">
                                 <div className="w-12 h-12 rounded-full bg-light-sage/20 flex items-center justify-center shrink-0">
                                    <Calendar className="w-5 h-5 text-light-sage" />
                                 </div>
                                 <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/50 mb-1">Date</p>
                                    <p className="font-bold text-cream text-lg">{featuredEvent.date}</p>
                                 </div>
                              </div>
                              <div className="flex items-center gap-6">
                                 <div className="w-12 h-12 rounded-full bg-light-sage/20 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-light-sage" />
                                 </div>
                                 <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/50 mb-1">Time</p>
                                    <p className="font-bold text-cream text-lg">{featuredEvent.time}</p>
                                 </div>
                              </div>
                              <div className="flex items-center gap-6">
                                 <div className="w-12 h-12 rounded-full bg-light-sage/20 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-light-sage" />
                                 </div>
                                 <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/50 mb-1">Location</p>
                                    <p className="font-bold text-cream text-lg">{featuredEvent.location}</p>
                                 </div>
                              </div>
                           </div>

                           <button className="w-full sm:w-auto btn-primary bg-cream text-primary-900 hover:bg-light-sage transition-colors border-none text-center justify-center">
                              Register Now
                           </button>
                        </motion.div>
                     </div>

                     {/* Event Image */}
                     <div className="order-1 lg:order-2">
                        <motion.div
                           {...fadeInUp}
                           className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative group"
                        >
                           <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-1000" />
                           <img
                              src={featuredEvent.img}
                              alt={featuredEvent.title}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                           />
                        </motion.div>
                     </div>
                  </div>
               </div>
            </section>
         )}

         {/* 3. Monthly Calendar (100vh List) */}
         <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto w-full">
               <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-muted-teal/30 pb-10">
                  <motion.div {...fadeInUp}>
                     <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 mb-4">Calendar</h2>
                     <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900">Upcoming Gatherings</h3>
                  </motion.div>
                  <motion.div {...fadeInUp}>
                     <p className="text-lg text-primary-900/60 max-w-sm">Find your place in our community. All are welcome.</p>
                  </motion.div>
               </div>

               <div className="space-y-6">
                  {regularEvents.map((event, i) => (
                     <motion.div
                        key={i}
                        {...fadeInUp}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-cream/30 hover:bg-cream border border-muted-teal/10 hover:border-muted-teal/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-300"
                     >
                        {/* Date Block */}
                        <div className="w-full md:w-48 shrink-0 flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-muted-teal/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-shadow">
                           <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-teal mb-2">{event.date.split(' ')[0]}</span>
                           <span className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-2 leading-none">{event.date.split(' ')[1] || '••'}</span>
                           <span className="text-xs font-bold uppercase tracking-widest text-primary-600 border-t border-muted-teal/20 pt-2 mt-2 w-full text-center">{event.time}</span>
                        </div>

                        {/* Details */}
                        <div className="flex-1 text-center md:text-left">
                           <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-teal mb-4 bg-white px-3 py-1 rounded-full border border-muted-teal/20">
                              <MapPin className="w-3 h-3" /> {event.location}
                           </div>
                           <h4 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4 leading-tight">{event.title}</h4>
                           <p className="text-primary-900/70 text-lg leading-relaxed max-w-2xl">{event.desc}</p>
                        </div>

                        {/* Action */}
                        <div className="shrink-0 w-full md:w-auto">
                           <Link href="/contact" className="w-full md:w-auto flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-900 border border-primary-900/20 px-8 py-4 rounded-xl hover:bg-primary-900 hover:text-cream transition-colors duration-300">
                              Details <ArrowRight className="w-4 h-4" />
                           </Link>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

      </div>
   );
}
