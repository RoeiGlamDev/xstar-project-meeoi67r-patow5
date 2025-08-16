import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useAnimation, motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animation = useAnimation();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // orange color
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.position.y += 0.01  Math.sin(Date.now()  0.001);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" ref={mountRef}>
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-orange-500"
        initial={{ opacity: 0, y: -50 }}
        animate={animation}
        transition={{ duration: 1 }}
      >
        Welcome to luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="absolute top-40 left-1/2 transform -translate-x-1/2 text-xl text-white max-w-lg text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={animation}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover our exclusive range of high-end cosmetics, designed to elevate your beauty regimen to a new standard of luxury.
      </motion.p>
      <motion.div
        className="absolute top-60 left-1/2 transform -translate-x-1/2 px-6 py-3 text-lg bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default FloatingElements;