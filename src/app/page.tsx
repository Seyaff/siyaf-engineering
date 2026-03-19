"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LuxuryPage() {

  const [isIntroFinished, setIsIntroFinished] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroFinished(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F5F5F3] text-black overflow-hidden">


      <nav className="flex justify-center bg-zinc-200 mx-auto w-96 items-center p-8 h-24 relative z-10">
        <div className="absolute left-8">

          {isIntroFinished && (
            <motion.div layoutId="luxury-logo"
              className="text-2xl font-serif italic font-bold">
              Offset
            </motion.div>
          )}
          <div className="w-8 h-1 bg-black rounded-full"></div>
        </div>
        
      </nav>

      <main className="flex flex-col items-center justify-center mt-32 px-4 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isIntroFinished ? 1 : 0, y: isIntroFinished ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-center uppercase tracking-tight"
        >
          Gathering the few <br /> who move the many
        </motion.h2>
      </main>

      {!isIntroFinished && (
        <div className="absolute inset-0 bg-[#F5F5F3] z-50 flex items-center justify-center">
          <motion.h1
            layoutId="luxury-logo"
            className="text-8xl md:text-[150px] font-serif italic font-bold"
          >
            Offsite
          </motion.h1>
        </div>
      )}


    </div>
  )
}