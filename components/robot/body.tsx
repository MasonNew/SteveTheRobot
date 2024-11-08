"use client";

import { useRef } from 'react';
import { Mesh } from 'three';

export function RobotBody() {
  const bodyRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Main Body - Torso */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 4, 2]} />
        <meshStandardMaterial
          color="#7C3AED"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Clothing - Jacket */}
      <mesh position={[0, 0.2, 1.02]}>
        <boxGeometry args={[3.2, 3.8, 0.2]} />
        <meshStandardMaterial
          color="#4C1D95"
          metalness={0.3}
          roughness={0.7}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Holographic Shield */}
      <mesh position={[0, 0, 1.15]}>
        <planeGeometry args={[3.4, 4.2]} />
        <meshStandardMaterial
          color="#A78BFA"
          metalness={1}
          roughness={0}
          transparent={true}
          opacity={0.1}
          envMapIntensity={2}
        />
      </mesh>

      {/* Energy Belt */}
      <mesh position={[0, -1.5, 1.1]}>
        <boxGeometry args={[3.3, 0.3, 0.1]} />
        <meshStandardMaterial
          color="#8B5CF6"
          metalness={0.9}
          roughness={0.1}
          emissive="#8B5CF6"
          emissiveIntensity={0.5}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Core Light */}
      <mesh position={[0, 0, 1.2]}>
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial
          color="#60A5FA"
          emissive="#60A5FA"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Power Conduits */}
      <mesh position={[0, 0, 1.1]}>
        <torusGeometry args={[0.7, 0.05, 16, 32]} />
        <meshStandardMaterial
          color="#A78BFA"
          emissive="#A78BFA"
          emissiveIntensity={0.3}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Shoulder Pads with Energy Trim */}
      <mesh position={[-1.6, 1.5, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial
          color="#6D28D9"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      <mesh position={[-1.6, 1.5, 0.2]}>
        <torusGeometry args={[0.3, 0.03, 16, 32]} />
        <meshStandardMaterial
          color="#C4B5FD"
          emissive="#C4B5FD"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>
      <mesh position={[1.6, 1.5, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial
          color="#6D28D9"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      <mesh position={[1.6, 1.5, 0.2]}>
        <torusGeometry args={[0.3, 0.03, 16, 32]} />
        <meshStandardMaterial
          color="#C4B5FD"
          emissive="#C4B5FD"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Energy Lines */}
      <mesh position={[0, 0.5, 1.05]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial
          color="#A78BFA"
          metalness={0.9}
          roughness={0.1}
          emissive="#A78BFA"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0, 0, 1.05]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial
          color="#A78BFA"
          metalness={0.9}
          roughness={0.1}
          emissive="#A78BFA"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Side Armor Plates */}
      <mesh position={[-1.55, 0, 0]}>
        <boxGeometry args={[0.1, 3, 1.5]} />
        <meshStandardMaterial
          color="#5B21B6"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>
      <mesh position={[1.55, 0, 0]}>
        <boxGeometry args={[0.1, 3, 1.5]} />
        <meshStandardMaterial
          color="#5B21B6"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>
    </group>
  );
}