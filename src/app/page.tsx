"use client";

import { motion } from "framer-motion";
import Philosophy from "@/components/Philosophy";
import CaseStudies from "@/components/CaseStudies";
import CustomCursor from "@/components/CutstomCursor";
import Initiate from "@/components/Intitiate";


export default function Home() {
  return (
    <main className="relative w-full bg-[#1a1a1a] selection:bg-[#d4c3b3] selection:text-black overflow-x-hidden cursor-none">
     
      <CustomCursor />

   
      <section className="relative w-full h-screen overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[url(/hero-siyaf.jpg)] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 z-1 opacity-20 pointer-events-none translate-y-[-10px] bg-[url(/IMG_4580.jpg)] bg-cover bg-center bg-no-repeat bg-fixed" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
          <div className="absolute inset-0 bg-[#3a2e24] mix-blend-overlay opacity-30" />
        </motion.div>

        <nav className="absolute top-8 right-12 z-50 hidden md:flex gap-8 text-[10px] font-sans tracking-[0.2em] text-white/90 uppercase font-bold">
          <span className="hover:text-white transition-colors">Intro</span>
          <span className="hover:text-white transition-colors">Capabilities</span>
          <span className="hover:text-white transition-colors">Proof</span>
          <span className="hover:text-white transition-colors">Initiate</span>
        </nav>

        <div className="absolute top-[15%] left-12 z-10 pointer-events-none">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-xs font-sans tracking-[0.2em] text-white/80 uppercase font-bold mb-2 ml-2">
            Made for scaling. Built for scale.
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-serif font-bold text-[#f4efe6] tracking-tighter leading-[0.75]">
            SIYAF.
          </motion.h1>
        </div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }} className="absolute top-[45%] right-12 md:right-24 z-20 max-w-sm pointer-events-none hidden md:block">
          <p className="text-xl md:text-2xl font-serif text-white/95 leading-snug shadow-black/50 drop-shadow-md">
            Architected to perform, scale, and convert in all the right ways. Siyaf makes complex digital ecosystems feel effortless.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="absolute bottom-12 left-12 z-30 w-72 md:w-80">
          <div className="relative p-8 overflow-hidden rounded-sm bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10">
              <h2 className="text-lg md:text-xl font-sans font-bold text-white tracking-wide uppercase leading-snug">
                Engineered by Siyaf,<br />Full-Stack Architect.
              </h2>
              <div className="w-full h-[1px] bg-white/30 my-6" />
              <p className="text-sm font-sans text-white/80 text-right leading-relaxed">
                The world's most<br />unnecessarily sophisticated<br />digital experiences.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 group">
          <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <span className="text-[10px] font-sans tracking-[0.2em] text-white/70 uppercase group-hover:text-white transition-colors">
            Scroll to continue
          </span>
        </motion.div>
      </section>

    
      <div className="relative z-50">
        <Philosophy />
        <CaseStudies />
       
        <Initiate />
      </div>

    </main>
  );
}