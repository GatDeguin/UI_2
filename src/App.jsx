import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import DashboardOverlay from './components/DashboardOverlay';
import Header from './components/Header';
import FilterControls from './components/FilterControls';
import GlassFrame from './components/GlassFrame';

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
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* 3D Canvas background using react-three-fiber */}
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight castShadow intensity={1} position={[5, 5, 5]} />
        <Environment
          files="studio_small_09_1k.hdr"
          intensity={0.2}
          rotation={[0, Math.PI / 4, 0]}
        />
        {/* Rounded glass frame surrounding the dashboard */}
        <GlassFrame />
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
