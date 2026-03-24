"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // 1. Lock the scroll so the user can't scroll down while loading
    document.body.style.overflow = "hidden";

    // 2. The Dynamic Counter Logic
    let count = 0;
    const interval = setInterval(() => {
      // Randomize the jump amount so it feels like real data loading, not just a timer
      count += Math.floor(Math.random() * 12) + 1;
      
      if (count >= 100) {
        count = 100;
        setCounter(100);
        clearInterval(interval);
        
        // 3. The Dramatic Pause: Wait 0.6s at 100% before triggering the exit animation
        setTimeout(() => {
          setIsLoading(false);
          // Unlock scrolling after the animation finishes
          setTimeout(() => {
            document.body.style.overflow = "unset";
          }, 1200); 
        }, 600);
      } else {
        setCounter(count);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      // The Easing Curve: [0.76, 0, 0.24, 1] is the golden standard for smooth, expensive motion
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : "-100vh" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] flex flex-col justify-end bg-[#1a1a1a] text-[#f4efe6] px-6 md:px-12 pb-12 overflow-hidden cursor-none"
    >
      {/* 1. Cinematic Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* 2. Top Border (Matches your editorial sections) */}
      <div className="absolute top-12 left-6 right-6 md:left-12 md:right-12 border-t border-white/10 pt-4 flex justify-between">
        <span className="text-[10px] font-sans tracking-[0.3em] text-white/40 uppercase">
          Siyaf Engineering
        </span>
        <span className="text-[10px] font-sans tracking-[0.3em] text-white/40 uppercase hidden md:block">
          System Initialization
        </span>
      </div>

      {/* 3. The Massive Brutalist Counter */}
      <div className="relative z-10 flex items-baseline justify-between w-full border-b border-white/10 pb-4">
        
        <div className="flex flex-col justify-end pb-4 hidden md:flex">
          <span className="text-sm font-sans tracking-[0.2em] text-[#d4c3b3] uppercase">
            Loading Assets
          </span>
          <span className="text-xs font-sans tracking-[0.2em] text-white/40 uppercase mt-2">
            WebGL / Framer / Architecture
          </span>
        </div>

        <div className="flex items-baseline">
          <span className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-serif font-bold tracking-tighter leading-[0.75]">
            {counter}
          </span>
          <span className="text-2xl md:text-5xl font-sans tracking-widest text-white/40 ml-2 md:ml-6 font-light">
            %
          </span>
        </div>
        
      </div>
    </motion.div>
  );
}