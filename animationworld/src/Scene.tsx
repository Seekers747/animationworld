import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Box args={[2, 6, 1]}>
        <meshStandardMaterial color="beige" />
      </Box>
      <Box args={[2, 6, 1]} position={[0, 0, 3]}>
        <meshStandardMaterial color="beige" />
      </Box>
      <Box args={[2, 1, 4]} position={[0, 0, 1.5]}>
        <meshStandardMaterial color="beige" />
      </Box>
      <OrbitControls />
    </Canvas>
  )
}
