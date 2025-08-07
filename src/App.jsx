import React from 'react';
import { Canvas } from '@react-three/fiber';
import { RoundedBox, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import DashboardOverlay from './components/DashboardOverlay';
import Header from './components/Header';
import FilterControls from './components/FilterControls';

// Variants for a subtle wobble animation on the overlay panel.
const wobble = {
  initial: { rotateZ: 0 },
  animate: {
    rotateZ: [0, 0.5, -0.5, 0],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export default function App() {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* 3D Canvas background using react-three-fiber */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <Environment
          files="https://raw.githubusercontent.com/pmndrs/drei-assets/master/hdri/studio_small_09_1k.hdr"
          intensity={0.2}
          rotation={[0, Math.PI / 4, 0]}
        />
        {/* Rounded glass frame surrounding the dashboard */}
        <RoundedBox
          args={[5, 3, 0.1]}
          radius={0.05}
          smoothness={4}
          rotation-x={-Math.PI / 4}
          position={[0, 0, 0]}
        >
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.2}
            roughness={0.05}
            thickness={0.1}
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
        <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-4 h-full pointer-events-auto">
          <DashboardOverlay />
        </div>
      </motion.div>
    </div>
  );
}
