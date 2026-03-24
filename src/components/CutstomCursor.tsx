"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // High-performance motion values for the cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // The physics configuration: Damping creates the "trail" effect
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Track the mouse movement
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // 2. Track when hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If it's a link, button, or has a pointer cursor, trigger the hover state
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      
      <style>{`body { cursor: none !important; }`}</style>

    
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovering ? 0 : 1, 
        }}
      />
    </>
  );
}