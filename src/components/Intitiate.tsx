"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Initiate() {
  const containerRef = useRef<HTMLElement>(null);
  const [time, setTime] = useState<string>("");

 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: "Asia/Karachi", 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-[#1a1a1a] flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 overflow-hidden z-20"
    >
 
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url(/hero-siyaf.jpg)] bg-cover bg-center bg-no-repeat bg-fixed grayscale" />
        <div className="absolute inset-0 bg-[#3a2e24] mix-blend-overlay opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/80 to-[#1a1a1a]" />
      </div>

   
      <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-white/20 pt-6 flex justify-between items-start">
        <span className="text-xs font-sans tracking-[0.2em] text-[#d4c3b3] uppercase drop-shadow-md">
          / 03 — Initiate
        </span>
        <span className="text-xs font-sans tracking-[0.2em] text-white/40 uppercase hidden md:block drop-shadow-md">
          Open for opportunities
        </span>
      </div>

    
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center w-full my-20">
        <motion.p 
          style={{ opacity: textOpacity }}
          className="text-sm md:text-lg font-sans tracking-[0.3em] text-white/60 uppercase mb-4"
        >
          Let's Architect Your Next Ecosystem
        </motion.p>
        
        <motion.h2 
          style={{ scale: textScale, opacity: textOpacity }}
          className="text-[18vw] md:text-[15vw] leading-[0.8] font-serif font-bold text-[#f4efe6] tracking-tighter text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          INITIATE.
        </motion.h2>

        
        <motion.a 
          href="mailto:hello@siyaf.engineering"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 relative px-8 py-4 overflow-hidden rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl group cursor-none"
        >
          <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4efe6]/0 via-[#f4efe6]/10 to-[#f4efe6]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <span className="relative z-10 text-sm font-sans tracking-[0.2em] text-[#f4efe6] uppercase font-bold">
            hello@siyaf.engineering
          </span>
        </motion.a>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
   
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase mb-1">Local Time</span>
          <span className="text-xs font-sans tracking-widest text-[#d4c3b3] uppercase">Kohat, PK — {time}</span>
        </div>

   
        <div className="flex gap-8">
          {["Github", "Twitter", "LinkedIn"].map((social) => (
            <a key={social} href="#" className="text-xs font-sans tracking-[0.2em] text-white/60 hover:text-[#f4efe6] transition-colors uppercase cursor-none">
              {social}
            </a>
          ))}
        </div>

      
        <div className="flex flex-col items-center md:items-end">
          <span className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase mb-1">Edition</span>
          <span className="text-xs font-sans tracking-widest text-[#d4c3b3] uppercase">© 2026 Siyaf</span>
        </div>

      </div>
    </section>
  );
}