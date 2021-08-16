import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/CO.gltf')
  console.log(nodes, materials['BrushedMetal']);
  return (
    <group ref={group} {...props} dispose={null}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[0, 0, 3]}
        // rotation={[-0.42, -0.01, -0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={nodes.Icosphere001.material}
        // position={[0, 0, 0.12]}
        // scale={[-0.56, 0.56, -0.56]}
      /> */}
      <primitive object={nodes.Scene}  material={materials['BrushedMetal']} />
    </group>
  )
}

useGLTF.preload('/CO.gltf')

