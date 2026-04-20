'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Phone, Mail, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
   initial: { opacity: 0, y: 30 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.8 }
};

export default function ContactPage() {
   const [isMobile, setIsMobile] = useState(false);
   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
   const [message, setMessage] = useState('');

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   // 4 Image Parameters for Hero Section (Desktop)
   const imageX = 'center';        // Horizontal Position
   const imageY = '20%';        // Vertical Position
   const imageZoom = '1.0';        // Scale
   const imageBrightness = '0.4';  // Brightness

   // MOBILE ONLY PARAMETERS
   const mX = 'center';        // Horizontal Position
   const mY = 'center';        // Vertical Position
   const mZoom = '1.0';        // Scale
   const mBright = '0.4';      // Brightness

   // Manage section height here (e.g., "py-12", "py-24", "h-screen", "min-h-[600px]")
   const sectionPadding = "py-10";

   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus('loading');
      setMessage('');

      const formData = new FormData(event.currentTarget);
      
      // Access key from client-side environment variable
      const accessKey = process.env.NEXT_PUBLIC_FORM_API;

      if (!accessKey) {
         console.error('Environment Error: NEXT_PUBLIC_FORM_API is not defined.');
         setStatus('error');
         setMessage('Configuration Error: The form setup is incomplete. Please restart your development server (npm run dev) to load the new environment variables.');
         return;
      }

      formData.append('access_key', accessKey);

      try {
         // Log the submission (without the key) for debugging
         console.log('Submitting form to Web3Forms...');

         const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
         });

         const data = await response.json();

         if (response.ok && data.success) {
            setStatus('success');
            setMessage('Thank you! Your message has been sent successfully.');
            (event.target as HTMLFormElement).reset();
         } else {
            console.error('Web3Forms API Error:', data);
            setStatus('error');
            setMessage(data.message || `Error (${response.status}): Failed to send message.`);
         }
      } catch (error) {
         console.error('Submission Error:', error);
         setStatus('error');
         setMessage('Submission Error: Could not connect to Web3Forms. This can happen if an ad-blocker is blocking the request. Please disable ad-blockers for this site or check your internet connection.');
      }
   };

   return (
      <div className="flex flex-col w-full bg-cream min-h-screen">

         {/* 1. Hero / Quick Info (100vh) */}
         <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-primary-900 overflow-hidden pt-32 pb-12">
            <div className="absolute inset-0 z-0">
               <img
                  src="/Dr Haiku Photos/gpm-photo-01.jpeg"
                  alt="Contact Us"
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale"
                  style={{
                     objectPosition: isMobile ? `${mX} ${mY}` : `${imageX} ${imageY}`,
                     scale: isMobile ? mZoom : imageZoom,
                     filter: `brightness(${isMobile ? mBright : imageBrightness}) grayscale(1)`
                  }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-9xl mx-auto flex flex-col items-center">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
               >
                  <h2 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-light-sage mb-4 md:mb-6">Get In Touch</h2>
                  <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 md:mb-8 leading-tight">
                     Reach Out Today.
                  </h1>
                  <p className="text-md md:text-xl font-medium leading-relaxed text-cream/70 mb-10 md:mb-16 max-w-9xl mx-auto">
                     We would love to hear from you. Whether you have a question, wish to request prayer, <br />would like to partner with the ministry, or simply want to know more.
                  </p>

                  {/* Quick Connect Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1.5fr] gap-6 w-full text-left max-w-9xl">
                     <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-start gap-5">
                        <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center shrink-0">
                           <Phone className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                           <h4 className="font-bold text-cream mb-2 text-sm md:text-base">Phone &amp; WhatsApp</h4>
                           <p className="text-base md:text-lg text-cream/70 underline underline-offset-4">+44-7453387868</p>
                        </div>
                     </div>

                     <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center shrink-0">
                              <Mail className="w-6 h-6 text-primary-600" />
                           </div>
                           <h4 className="font-bold text-cream text-sm md:text-base">Email Accounts</h4>
                        </div>
                        <div className="space-y-4">
                           <div className="flex flex-col">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-primary-600 mb-1">General inquiries</span>
                              <p className="text-base md:text-lg text-cream/70">info@globalpeaceministry.org</p>
                           </div>
                           <div className="flex flex-col">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-primary-600 mb-1">Personal Ministry</span>
                              <p className="text-base md:text-lg text-cream/70">pastor@globalpeaceministry.org</p>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-start gap-5">
                        <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center shrink-0">
                           <MapPin className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                           <h4 className="font-bold text-cream mb-2 text-sm md:text-base">Address</h4>
                           <p className="text-base md:text-lg text-cream/70">
                              17 Mildmay Road, Romford<br />
                              RM7 7DA London UK
                           </p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>

            <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 text-light-sage animate-bounce">
               <ArrowDown className="w-8 h-8 opacity-70" />
            </div>
         </section>

         {/* 2. Contact Form & Map */}
         <section className="h-screen flex items-center px-6 md:px-12 bg-white border-t border-muted-teal/10 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">



               {/* Map / Socials Column */}
               <motion.div {...fadeInUp} className="flex flex-col rounded-2xl overflow-hidden shadow-lg border border-muted-teal/20" style={{ maxHeight: 'calc(100vh - 160px)' }}>
                  <div className="flex-1 relative" style={{ minHeight: '0' }}>
                     <iframe
                        src="https://maps.google.com/maps?q=17+Mildmay+Road,+Romford,+Essex,+RM7+7DA,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                     ></iframe>
                  </div>

                  <div className="py-4 px-6 bg-primary-900 text-cream text-center shrink-0">
                     <h4 className="font-serif text-lg font-bold mb-3">Connect on Social Media</h4>
                     <div className="flex items-center justify-center gap-4">
                        <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors group">
                           <Facebook className="w-4 h-4 text-cream group-hover:text-white" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors group">
                           <Youtube className="w-4 h-4 text-cream group-hover:text-white" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors group">
                           <Instagram className="w-4 h-4 text-cream group-hover:text-white" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors group">
                           <Twitter className="w-4 h-4 text-cream group-hover:text-white" />
                        </a>
                     </div>
                  </div>
               </motion.div>

               {/* Form Column */}
               <motion.div {...fadeInUp} className="flex flex-col">

                  <h3 className="font-serif text-3xl lg:text-4xl font-bold text-primary-900 mb-2 leading-tight">Send a Message</h3>
                  <p className="text-sm text-primary-900/60 mb-4">Fill out the form and our team will get back to you.</p>

                  <form onSubmit={onSubmit} className="space-y-5 max-w-xl">
                     <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary-900 mb-1">Full Name *</label>
                        <input type="text" name="name" required className="bg-cream border border-muted-teal/30 rounded-lg px-3 py-3 text-sm text-primary-900 focus:outline-none focus:border-primary-600 transition-colors" />
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-primary-900 mb-1">Email *</label>
                           <input type="email" name="email" required className="bg-cream border border-muted-teal/30 rounded-lg px-3 py-3 text-sm text-primary-900 focus:outline-none focus:border-primary-600 transition-colors" />
                        </div>
                        <div className="flex flex-col">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-primary-900 mb-1">Phone</label>
                           <input type="tel" name="phone" className="bg-cream border border-muted-teal/30 rounded-lg px-3 py-3 text-sm text-primary-900 focus:outline-none focus:border-primary-600 transition-colors" />
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-primary-900 mb-1">Country</label>
                           <input type="text" name="country" className="bg-cream border border-muted-teal/30 rounded-lg px-3 py-3 text-sm text-primary-900 focus:outline-none focus:border-primary-600 transition-colors" />
                        </div>
                        <div className="flex flex-col">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-primary-900 mb-1">Subject</label>
                           <div className="relative">
                              <select name="subject" required className="w-full bg-cream border border-muted-teal/30 rounded-lg px-3 py-3 text-sm text-primary-900 focus:outline-none focus:border-primary-600 transition-colors appearance-none">
                                 <option disabled defaultValue="General Enquiry">Select...</option>
                                 <option>General Enquiry</option>
                                 <option>Prayer Request</option>
                                 <option>Counselling</option>
                                 <option>Book Order</option>
                                 <option>Partnership</option>
                                 <option>Donation</option>
                                 <option>Other</option>
                              </select>
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                 <ArrowDown className="w-3 h-3 text-primary-900/50" />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary-900 mb-1">Message *</label>
                        <textarea name="message" required rows={5} className="bg-cream border border-muted-teal/30 rounded-lg px-3 py-3 text-sm text-primary-900 focus:outline-none focus:border-primary-600 transition-colors resize-none"></textarea>
                     </div>

                     {status !== 'idle' && (
                        <div className={`p-4 rounded-lg text-sm font-medium ${status === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
                              status === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
                                 'bg-blue-50 text-blue-700 border border-blue-200 animate-pulse'
                           }`}>
                           {status === 'loading' ? 'Sending your message...' : message}
                        </div>
                     )}

                     <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full bg-primary-600 text-white font-bold text-sm py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-900'}`}
                     >
                        {status === 'loading' ? (
                           <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                           </>
                        ) : 'Send Message'}
                     </button>
                  </form>
               </motion.div>
            </div>
         </section>

      </div>
   );
}
