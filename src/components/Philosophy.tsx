"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function HologramCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial color="#2a2e2d" roughness={0.3} metalness={0.8} />
      </mesh>
    </Float>
  );
}

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"],
  });

  const hook = "Most developers build digital brochures.";
  const phrase = "I architect interactive leverage. Merging high-fidelity motion with aggressive backend logic to scale your vision.";
  const words = phrase.split(" ");

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#1a1a1a] text-white pt-32 pb-48 px-6 md:px-12">
      
    
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 opacity-20"
      >
        <div className="absolute inset-0 bg-[url(/IMG_4685.jpg)] bg-cover bg-center bg-no-repeat bg-fixed" />
        <div className="absolute inset-0 bg-[#3a2e24] mix-blend-overlay opacity-30" />
    
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="w-full border-t border-zinc-800 pt-6 mb-24 flex justify-between items-start">
          <span className="text-xs font-sans tracking-[0.2em] text-zinc-400 uppercase">/ 01 — The Ethos</span>
          <span className="text-xs font-sans tracking-[0.2em] text-zinc-500 uppercase hidden md:block">System Architecture</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h3 className="text-xl md:text-3xl font-serif text-zinc-400 mb-8 italic drop-shadow-md">
              {hook}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1 md:gap-x-5 md:gap-y-3">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
               
                const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
                return (
                  <motion.span
                    key={i}
                    style={{ opacity }}
                   
                    className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif font-bold text-[#f4efe6] tracking-tighter leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end mt-12 lg:mt-0">
            <div className="relative w-full aspect-square border border-zinc-800 bg-zinc-950/40 backdrop-blur-md rounded-sm p-4 flex flex-col justify-between overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="flex justify-between items-start z-20">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-sans text-zinc-400 tracking-widest uppercase">Engine</span>
                  <span className="text-xs font-sans text-[#f4efe6] tracking-widest uppercase">WebGL / R3F</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-sans text-emerald-500 tracking-widest">LIVE</span>
                </div>
              </div>
              <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
                <Canvas camera={{ position: [0, 0, 4] }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[0, 5, 2]} intensity={2} color="#f4efe6" />
                  <Environment preset="city" />
                  <HologramCore />
                </Canvas>
              </div>
              <div className="flex justify-between items-end z-20 pointer-events-none">
                <span className="text-[10px] font-sans text-zinc-500 tracking-widest uppercase">Interactive Node</span>
                <span className="text-[10px] font-sans text-zinc-500 tracking-widest uppercase">Drag to rotate</span>
              </div>
            </div>
            <p className="mt-6 text-sm font-sans text-zinc-400 leading-relaxed max-w-sm drop-shadow-md">
              Every interface is backed by secure routing, optimized database queries, and frame-perfect rendering. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}