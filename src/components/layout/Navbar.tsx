"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useIntro } from "../../context/IntroContext";

const navItems = [
  { 
    name: "CAPABILITIES", 
    num: "/01", 
    align: "self-start md:ml-[10%]", 
    startX: -200,
    style: "text-[#f4efe6] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]" 
  },
  { 
    name: "CASE STUDIES", 
    num: "/02", 
    align: "self-end md:mr-[10%]", 
    startX: 200,
    style: "text-transparent [-webkit-text-stroke:1px_rgba(244,239,230,0.4)] md:[-webkit-text-stroke:2px_rgba(244,239,230,0.4)] hover:text-[#f4efe6] hover:[-webkit-text-stroke:0px] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]" 
  },
  { 
    name: "INITIATE", 
    num: "/03", 
    align: "self-start md:ml-[25%]", 
    startX: -200,
    style: "text-transparent [-webkit-text-stroke:1px_rgba(244,239,230,0.4)] md:[-webkit-text-stroke:2px_rgba(244,239,230,0.4)] hover:text-[#f4efe6] hover:[-webkit-text-stroke:0px] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]" 
  },
];

export default function Navbar() {
  const { isOpen, setIsOpen } = useIntro();
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (isOpen) { setIsHidden(false); return; }
    if (latest > previous && latest > 150) { setIsHidden(true); } 
    else { setIsHidden(false); }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* THE PILL NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0, scale: 0.5 }}
        animate={{ y: isHidden ? -100 : 20, opacity: isHidden ? 0 : 1, scale: isHidden ? 0.8 : 1 }}
        transition={{ duration: 0.8, ease: [0.74, 0.0, 0.0, 1.0] }}
        className="fixed z-50 top-0 left-0 right-0 mx-auto w-[90%] max-w-sm h-14 flex items-center justify-center"
      >
        <div className={`absolute inset-0 w-full h-full bg-[#1a1a1a]/95 backdrop-blur-2xl rounded-xl transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />

        <div className="relative z-50 w-full h-full px-6 flex items-center justify-between pointer-events-none">
          <span className="text-lg font-poppins font-bold text-[#f4efe6] tracking-wide pointer-events-auto">
            Siyaf.
          </span>
          <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 flex items-center justify-center focus:outline-none pointer-events-auto">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#f4efe6] stroke-[1.5] stroke-linecap-round">
              <path d="M4 7h16" strokeDasharray="16" strokeDashoffset={isOpen ? "16" : "0"} className="transition-all duration-300" />
              <path d="M4 12h16" className={`transition-all duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <path d="M4 17h16" strokeDasharray="16" strokeDashoffset={isOpen ? "-16" : "0"} className="transition-all duration-300" />
              <path d="M6 6l12 12" strokeDasharray="17" strokeDashoffset={isOpen ? "0" : "17"} className={`transition-all duration-400 ${isOpen ? "delay-[400ms]" : "delay-0"}`} />
              <path d="M18 6l-12 12" strokeDasharray="17" strokeDashoffset={isOpen ? "0" : "17"} className={`transition-all duration-400 ${isOpen ? "delay-[700ms]" : "delay-0"}`} />
            </svg>
          </button>
        </div>
      </motion.nav>

      
      <div className={`fixed z-[45] transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] bg-[#1a1a1a]/95 backdrop-blur-2xl ${isOpen ? "top-0 left-0 w-screen h-[100dvh] rounded-none opacity-100 pointer-events-auto" : "top-8 left-0 right-0 mx-auto w-[90%] max-w-sm h-14 rounded-xl opacity-0 pointer-events-none"}`}>
        <motion.div className={`absolute inset-0 bg-[url('/hero-siyaf.jpg')] bg-cover bg-center bg-no-repeat transition-opacity duration-[1200ms] ${isOpen ? "opacity-20 delay-300" : "opacity-0"}`} />
        <div className="absolute inset-0 bg-black/40" />
      </div>

    
      <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 transition-all duration-700 ${isOpen ? "opacity-100 pointer-events-none" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col w-full gap-2 mt-16 pointer-events-auto overflow-hidden">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              className={`relative flex items-start group ${item.align}`}
              initial={{ x: item.startX, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: item.startX, opacity: 0 }}
              transition={{ duration: 1, delay: isOpen ? 0.4 + i * 0.15 : 0, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="text-sm md:text-lg font-sans tracking-widest text-[#d4c3b3] mt-2 mr-4 md:absolute md:-left-16 md:top-[15%]">
                {item.num}
              </span>
              <Link
                href={`/${item.name.toLowerCase().replace(" ", "-")}`}
                className={`text-[12vw] md:text-[9vw] lg:text-[8vw] whitespace-nowrap font-serif leading-[0.85] tracking-tighter transition-all duration-500 ${item.style}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}