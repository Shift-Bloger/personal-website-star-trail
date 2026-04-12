"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line, Stars } from "@react-three/drei";

function StarLines() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create an array of star data for lines (trails)
  const starCount = 300;
  
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map(() => {
      // Random position on a sphere
      const radius = 2 + Math.random() * 8;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      return {
        start: new THREE.Vector3(x, y, z),
        length: 0.1 + Math.random() * 0.5,
        speed: 0.001 + Math.random() * 0.003,
        color: new THREE.Color().setHSL(0.55 + Math.random() * 0.1, 1, 0.5 + Math.random() * 0.5).getStyle(),
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the entire group to simulate Earth's rotation (star trails)
      groupRef.current.rotation.z -= delta * 0.05;
      groupRef.current.rotation.x = Math.PI / 4; // Tilt it for a nice angle
    }
  });

  return (
    <group ref={groupRef}>
      {stars.map((star, i) => {
        const end = star.start.clone().applyAxisAngle(new THREE.Vector3(0, 0, 1), star.length);
        const points = [
          [star.start.x, star.start.y, star.start.z] as [number, number, number],
          [end.x, end.y, end.z] as [number, number, number]
        ];

        return (
          <Line
            key={i}
            points={points}
            color={star.color}
            lineWidth={1}
            transparent
            opacity={0.6}
          />
        );
      })}
    </group>
  );
}

function StarDust() {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.02;
      ref.current.rotation.z -= delta * 0.03;
    }
  });

  return (
    <group ref={ref}>
      <Stars radius={20} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function StarTrail() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 bg-[#030712] overflow-hidden">
      <Canvas camera={{ position: [0, -2, 5], fov: 60 }}>
        <fog attach="fog" args={["#030712", 2, 15]} />
        <ambientLight intensity={0.5} />
        <StarLines />
        <StarDust />
      </Canvas>
      {/* A nice radial gradient to blend the background with the UI */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030712_100%)] opacity-80 mix-blend-multiply" />
    </div>
  );
}