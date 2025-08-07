import React from 'react';
import { Canvas } from '@react-three/fiber';
import { RoundedBox, Environment, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import DashboardOverlay from './components/DashboardOverlay';
import Header from './components/Header';
import FilterControls from './components/FilterControls';

// Soft shadows se deshabilitan por compatibilidad

// Variants for a subtle wobble animation on the overlay panel.
const wobble = {
  initial: { rotateZ: 0 },
  animate: {
    rotateZ: [0, 0.3, -0.3, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export default function App() {
  const glassTextures = useTexture({
    map:
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/ambientcg/Ice003_1K-JPG_Color.jpg',
    normalMap:
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/ambientcg/Ice003_1K-JPG_NormalGL.jpg',
    roughnessMap:
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/ambientcg/Ice003_1K-JPG_Roughness.jpg',
  });
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* 3D Canvas background using react-three-fiber */}
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight castShadow intensity={1} position={[5, 5, 5]} />
        <Environment
          files="https://raw.githubusercontent.com/pmndrs/drei-assets/master/hdri/studio_small_09_1k.hdr"
          intensity={0.2}
          rotation={[0, Math.PI / 4, 0]}
        />
        {/* Rounded glass frame surrounding the dashboard */}
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
            {...glassTextures}
            color="#ffffff"
            transmission={0.9}
            thickness={0.1}
            roughness={0}
            metalness={0}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </RoundedBox>
      </Canvas>
      {/* Overlay container with micro animations */}
      <motion.div
        variants={wobble}
        initial="initial"
        animate="animate"
        className="absolute inset-0 flex flex-col p-4 pointer-events-none"
      >
        {/* Header with title and filter selector */}
        <Header />
        {/* Date range controls */}
        <FilterControls />
        {/* Dashboard grid; pointer-events-auto allows interaction */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 md:gap-6 lg:gap-8 mt-4 h-full pointer-events-auto"
        >
          <DashboardOverlay />
        </div>
      </motion.div>
    </div>
  );
}
