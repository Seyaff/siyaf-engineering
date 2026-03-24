"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link"; // <-- Added Next.js Link

const projects = [
  {
    title: "E-COM ESCAPE",
    service: "Headless Architecture",
    year: "2026",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
  },
  {
    title: "NEXUS DASH",
    service: "Real-time WebGL Analytics",
    year: "2025",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "QUANTUM AUTH",
    service: "Zero-Trust Security UI",
    year: "2025",
    img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2670&auto=format&fit=crop",
  },
];

export default function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 cursor-default z-20 overflow-hidden">
      
      {/* BACKGROUND WITH HEAVY SCRIM */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 opacity-40" 
      >
        <div className="absolute inset-0 bg-[url(/IMG_4580.jpg)] bg-cover bg-center bg-no-repeat bg-fixed" />
        <div className="absolute inset-0 bg-[#3a2e24] mix-blend-overlay opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-[#1a1a1a]" />
      </motion.div>

      {/* THE CURSOR REVEAL IMAGE */}
      <motion.div
        className="fixed top-0 left-0 w-[20rem] md:w-[28rem] aspect-[4/5] pointer-events-none z-[100] overflow-hidden rounded-sm shadow-2xl"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: hoveredIndex !== null ? 1 : 0, scale: hoveredIndex !== null ? 1 : 0.8 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.img}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </motion.div>

      <div className="relative z-[10] max-w-7xl mx-auto">
        <div className="w-full border-t border-white/20 pt-6 mb-24 flex justify-between items-start">
          <span className="text-xs font-sans tracking-[0.2em] text-[#d4c3b3] uppercase drop-shadow-md">/ 02 — Case Studies</span>
          <span className="text-xs font-sans tracking-[0.2em] text-white/60 uppercase hidden md:block drop-shadow-md">Proof of Execution</span>
        </div>

       <div className="flex flex-col w-full border-t border-white/10 relative overflow-hidden">
          {projects.map((project, index) => {
            // Automatically generate the slug from the title
            const slug = project.title.toLowerCase().replace(/\s+/g, '-');

            return (
              // Wrapped the row in a Next.js Link
              <Link href={`/case-studies/${slug}`} key={index} className="w-full block cursor-none">
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative w-full flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 border-b border-white/10 hover:border-white/30 transition-colors duration-500"
                >
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-7xl lg:text-[6rem] font-serif font-bold tracking-tighter text-white/50 group-hover:text-[#f4efe6] transition-colors duration-500 uppercase relative z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                      {project.title}
                    </span>
                  </div>

                  <div className="flex flex-row md:flex-col items-end justify-between md:justify-end w-full md:w-auto mt-4 md:mt-0 relative z-10">
                    <span className="text-xs font-sans tracking-[0.2em] text-[#d4c3b3] group-hover:text-white transition-colors duration-500 uppercase mb-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-sm border border-white/5 shadow-lg">
                      {project.service}
                    </span>
                    <span className="text-xs font-sans text-white/40 group-hover:text-[#f4efe6] transition-colors duration-500 drop-shadow-md">
                      {project.year}
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}