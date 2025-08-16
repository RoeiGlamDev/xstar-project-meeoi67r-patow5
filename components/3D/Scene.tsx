import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';

interface SceneProps {
  className?: string;
}

const Scene: React.FC<SceneProps> = ({ className }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <div className={`${className`} flex justify-center items-center h-screen bg-white}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <motion.div
          ref={meshRef}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </motion.mesh>
      </Canvas>
      <div className="absolute top-10 left-10">
        <h1 className="text-5xl font-bold text-orange-500">
          Welcome to luxury LRP cosmetics
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Experience the elegance of our premium cosmetic products, designed for the discerning individual.
        </p>
        <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Scene;