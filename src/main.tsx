import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 150,150,150); // Move the camera up (y=10) and back (z=10)
camera.lookAt(0, 0, 0); // Point the camera towards the origin (center of the scene)

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
