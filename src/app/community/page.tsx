'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Lightbulb, ArrowRight, UserPlus, Calendar, TrendingUp, ArrowDown } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function CommunityPage() {
  return (
    <div className="bg-cream min-h-screen text-primary-900 font-sans flex flex-col w-full">
      
      {/* 1. Hero Section (100vh) */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2000" 
            alt="Community Gathering" 
            className="w-full h-full object-cover opacity-[0.25] mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary-600)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] bg-light-sage/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-light-sage mb-6">Our Community</h2>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-bold text-cream mb-8 leading-none tracking-tight">
              A Place to Belong.
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-cream/70 mb-12 max-w-2xl mx-auto">
              Where faith meets connection. Growth happens in circles, not just rows.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-light-sage animate-bounce">
            <ArrowDown className="w-8 h-8 opacity-70" />
        </div>
      </section>

      {/* 2. Find Your Circle Section (100vh) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-cream border-b border-muted-teal/20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted-teal mb-4">Small Groups</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-6">Find Your Circle</h3>
            <p className="max-w-xl mx-auto text-primary-900/70 font-medium text-lg">Growth happens in intentional, tight-knit communities. Discover a group where you can truly belong.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Youth Impact", 
                desc: "A vibrant space for the next generation to explore faith, purpose, and global change.",
                icon: Users
              },
              { 
                title: "Men’s Fellowship", 
                desc: "Building strength, character, and brotherhood through the Word and shared mission.",
                icon: TrendingUp
              },
              { 
                title: "Women’s Grace", 
                desc: "A nurturing collective for women to grow in wisdom, support, and spiritual depth.",
                icon: Heart
              }
            ].map((group, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-muted-teal/20 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-cream border border-muted-teal/30 text-primary-600 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <group.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4 text-primary-900">{group.title}</h3>
                <p className="text-primary-900/70 font-medium mb-10 leading-relaxed text-sm">{group.desc}</p>
                <button className="btn-primary mt-auto w-full group-hover:bg-primary-900 transition-colors">
                  Join Group
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stories of Hope (100vh Dense Grid) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-light-sage/10 relative overflow-hidden">
        {/* Background Decorative Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-40 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-20">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 mb-4 bg-white/50 inline-block px-4 py-1 rounded-full border border-primary-600/20">Testimonials</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-6">Stories of Hope</h3>
            <p className="max-w-xl mx-auto text-primary-900/70 font-medium text-lg">Real life. Real change. The tangible impact of grace in the lives of our people.</p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { text: "Finding this community felt like finally coming home. The peace here is tangible.", author: "Sarah M." },
              { text: "The small groups gave me a place to ask hard questions without judgment.", author: "James T." },
              { text: "Global Peace isn't just a name; it's a way of life that changed mine entirely.", author: "Elena R." },
              { text: "I found my purpose through serving in the media team. God is moving!", author: "David K." },
              { text: "My family was welcomed with open arms. We've never felt more supported.", author: "The Benson Family" },
              { text: "The wisdom taught here is practical and deeply spiritual.", author: "Robert P." }
            ].map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="break-inside-avoid p-8 md:p-10 border border-muted-teal/30 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:border-primary-600/50 transition-all duration-300"
              >
                <div className="text-primary-600/20 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="font-serif text-xl font-bold italic mb-6 leading-relaxed text-primary-900/90 whitespace-pre-line">"{story.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-primary-600" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-muted-teal">{story.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Serve the Vision Section (100vh Split) */}
      <section className="min-h-screen flex flex-col lg:flex-row bg-primary-900 text-cream">
        {/* Content Side */}
        <div className="flex-1 flex flex-col justify-center p-12 md:p-24 relative overflow-hidden">
           {/* Decorative Grid */}
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <div className="w-full h-full grid grid-cols-6 grid-rows-6">
                 {[...Array(36)].map((_, i) => <div key={i} className="border border-cream/20" />)}
              </div>
           </div>
           
           <motion.div {...fadeInUp} className="relative z-10">
             <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-light-sage mb-6">Take Action</h2>
             <h3 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">Serve the Vision.</h3>
             <p className="text-cream/70 font-medium text-lg mb-12 leading-relaxed max-w-lg">
               We believe everyone has a unique gift to offer. Use yours to help us build a more peaceful world through faith.
             </p>
             
             <ul className="grid grid-cols-2 gap-y-6 gap-x-8 mb-16">
               {["Media Team", "Worship Arts", "Greeter Guild", "Crisis Support", "Global Missions", "Hospitality"].map((role, i) => (
                 <li key={i} className="flex items-center gap-4 group cursor-pointer border-b border-white/10 pb-4">
                   <div className="w-2 h-2 bg-light-sage rounded-full group-hover:scale-150 group-hover:shadow-[0_0_10px_#8eb7a6] transition-all" />
                   <span className="font-bold tracking-[0.2em] uppercase text-[10px] group-hover:text-light-sage transition-colors">{role}</span>
                 </li>
               ))}
             </ul>
             
             <button className="btn-secondary !border-cream !text-cream hover:!bg-cream hover:!text-primary-900 px-10">
               Explore All Roles
             </button>
           </motion.div>
        </div>

        {/* Abstract Pattern / Image Side */}
        <div className="flex-1 bg-muted-teal/10 relative min-h-[50vh] lg:min-h-0">
           <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-x-0 top-0 h-px bg-cream/50" />
              <div className="absolute inset-y-0 left-0 w-px bg-cream/50" />
              <div className="grid grid-cols-8 h-full">
                 {[...Array(8)].map((_, i) => <div key={i} className="border-r border-cream/20 h-full" />)}
              </div>
           </div>
           <div className="absolute inset-0 flex items-center justify-center p-12 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="font-serif font-black text-[12rem] lg:text-[18rem] opacity-[0.03] select-none pointer-events-none text-cream"
              >
                SERVE
              </motion.div>
           </div>
        </div>
      </section>

      {/* 5. New Here? Start Here Section (100vh) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-cream border-t border-muted-teal/20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 mb-6 bg-light-sage/20 inline-block px-4 py-2 rounded-full border border-primary-600/10">Welcome Section</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-6">New Here? Start Here.</h3>
            <p className="max-w-xl mx-auto text-primary-900/70 font-medium text-lg">Three simple steps to joining our global movement of faith and peace.</p>
          </motion.div>

          <div className="relative mb-20">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-[10%] w-[80%] h-1 bg-primary-600/10 -translate-y-1/2 hidden lg:block rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {[
                { step: "01", title: "Connect", desc: "Fill out a connection card and meet our team.", icon: UserPlus },
                { step: "02", title: "Attend", desc: "Join us for a Sunday gathering or online stream.", icon: Calendar },
                { step: "03", title: "Grow", desc: "Enroll in a Biblical foundation course.", icon: Lightbulb }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="bg-white p-12 rounded-[2rem] border border-muted-teal/20 text-center flex flex-col items-center hover:-translate-y-4 transition-transform duration-500 shadow-xl group"
                >
                  <div className="w-20 h-20 bg-cream text-primary-600 mb-8 rounded-full border border-primary-600/20 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-cream transition-colors duration-500">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-teal mb-4 relative">
                     <span className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-px bg-muted-teal/30" />
                     Step {item.step}
                     <span className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-px bg-muted-teal/30" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-primary-900 mb-6">{item.title}</h3>
                  <p className="text-primary-900/70 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeInUp} className="flex justify-center">
            <Link href="/plan-a-visit" className="group flex items-center gap-4 bg-primary-900 text-cream px-10 py-5 rounded-xl hover:bg-primary-600 shadow-xl transition-all font-bold uppercase tracking-[0.2em] text-xs">
              Begin Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
