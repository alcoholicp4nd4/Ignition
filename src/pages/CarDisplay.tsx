import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Background() {
  const { scene } = useGLTF("/models/garage.glb"); // Load the background model

  return (
    <primitive
      object={scene}
      scale={[120, 150, 120]} // Scale the background as needed
      position={[0, 100, 0]} // Position the background behind the car
    />
  );
}

function Car({ color }) {
  const carRef = useRef();
  const { scene } = useGLTF("/models/nigga.glb"); // Load the car model
  // Change car color dynamically
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color);
    }
  });

  return (
    <primitive
      object={scene}
      ref={carRef}
      scale={[6000, 6000, 6000]} // Scale the car model
      position={[0, 0, 0]} // Center the car in the scene
      rotation={[0, Math.PI / 2, 0]} // Rotate 90 degrees on the Y-axis
    />
  );
}

function App() {
  const [color, setColor] = useState("#ffffff"); // Default color: White

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} />
        <Background /> {/* Render the background */}
        <Car color={color} /> {/* Render the car */}
        <OrbitControls enableZoom={true} /> {/* Enable camera rotation */}
      </Canvas>
      {/* Color Picker */}
      <div style={{ position: "absolute", top: 100, left: 100 }}>
        <label>Car color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
