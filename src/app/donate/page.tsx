'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Smartphone, Mail, Bitcoin, CreditCard, HeartHandshake, ShieldCheck } from 'lucide-react';

const fadeInUp = {
   initial: { opacity: 0, y: 30 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.8 }
};

export default function DonatePage() {
   const [amount, setAmount] = useState<number | 'custom'>(100);
   const [isProcessing, setIsProcessing] = useState(false);
   const [paymentStatus, setPaymentStatus] = useState<{ success: boolean; message: string } | null>(null);

   const handlePayment = async () => {
      const numericAmount = typeof amount === 'number' ? amount : 0;
      if (numericAmount <= 0) {
         alert('Please enter a valid donation amount.');
         return;
      }

      setIsProcessing(true);
      setPaymentStatus(null);

      try {
         const response = await fetch('/api/donate/order', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: numericAmount }),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || 'Failed to initiate donation process.');
         }

         if (data.url) {
            // Redirect to Stripe Checkout
            window.location.href = data.url;
         } else {
            throw new Error('Failed to get checkout URL from server.');
         }
      } catch (err: any) {
         console.error('Donation initiation error:', err);
         setIsProcessing(false);
         setPaymentStatus({
            success: false,
            message: err.message || 'An error occurred. Please try again.',
         });
      }
   };

   return (
      <div className="flex flex-col w-full bg-cream min-h-screen">

         {/* 1. Hero Section (100vh) */}
         <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-primary-900 overflow-hidden">
            {/* Abstract Background Element and Image */}
            <div className="absolute inset-0 z-0">
               <img
                  src="/Dr Haiku Photos/gpm-photo-53.jpeg"
                  alt="Community Impact"
                  className="w-full h-full object-cover opacity-20"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
               >
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-light-sage mb-6">Invest in Peace</h2>
                  <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-bold text-cream mb-8 leading-none tracking-tight py-2">
                     Make An Impact.
                  </h1>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-cream/70 mb-12 max-w-2xl mx-auto">
                     Your contributions directly fund global peace education, disaster relief, and community integration programs worldwide.
                  </p>
               </motion.div>
            </div>

            <div className="absolute bottom-30 left-1/2 -translate-x-1/2">
               <button
                  onClick={() => document.getElementById('secure-gateway')?.scrollIntoView({ behavior: 'smooth' })}
                  className="cursor-pointer text-md font-bold uppercase tracking-[0.3em] px-14 py-6 border-2 border-white bg-white text-primary-900 hover:bg-primary-900 hover:text-white transition-all duration-500 shadow-2xl"
               >
                  Donate Now
               </button>
            </div>
         </section>

         {/* 2. Where Your Money Goes (100vh Financial Transparency) */}
         <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-light-sage/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">

               {/* Text Block */}
               <div className="flex-1 text-center lg:text-left">
                  <motion.div {...fadeInUp}>
                     <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 border border-primary-600/30 rounded-full px-4 py-2 inline-block mb-6 bg-cream">Radical Transparency</h2>
                     <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-8 leading-snug">Every Dollar<br />Accounted For.</h3>
                     <div className="w-16 h-1 bg-primary-600 rounded-full mb-8 mx-auto lg:mx-0" />
                     <p className="text-lg text-primary-900/70 font-medium leading-relaxed mb-8">
                        We believe that trust is earned through absolute transparency. View exactly how your generosity fuels our mission to build a more dignified world.
                     </p>
                     <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-muted-teal justify-center lg:justify-start">
                        <ShieldCheck className="w-5 h-5" />
                        Top Rated by Charity Navigator
                     </div>
                  </motion.div>
               </div>

               {/* Breakdown Chart/List */}
               <div className="flex-[1.2] w-full">
                  <div className="space-y-4">
                     {[
                        { cat: "Global Missions & Education", pct: 65, color: "bg-primary-900" },
                        { cat: "Local Community Outreach", pct: 20, color: "bg-primary-600" },
                        { cat: "Operations & Administration", pct: 10, color: "bg-muted-teal" },
                        { cat: "Future Expansion Fund", pct: 5, color: "bg-light-sage" }
                     ].map((item, idx) => (
                        <motion.div
                           key={idx}
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: idx * 0.1 }}
                        >
                           <div className="flex justify-between items-end mb-2">
                              <span className="font-serif text-xl md:text-2xl font-bold text-primary-900">{item.cat}</span>
                              <span className="text-lg font-bold text-muted-teal">{item.pct}%</span>
                           </div>
                           <div className="h-4 w-full bg-cream rounded-full overflow-hidden border border-muted-teal/20">
                              <motion.div
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${item.pct}%` }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                 className={`h-full ${item.color} rounded-full`}
                              />
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 3. Ways to Give (100vh Grid) */}
         <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-cream border-t border-muted-teal/20">
            <div className="max-w-7xl mx-auto w-full">
               <div className="text-center mb-20 max-w-3xl mx-auto">
                  <motion.div {...fadeInUp}>
                     <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted-teal mb-6">Contribute</h2>
                     <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-8">Multiple Ways to Give</h3>
                     <p className="text-xl text-primary-900/70">
                        We've made it simple to support our vision, no matter your preferred method.
                     </p>
                  </motion.div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                  {[
                     { icon: CreditCard, title: "Online Direct", desc: "Secure one-time or recurring gifts via card or bank transfer." },
                     { icon: Smartphone, title: "Text-to-Give", desc: "Text 'PEACE' to 555-000 for a quick, mobile contribution." },
                     { icon: Mail, title: "Mail a Check", desc: "Send your support directly to our Global Headquarters." },
                     { icon: Bitcoin, title: "Crypto & Assets", desc: "We accept Bitcoin, Ethereum, and major stock transfers." }
                  ].map((way, idx) => (
                     <motion.div
                        key={idx}
                        {...fadeInUp}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 rounded-2xl border border-muted-teal/10 shadow-sm flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                     >
                        <div className="w-16 h-16 rounded-full bg-cream border border-muted-teal/20 flex items-center justify-center mb-6 text-primary-600">
                           <way.icon className="w-8 h-8" />
                        </div>
                        <h4 className="font-serif text-2xl font-bold text-primary-900 mb-3">{way.title}</h4>
                        <p className="text-sm text-primary-900/70 leading-relaxed font-medium">{way.desc}</p>
                     </motion.div>
                  ))}
               </div>

               {/* 4. Secure Gateway Action (Embedded 100vh section feeling) */}
               <motion.div
                  {...fadeInUp}
                  id="secure-gateway"
                  className="bg-primary-900 p-8 md:p-16 rounded-[2rem] shadow-2xl max-w-4xl mx-auto relative overflow-hidden"
               >
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fdffd6_2px,transparent_2px)] [background-size:24px_24px]" />

                  <div className="relative z-10">
                     <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-white/10 text-center md:text-left gap-6">
                        <h2 className="text-3xl font-serif font-bold text-cream">Secure Gateway</h2>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-light-sage bg-white/5 px-4 py-2 rounded-full border border-white/10">
                           <ShieldCheck className="w-4 h-4" /> 256-Bit Encrypted
                        </div>
                     </div>

                     {/* Selection Grid */}
                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-12">
                        {[50, 100, 500, 1000].map((val) => (
                           <button
                              key={val}
                              onClick={() => setAmount(val)}
                              className={`cursor-pointer border py-6 text-2xl font-serif font-bold rounded-xl transition-all duration-300 ${amount === val
                                 ? 'bg-light-sage text-primary-900 border-light-sage scale-105 shadow-lg'
                                 : 'bg-white/5 text-cream border-white/20 hover:bg-white/10'
                                 }`}
                           >
                              ${val}
                           </button>
                        ))}
                     </div>

                     <div className="mb-12">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-light-sage block mb-4">Or Enter Custom Amount</label>
                        <div className="relative border-b-2 border-white/20 flex items-center bg-white/5 px-6 rounded-t-xl group focus-within:border-light-sage transition-colors">
                           <span className="text-3xl font-bold text-cream/50 absolute left-6">$</span>
                           <input
                              type="number"
                              min="0"
                              className="w-full bg-transparent text-4xl md:text-5xl font-bold text-cream pl-8 py-6 focus:outline-none placeholder-cream/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              placeholder="0"
                              value={typeof amount === 'number' ? amount : ''}
                              onChange={(e) => {
                                 const val = Number(e.target.value);
                                 if (val >= 0) setAmount(val);
                                 else setAmount(0);
                              }}
                           />
                        </div>
                     </div>

                     <button
                        onClick={handlePayment}
                        disabled={isProcessing}
                        className="cursor-pointer w-full py-6 bg-cream text-primary-900 font-bold text-lg uppercase tracking-[0.2em] rounded-xl hover:bg-light-sage transition-colors duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                        {isProcessing ? (
                           <>
                              <div className="w-5 h-5 border-2 border-primary-900 border-t-transparent rounded-full animate-spin" />
                              Processing...
                           </>
                        ) : (
                           <>
                              <HeartHandshake className="w-6 h-6" />
                              Give ${typeof amount === 'number' ? amount : '0'}
                           </>
                        )}
                     </button>

                     {paymentStatus && (
                        <div className={`mt-6 p-4 rounded-xl text-center text-sm font-medium ${
                           paymentStatus.success
                              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                              : 'bg-rose-500/10 border border-rose-500/20 text-rose-400'
                        }`}>
                           {paymentStatus.message}
                        </div>
                     )}
                  </div>
               </motion.div>
            </div>
         </section>

      </div>
   );
}

