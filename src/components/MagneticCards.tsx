"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticCardProps {
  title: string;
  subtitle: string;
  tags: string[];
}

export default function MagneticCard({ title, subtitle, tags }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative p-8 rounded-sm border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer group overflow-hidden w-full max-w-sm shadow-xl"
    >

      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
    
      <div className="absolute inset-0 bg-gradient-to-br from-[#f4efe6]/0 via-[#f4efe6]/0 to-[#f4efe6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-4">
        <div>
          <h4 className="text-2xl font-serif text-[#f4efe6] tracking-tight">{title}</h4>
          <p className="text-xs font-sans text-white/60 tracking-[0.2em] uppercase mt-2">{subtitle}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span key={i} className="text-[9px] font-sans text-[#d4c3b3] bg-white/5 px-2 py-1 rounded-sm uppercase tracking-widest border border-white/10 group-hover:border-white/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}