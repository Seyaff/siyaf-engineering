"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useRef, use } from "react"; 

// ==========================================
// 1. THE DATABASE
// ==========================================
const projectsData: Record<string, any> = {
  "e-com-escape": {
    title: "E-COM ESCAPE",
    service: "Headless Architecture",
    year: "2026",
    client: "Nexus Corp",
    role: "Lead Full-Stack Architect",
    tech: ["Next.js", "C++ Core", "PostgreSQL", "Redis"],
    heroImg: "/IMG_4580.jpg", 
    challenge: "The client was bleeding 40% of their conversions due to a bloated frontend and rigid, legacy backend infrastructure. They needed a digital ecosystem that felt like native, high-performance software.",
    solution: "Tore down the monolithic structure. Architected a completely decoupled headless environment prioritizing frame-perfect rendering and sub-100ms database queries. Engineered an aggressive edge-caching strategy to handle high-volume traffic spikes without latency.",
  },
  "nexus-dash": {
    title: "NEXUS DASH",
    service: "Real-time WebGL Analytics",
    year: "2025",
    client: "Aura Financial",
    role: "Systems Engineer",
    tech: ["React Three Fiber", "WebSockets", "Node.js", "AWS"],
    heroImg: "/IMG_4685.jpg", 
    challenge: "Financial data was being rendered in static, delayed charts. The executive team needed real-time, zero-latency visualization of millions of data points.",
    solution: "Bypassed standard DOM rendering entirely. Built a custom WebGL pipeline to process and render live websocket data via the GPU, wrapped in a secure zero-trust authentication layer.",
  },
  "quantum-auth": {
    title: "QUANTUM AUTH",
    service: "Zero-Trust Security UI",
    year: "2025",
    client: "Stark Tech",
    role: "Security & UI Engineer",
    tech: ["Next.js", "OAuth 2.0", "Prisma", "Framer Motion"],
    heroImg: "/hero-siyaf.jpg",
    challenge: "Enterprise security interfaces are notoriously high-friction. The goal was to build military-grade authentication that felt invisible to the end user.",
    solution: "Engineered a biometric-first auth flow with graceful degradation. The UI reacts with fluid spring physics, masking complex cryptographic handshakes behind millisecond-perfect visual feedback.",
  }
};

// ==========================================
// 2. THE EDITORIAL PAGE TEMPLATE
// ==========================================
export default function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData[slug];
  
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!project) return notFound();

  return (
    <main className="relative w-full bg-[#1a1a1a] text-[#f4efe6] selection:bg-[#d4c3b3] selection:text-black min-h-screen cursor-none">
      
      {/* 1. CINEMATIC HERO */}
      <section ref={containerRef} className="relative w-full h-[80vh] overflow-hidden flex flex-col justify-end pb-24 px-6 md:px-12">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          
          {/* OPTIMIZED DYNAMIC BACKGROUND IMAGE */}
          <Image 
            src={project.heroImg} 
            alt={project.title} 
            fill 
            priority 
            quality={90}
            className="object-cover object-center"
          />

          <div className="absolute inset-0 z-10 bg-[#3a2e24] mix-blend-overlay opacity-40" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            <span className="text-xs font-sans tracking-[0.3em] text-[#d4c3b3] uppercase drop-shadow-md">
              / Project — {project.year}
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif font-bold tracking-tighter uppercase mt-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-none">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. THE EDITORIAL GRID */}
      <section className="relative z-20 w-full bg-[#1a1a1a] px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Sticky Metadata */}
          <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-32 h-fit">
            <div className="w-full border border-white/10 bg-white/5 backdrop-blur-md rounded-sm p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              
              <div className="relative z-10 flex flex-col gap-8">
                <div>
                  <h4 className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase mb-2">Client</h4>
                  <p className="text-lg font-serif text-[#f4efe6]">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase mb-2">Role</h4>
                  <p className="text-lg font-serif text-[#f4efe6]">{project.role}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string) => (
                      <span key={t} className="text-[10px] font-sans text-[#d4c3b3] bg-black/40 px-3 py-1 rounded-sm border border-white/10 uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Narrative */}
          <div className="lg:col-span-8 flex flex-col gap-24">
            <div>
              <h2 className="text-xs font-sans tracking-[0.2em] text-[#d4c3b3] uppercase mb-8 border-b border-white/10 pb-4">
                01 / The Architecture Challenge
              </h2>
              <p className="text-2xl md:text-4xl font-serif text-white/80 leading-snug">
                {project.challenge}
              </p>
            </div>
            
            <div>
              <h2 className="text-xs font-sans tracking-[0.2em] text-[#d4c3b3] uppercase mb-8 border-b border-white/10 pb-4">
                02 / Engineering Execution
              </h2>
              <p className="text-xl md:text-3xl font-serif text-[#f4efe6] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. NEXT STEPS FOOTER */}
      <section className="w-full py-24 px-6 md:px-12 border-t border-white/10 flex items-center justify-center">
        <Link href="/" className="group flex flex-col items-center cursor-none">
          <span className="text-[10px] font-sans tracking-[0.3em] text-white/40 uppercase mb-4 transition-colors group-hover:text-[#d4c3b3]">
            Return to Index
          </span>
          <span className="text-4xl md:text-6xl font-serif text-[#f4efe6] tracking-tighter group-hover:italic transition-all">
            Close Node
          </span>
        </Link>
      </section>

    </main>
  );
}