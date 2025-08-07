import React from 'react';
import { RoundedBox } from '@react-three/drei';

export default function GlassFrame() {
  return (
    <RoundedBox
      castShadow
      receiveShadow
      args={[5, 3, 0.1]}
      radius={0.05}
      smoothness={4}
      rotation-x={-Math.PI / 4}
      position={[0, 0, 0]}
    >
      <meshPhysicalMaterial
        color="#ffffff"
        transmission={0.9}
        thickness={0.1}
        roughness={0}
        metalness={0}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </RoundedBox>
  );
}
