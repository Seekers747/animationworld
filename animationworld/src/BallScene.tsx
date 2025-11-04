import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import { Mesh } from 'three'

interface BallProps {
  position: [number, number, number]
  size: [number, number, number]
}

function Ball({ position, size }: BallProps) {
  const ref = useRef<Mesh>(null)
  const ringref = useRef<Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useFrame((_state, delta) => {
    if (!ref.current || !ringref.current) return
    // ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2
    const speed = isHovered ? 0.5 : 0.15
    ref.current.rotation.y += speed * delta
    ringref.current.rotation.z += speed * delta
  })

  return (
    <>
        <mesh position={position} ref={ref} onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)} onClick={() => setIsClicked(!isClicked)} scale={isClicked ? 1.5 : 1}>
            <sphereGeometry args={size} />
            <meshStandardMaterial color={isHovered ? 'red' : 'orange'} wireframe />
        </mesh>
        <mesh position={position} ref={ringref} onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)} rotation={[Math.PI / 2, 0, 0]} onClick={() => setIsClicked(!isClicked)} scale={isClicked ? 1.5 : 1}>
            <torusGeometry args={[size[0] + 0.5, 0.05, 16, 100]} />
            <meshStandardMaterial color={isHovered ? 'red' : 'orange'} wireframe />
        </mesh>
    </>
  )
}

export default function BallScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Ball position={[0, 0, 0]} size={[1, 30, 30]} />
      <OrbitControls />
    </Canvas>
  )
}