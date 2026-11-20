'use client';

import { Canvas } from '@react-three/fiber';
import { Particles } from './Particles';

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <Particles count={350} />
      <ambientLight intensity={1.3} />
      <pointLight position={[10, 10, 10]} color="#c4b5fd" />
    </Canvas>
  );
}
