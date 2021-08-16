import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {  Environment, OrbitControls } from "@react-three/drei"
import dynamic from 'next/dynamic';
const Model = dynamic(() => import('./Model'));

export default function Scene() {
  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]} width="100vw">
          <ambientLight intensity={2} />
          <Suspense fallback={null}>
            <Model />
            <OrbitControls />
            <Environment preset="sunset" background />
          </Suspense>
      </Canvas>
    </>

  );
}

