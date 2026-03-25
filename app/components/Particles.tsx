'use client';

import { useRef, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count: number;
}

export function Particles({ count }: ParticlesProps) {
  const pointsRef = useRef<THREE.Group>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      // Spread particles in a big sphere / plane
      pos[i]     = (Math.random() - 0.5) * 25;
      pos[i + 1] = (Math.random() - 0.5) * 15;
      pos[i + 2] = (Math.random() - 0.5) * 20;

      // Vibrant media house colors
      colors[i]     = Math.random() * 0.6 + 0.4; // R
      colors[i + 1] = Math.random() * 0.3;       // G
      colors[i + 2] = Math.random() * 0.8 + 0.6; // B
    }
    return { pos, colors };
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      // Gentle floating
      pointsRef.current.children[0].position.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
    }
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions.pos} stride={3} frustumCulled={false}>
        <PointMaterial
          size={0.08}
          color="#ffffff"
          transparent
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors={true}
        />
      </Points>
    </group>
  );
}