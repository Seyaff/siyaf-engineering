"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function DreamShape() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = state.mouse.y * 0.3;
    const targetY = state.mouse.x * 0.3;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2, 0.5, 0]} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <icosahedronGeometry args={[1.2, 0]} /> 
          <meshPhysicalMaterial color="#4b5320" roughness={0.2} metalness={0.5} transmission={0.95} thickness={2} ior={1.4} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2, -0.5, -1]} rotation={[0, Math.PI / 3, 0]}>
          <dodecahedronGeometry args={[1.4, 0]} />
          <meshPhysicalMaterial color="#8b7e66" roughness={0.1} metalness={0.4} transmission={0.9} thickness={1.5} ior={1.6} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[0, -1.5, 1.5]} rotation={[Math.PI / 5, Math.PI / 2, 0]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshPhysicalMaterial color="#2a2e2d" roughness={0.3} metalness={0.8} transmission={0.8} thickness={1} ior={1.7} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 bg-[url(/hero-siyaf.jpg)] bg-cover bg-center bg-no-repeat z-0" />

      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 5, -10]} intensity={1.5} color="#ffebc2" />
          <DreamShape />
          <Environment preset="sunset" />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-20" />

      <div className="relative z-30 flex flex-col h-full items-center justify-center p-24 text-center pointer-events-none">
        <motion.h1
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="text-8xl md:text-[12rem] font-serif text-white tracking-tighter leading-none mix-blend-difference"
        >
          Siyaf.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mt-8 text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-zinc-400 mix-blend-difference"
        >
          Full-Stack Architecture &nbsp; // &nbsp; Frame-Perfect Motion
        </motion.p>
      </div>
    </section>
  );
}