"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import type { Product } from "@/types/commerce";
import { FallbackViewer } from "./fallback-viewer";

const LOADING_FALLBACK = (
  <div className="flex h-full items-center justify-center text-sm uppercase tracking-widest text-[var(--color-text-muted)]">
    3D viewer loading
  </div>
);

interface ProductViewerProps {
  product: Product;
}

function GarmentModel({ rotation }: { rotation: [number, number, number] }) {
  return (
    <group rotation={rotation}>
      {/* Torso block */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 2.2, 0.6]} />
        <meshStandardMaterial
          color="#1a1a1d"
          metalness={0.15}
          roughness={0.7}
          emissive="#8a1a14"
          emissiveIntensity={0.06}
        />
      </mesh>

      {/* Shoulder accents */}
      <mesh position={[-0.82, 1.5, 0]} castShadow>
        <boxGeometry args={[0.22, 0.18, 0.55]} />
        <meshStandardMaterial color="#e5322c" metalness={0.4} roughness={0.4} />
      </mesh>
      <mesh position={[0.82, 1.5, 0]} castShadow>
        <boxGeometry args={[0.22, 0.18, 0.55]} />
        <meshStandardMaterial color="#e5322c" metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Lapel line */}
      <mesh position={[0, 0.6, 0.31]}>
        <boxGeometry args={[1.2, 0.04, 0.03]} />
        <meshStandardMaterial color="#e5322c" emissive="#e5322c" emissiveIntensity={0.4} />
      </mesh>

      {/* Bottom hem accent */}
      <mesh position={[0, -0.7, 0.31]}>
        <boxGeometry args={[1.5, 0.04, 0.03]} />
        <meshStandardMaterial color="#b7ff4a" emissive="#b7ff4a" emissiveIntensity={0.25} />
      </mesh>

      {/* Collar stand */}
      <mesh position={[0, 1.7, 0.12]} castShadow>
        <boxGeometry args={[1.2, 0.18, 0.28]} />
        <meshStandardMaterial color="#2a2a2e" metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Back seam accent */}
      <mesh position={[0, 0, -0.31]}>
        <boxGeometry args={[1.5, 1.8, 0.02]} />
        <meshStandardMaterial color="#0b0b0d" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Subtle interior glow */}
      <pointLight position={[0, 0.2, 1.2]} intensity={0.6} color="#e5322c" distance={2.2} decay={2} />
    </group>
  );
}

export function ProductViewer({ product }: ProductViewerProps) {
  const [autoRotate, setAutoRotate] = useState(true);
  const mounted = typeof window !== "undefined";

  if (!mounted) {
    return <FallbackViewer product={product} />;
  }

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--color-bg-tertiary)]">
      <Canvas
        camera={{ position: [3.4, 1.8, 3.4], fov: 38 }}
        shadows
        gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
        style={{ background: "radial-gradient(circle at 50% 40%, #1f1f22 0%, #0a0a0b 70%)" }}
      >
        <PerspectiveCamera makeDefault position={[3.4, 1.8, 3.4]} fov={38} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[6, 8, 4]}
          intensity={1.1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#b7ff4a" />
        <Environment preset="city" />
        <GarmentModel rotation={[0.3, 0.6, 0]} />
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={true}
          minDistance={2.8}
          maxDistance={7}
          minPolarAngle={Math.PI * 0.25}
          maxPolarAngle={Math.PI * 0.6}
          autoRotate={autoRotate}
          autoRotateSpeed={1.6}
          target={[0, 0.4, 0]}
        />
      </Canvas>
      <Suspense fallback={LOADING_FALLBACK}>
        <div />
      </Suspense>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)]/70 px-3 py-1.5 text-xs text-[var(--color-text-secondary)] backdrop-blur-sm">
        <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
        3D garment view
      </div>

      <button
        type="button"
        onClick={() => setAutoRotate((v) => !v)}
        className="absolute bottom-4 right-4 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)]/70 px-3 py-1.5 text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] backdrop-blur-sm"
        aria-label={autoRotate ? "Pause rotation" : "Resume rotation"}
      >
        {autoRotate ? "Pause" : "Resume"}
      </button>
    </div>
  );
}
