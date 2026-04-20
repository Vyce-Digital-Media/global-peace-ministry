'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const leadPastors = [
  {
    name: "Dr. Elena Vance",
    role: "Senior Global Pastor",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    quote: "Leadership is the quiet act of serving others until they outgrow their need for you."
  },
  {
    name: "Reverend Simon Peter",
    role: "Executive Director of Ministries",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    quote: "We don't build monuments; we build people. That is the true architecture of faith."
  }
];

const elders = [
  "Amara Okoro - Chairperson",
  "David Chen - Financial Stewardship",
  "Sarah Jenkins - Community Outreach",
  "Marcus Thorne - Global Missions",
  "Lydia Kim - Family & Youth Programs",
  "James O'Connor - Theological Ethics"
];

const directors = [
  { group: "Worship & Arts", name: "Gabriel Soto" },
  { group: "Global Missions", name: "Dr. Hassan Fayed" },
  { group: "Women's Grace", name: "Miriam Thorne" },
  { group: "Men's Fellowship", name: "David Alaba" },
  { group: "Youth Impact", name: "Chloe Jenkins" },
  { group: "Pastoral Care", name: "Rev. Thomas Gray" },
  { group: "Operations", name: "Samantha Lee" },
  { group: "Media & Tech", name: "Julian Rossi" }
];

export default function LeadershipPage() {
  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">
      
      {/* 1. Hero Section (100vh) */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-cream overflow-hidden">
        {/* Abstract Background Element and Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80&w=2000" 
            alt="Leadership Theme" 
            className="w-full h-full object-cover opacity-[0.15] mix-blend-multiply"
          />
        </div>
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-light-sage/20 blur-[120px] z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
          >
             <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-muted-teal mb-6">Our Stewards</h2>
             <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-bold text-primary-900 mb-8 leading-none tracking-tight">
                Led by Faith.
             </h1>
             <p className="text-xl md:text-2xl font-medium leading-relaxed text-primary-900/70 mb-12 max-w-2xl mx-auto">
                Meet the men and women dedicated to serving our global community with integrity, vision, and unbound grace.
             </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary-600 animate-bounce">
            <ArrowDown className="w-8 h-8 opacity-70" />
        </div>
      </section>

      {/* 2. Lead Pastors Spotlight (100vh) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-primary-900 text-cream relative">
        <div className="max-w-7xl mx-auto w-full">
           <div className="text-center mb-20">
              <motion.div {...fadeInUp}>
                 <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-light-sage mb-4">Visionaries</h2>
                 <h3 className="font-serif text-5xl md:text-6xl font-bold">Senior Pastoral Team</h3>
              </motion.div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {leadPastors.map((pastor, idx) => (
                 <motion.div 
                    key={idx}
                    {...fadeInUp}
                    transition={{ delay: idx * 0.2 }}
                    className="group"
                 >
                    <div className="relative aspect-[3/4] w-full mb-8 overflow-hidden rounded-2xl shadow-2xl">
                       <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                       <img 
                          src={pastor.img} 
                          alt={pastor.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                       />
                       {/* Quote Overlay */}
                       <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-primary-900/90 to-transparent z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="font-serif text-lg italic text-cream/90 leading-relaxed">
                             &quot;{pastor.quote}&quot;
                          </p>
                       </div>
                    </div>
                    <div className="text-center md:text-left">
                       <h3 className="font-serif text-4xl font-bold text-cream mb-2">{pastor.name}</h3>
                       <p className="text-light-sage/80 uppercase tracking-[0.2em] font-bold text-sm">{pastor.role}</p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. Elders & Board (100vh Grid) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-white border-b border-muted-teal/20">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center">
           <div className="flex-1 text-center lg:text-left">
              <motion.div {...fadeInUp}>
                 <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 border border-primary-600/30 rounded-full px-4 py-2 inline-block mb-6 bg-cream">Governance</h2>
                 <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-8 leading-snug">The Board of Elders</h3>
                 <div className="w-16 h-1 bg-primary-600 rounded-full mb-8 mx-auto lg:mx-0" />
                 <p className="text-lg text-primary-900/70 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                    Our elders provide spiritual oversight, ethical governance, and strategic accountability to ensure our ministry remains faithful to its core mission and values.
                 </p>
              </motion.div>
           </div>
           
           <div className="flex-1 w-full relative">
              <div className="absolute -inset-8 bg-cream/50 rounded-[3rem] -z-10" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {elders.map((elder, idx) => {
                    const [name, role] = elder.split(' - ');
                    return (
                       <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white p-6 rounded-2xl border border-muted-teal/20 shadow-sm hover:shadow-md transition-shadow hover:border-primary-600/30 flex flex-col"
                       >
                          <span className="font-serif text-xl font-bold text-primary-900 mb-1">{name}</span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-teal">{role}</span>
                       </motion.div>
                    );
                 })}
              </div>
           </div>
        </div>
      </section>

      {/* 4. Ministry Directors (100vh Dense List) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-cream">
         <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-20 max-w-3xl mx-auto">
               <motion.div {...fadeInUp}>
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted-teal mb-6">Operations</h2>
                  <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-8">Ministry Directors</h3>
                  <p className="text-lg text-primary-900/70 font-medium leading-relaxed">
                     The dedicated leaders who manage the day-to-day operations of our various global impact initiatives and local community groups.
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
               {directors.map((dir, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.05 }}
                     className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-muted-teal/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                  >
                     <div className="w-16 h-16 rounded-full bg-light-sage/20 text-primary-600 flex items-center justify-center font-serif text-2xl font-bold mb-4 group-hover:bg-primary-600 group-hover:text-cream transition-colors duration-300">
                        {dir.name.charAt(0)}
                     </div>
                     <h4 className="font-mono text-[10px] uppercase font-bold tracking-[0.2em] text-muted-teal mb-2">{dir.group}</h4>
                     <h3 className="font-serif text-xl font-bold text-primary-900 leading-tight mb-4">{dir.name}</h3>
                     <a href={`mailto:hello@globalpeace.com`} className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary-900/50 hover:text-primary-600 transition-colors">
                        <Mail className="w-3 h-3" /> Contact
                     </a>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
