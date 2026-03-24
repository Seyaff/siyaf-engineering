"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Capabilities() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative w-full bg-[#1a1a1a] text-[#f4efe6] selection:bg-[#d4c3b3] selection:text-black min-h-screen cursor-none">
      
      {/* 1. CINEMATIC HERO */}
      <section ref={containerRef} className="relative w-full h-[60vh] overflow-hidden flex flex-col justify-end pb-24 px-6 md:px-12">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          {/* Using your rocky background for a raw, engineered feel */}
          <Image 
            src="/IMG_4685.jpg" 
            alt="Capabilities Architecture" 
            fill 
            priority 
            quality={90}
            className="object-cover object-center grayscale opacity-60"
          />
          <div className="absolute inset-0 z-10 bg-[#3a2e24] mix-blend-overlay opacity-50" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            <span className="text-xs font-sans tracking-[0.3em] text-[#d4c3b3] uppercase drop-shadow-md">
              / System Architecture
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif font-bold tracking-tighter uppercase mt-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-none">
              CAPABILITIES.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. THE BENTO BOX TECH GRID */}
      <section className="relative z-20 w-full bg-[#1a1a1a] px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* BOX 1: Core Architecture */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="relative p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm overflow-hidden group hover:border-white/30 transition-colors"
            >
              <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10">
                <span className="text-[10px] font-sans tracking-[0.2em] text-[#d4c3b3] uppercase mb-6 block">
                  01 / Backend & Logic
                </span>
                <h3 className="text-3xl font-serif text-[#f4efe6] mb-4">Infrastructure.</h3>
                <p className="text-sm font-sans text-white/60 leading-relaxed mb-8">
                  Aggressive logic routing, decoupled architectures, and scalable database systems engineered for high-throughput environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "C++ Core", "PostgreSQL", "Express", "REST APIs"].map((tech) => (
                    <span key={tech} className="text-[10px] font-sans text-white/80 bg-black/40 px-3 py-1 rounded-sm border border-white/10 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* BOX 2: The Interactive Layer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm overflow-hidden group hover:border-white/30 transition-colors"
            >
              <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10">
                <span className="text-[10px] font-sans tracking-[0.2em] text-[#d4c3b3] uppercase mb-6 block">
                  02 / The Frontend
                </span>
                <h3 className="text-3xl font-serif text-[#f4efe6] mb-4">Execution.</h3>
                <p className="text-sm font-sans text-white/60 leading-relaxed mb-8">
                  Component-driven, server-side rendered interfaces built to interact seamlessly with complex backend states and APIs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <span key={tech} className="text-[10px] font-sans text-white/80 bg-black/40 px-3 py-1 rounded-sm border border-white/10 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* BOX 3: Motion & Rendering */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="relative p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm overflow-hidden group hover:border-white/30 transition-colors lg:col-span-1 md:col-span-2"
            >
              <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10">
                <span className="text-[10px] font-sans tracking-[0.2em] text-[#d4c3b3] uppercase mb-6 block">
                  03 / Frame-Perfect
                </span>
                <h3 className="text-3xl font-serif text-[#f4efe6] mb-4">Cinematics.</h3>
                <p className="text-sm font-sans text-white/60 leading-relaxed mb-8">
                  Bypassing standard DOM limitations. Utilizing custom WebGL pipelines and high-fidelity video rendering to create immersive, tactile digital environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["WebGL / R3F", "Framer Motion", "Adobe After Effects", "GSAP"].map((tech) => (
                    <span key={tech} className="text-[10px] font-sans text-white/80 bg-black/40 px-3 py-1 rounded-sm border border-white/10 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. DOSSIER / CV DOWNLOAD CTA */}
      <section className="w-full py-32 px-6 md:px-12 border-t border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#f4efe6] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

        <motion.p 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
          className="text-[10px] font-sans tracking-[0.4em] text-white/40 uppercase mb-8"
        >
          Documentation Ready
        </motion.p>
        
        <motion.a 
          href="/Siyaf_Resume.pdf" // Make sure to drop your actual PDF in the public folder!
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-12 py-6 overflow-hidden rounded-sm border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl group cursor-none"
        >
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4efe6]/0 via-[#f4efe6]/10 to-[#f4efe6]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <span className="relative z-10 flex items-center gap-4 text-sm md:text-base font-sans tracking-[0.2em] text-[#f4efe6] uppercase font-bold">
            Extract Dossier 
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </span>
        </motion.a>
        
        <Link href="/" className="mt-16 text-[10px] font-sans tracking-[0.3em] text-white/40 uppercase hover:text-[#d4c3b3] transition-colors cursor-none">
          Return to Index
        </Link>
      </section>

    </main>
  );
}