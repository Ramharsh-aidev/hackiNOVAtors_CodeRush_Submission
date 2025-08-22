import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Mesh, Points, BufferGeometry, BufferAttribute, Color } from 'three';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// Neural Network Crystal Component
function NeuralCrystal() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={[2, 2, 2]}>
        <icosahedronGeometry args={[1, 2]} />
        <meshPhysicalMaterial
          color="#00f6ff"
          transmission={0.9}
          opacity={0.8}
          metalness={0.1}
          roughness={0.1}
          ior={1.5}
          thickness={0.1}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          emissive="#00f6ff"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Interactive Particle System
function ParticleField() {
  const pointsRef = useRef<Points>(null);
  
  const particlesPosition = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Mouse interaction
      const mouse = state.mouse;
      pointsRef.current.rotation.x = mouse.y * 0.1;
      pointsRef.current.rotation.z = mouse.x * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#a950f8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Floating Geometric Elements
function FloatingGeometry() {
  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[-4, 2, -2]}>
        <mesh>
          <octahedronGeometry args={[0.3]} />
          <meshPhysicalMaterial
            color="#39ff14"
            transmission={0.7}
            emissive="#39ff14"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8} position={[4, -1, -1]}>
        <mesh>
          <tetrahedronGeometry args={[0.4]} />
          <meshPhysicalMaterial
            color="#00f6ff"
            transmission={0.8}
            emissive="#00f6ff"
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2} position={[2, 3, -3]}>
        <mesh>
          <dodecahedronGeometry args={[0.25]} />
          <meshPhysicalMaterial
            color="#a950f8"
            transmission={0.9}
            emissive="#a950f8"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.3} color="#ffffff" />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#00f6ff"
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a950f8" />
        
        {/* Scene Components */}
        <NeuralCrystal />
        <ParticleField />
        <FloatingGeometry />
        
        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}