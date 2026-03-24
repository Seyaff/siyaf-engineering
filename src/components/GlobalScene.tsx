"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

export default function GlobalScene() {
  const glassRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!glassRef.current) return;

    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight * 2; 
    let scrollProgress = Math.min(scrollY / maxScroll, 1);

  
    glassRef.current.rotation.y += delta * 0.1;
    glassRef.current.rotation.x += delta * 0.05;


    const targetX = THREE.MathUtils.lerp(0, 3.5, scrollProgress * 2); 
    const targetY = THREE.MathUtils.lerp(0, -1.5, scrollProgress * 2);
    const targetScale = THREE.MathUtils.lerp(1.8, 0.8, scrollProgress * 2);

    glassRef.current.position.x = THREE.MathUtils.lerp(glassRef.current.position.x, targetX, 0.05);
    glassRef.current.position.y = THREE.MathUtils.lerp(glassRef.current.position.y, targetY, 0.05);
    glassRef.current.scale.set(targetScale, targetScale, targetScale);
  });

  return (
    <>
      <ambientLight intensity={1.5} />
     
      <directionalLight position={[5, 5, 2]} intensity={3} color="#f4efe6" />
      <directionalLight position={[-5, -5, -2]} intensity={1} color="#d4c3b3" />
      
  
      <Environment preset="city" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={glassRef}>
          <torusGeometry args={[1.2, 0.4, 64, 128]} />
   
          <MeshTransmissionMaterial 
            backside 
            thickness={1.5} 
            roughness={0.05} 
            transmission={1} 
            ior={1.4} 
            chromaticAberration={0.04} 
            color="#f4efe6" 
          />
        </mesh>
      </Float>
    </>
  );
}