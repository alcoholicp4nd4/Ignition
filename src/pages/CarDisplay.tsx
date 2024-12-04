import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei';

const CarDisplay = () => {
  const carRef = useRef<Mesh>(null);
  const carModel = useLoader(GLTFLoader, '/public/models/2020_chevrolet_corvette_c8.r.glb'); // Update with the path to your car model

  // Rotate the car model
  useFrame((state, delta) => {
    if (carRef.current) {
      carRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive
      ref={carRef}
      object={carModel?.scene}
      scale={[200, 200, 200]} // Adjust scale if needed
    />
  );
};

const CarDisplayCanvas = () => (
  <div
    className="flex justify-center items-center w-full h-screen bg-gray-100"
    style={{
      overflow: 'hidden',
    }}
  >
    <Canvas
      className="w-full h-full"
      style={{
        height: '90vh', // Covers most of the viewport height
      }}
    >
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={true} // Allow zooming in and out
      />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 500, 10]} />
      <CarDisplay />
    </Canvas>
  </div>
);

export default CarDisplayCanvas;
