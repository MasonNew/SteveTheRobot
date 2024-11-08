"use client";

import { useRef } from 'react';
import { Mesh } from 'three';
import { MotionValue } from 'framer-motion';

interface RobotHeadProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function RobotHead({ mouseX, mouseY }: RobotHeadProps) {
  const headRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Main Head */}
      <mesh ref={headRef} position={[0, 2.5, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#8B5CF6"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Holographic Visor */}
      <mesh position={[0, 2.7, 1.02]}>
        <boxGeometry args={[1.8, 0.6, 0.1]} />
        <meshStandardMaterial
          color="#4C1D95"
          metalness={1}
          roughness={0}
          transparent={true}
          opacity={0.8}
          envMapIntensity={2}
        />
      </mesh>

      {/* Visor Energy Frame */}
      <mesh position={[0, 2.7, 1.05]}>
        <boxGeometry args={[1.85, 0.65, 0.02]} />
        <meshStandardMaterial
          color="#A78BFA"
          emissive="#A78BFA"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Eyes with Energy Rings */}
      <mesh position={[-0.5, 2.7, 1.1]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={0.7}
        />
      </mesh>
      <mesh position={[-0.5, 2.7, 1.15]}>
        <torusGeometry args={[0.15, 0.02, 16, 32]} />
        <meshStandardMaterial
          color="#7DD3FC"
          emissive="#7DD3FC"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>
      <mesh position={[0.5, 2.7, 1.1]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={0.7}
        />
      </mesh>
      <mesh position={[0.5, 2.7, 1.15]}>
        <torusGeometry args={[0.15, 0.02, 16, 32]} />
        <meshStandardMaterial
          color="#7DD3FC"
          emissive="#7DD3FC"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Advanced Head Crest */}
      <mesh position={[0, 3.6, 0]}>
        <boxGeometry args={[0.8, 0.3, 0.8]} />
        <meshStandardMaterial
          color="#7C3AED"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1.3}
        />
      </mesh>
      <mesh position={[0, 3.6, 0.2]}>
        <boxGeometry args={[0.9, 0.1, 0.1]} />
        <meshStandardMaterial
          color="#C4B5FD"
          emissive="#C4B5FD"
          emissiveIntensity={0.4}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Side Panels with Energy Trim */}
      <mesh position={[-1.1, 2.5, 0]}>
        <boxGeometry args={[0.2, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#6D28D9"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      <mesh position={[-1.1, 2.5, 0.4]}>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial
          color="#C4B5FD"
          emissive="#C4B5FD"
          emissiveIntensity={0.3}
          metalness={1}
          roughness={0}
        />
      </mesh>
      <mesh position={[1.1, 2.5, 0]}>
        <boxGeometry args={[0.2, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#6D28D9"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      <mesh position={[1.1, 2.5, 0.4]}>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial
          color="#C4B5FD"
          emissive="#C4B5FD"
          emissiveIntensity={0.3}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </group>
  );
}