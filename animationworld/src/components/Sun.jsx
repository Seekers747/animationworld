import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Sun(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/sun.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (materials.material) {
      materials.material.color = new THREE.Color('#ffcc33')
      materials.material.emissive = new THREE.Color('#ff6600')
      materials.material.emissiveIntensity = 4
    }
    if (materials.material_1) {
      materials.material_1.color = new THREE.Color('#ffbb33')
      materials.material_1.emissive = new THREE.Color('#ffaa00')
      materials.material_1.emissiveIntensity = 5
      materials.material_1.transparent = true
      materials.material_1.opacity = 0.6
    }
  }, [materials])

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.1 // slow rotation
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group>
            <group>
              <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.UnstableStarCore_1_0.geometry} material={materials.material} />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={1.01}>
                <mesh geometry={nodes.UnstableStarref_2_0.geometry} material={materials.material_1} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sun.gltf')
