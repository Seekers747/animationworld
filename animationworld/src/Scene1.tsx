import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text3D } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'

function AnimationText() {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.position.x = 2 * delta
  })

  return (
    <Text3D
        ref={ref}
        position={[-18, 0, 0]}
        font="/fonts/helvetiker_regular.typeface.json"
        size={2}
        height={0.5}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.03}
        bevelOffset={0}
        bevelSegments={5}
        >
        HELLO
        <meshStandardMaterial color="white" />
    </Text3D>
  )
}

export default function Scene1() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <AnimationText/>
      <OrbitControls />
    </Canvas>
  )
}