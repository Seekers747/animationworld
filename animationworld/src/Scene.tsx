import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas camera={{ position: [20, 5, -10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <group rotation={[0, Math.PI, 0]}> 
            {/* First letter H */}
            <group position={[0, 0, 0]}> 
                <Box args={[2, 6, 1]}>
                    <meshStandardMaterial color="green" />
                </Box> 
                <Box args={[2, 6, 1]} position={[0, 0, 3]}>
                    <meshStandardMaterial color="green" /> 
                </Box>
                <Box args={[2, 1, 4]} position={[0, 0, 1.5]}>
                    <meshStandardMaterial color="green" /> 
                </Box>
            </group> 
            {/* Second letter E */} 
            <group position={[0, 0, 5]}> 
                <Box args={[2, 6, 1]}> 
                    <meshStandardMaterial color="red" />
                </Box> 
                <Box args={[2, 1, 4]} position={[0, 0, 1.5]}>
                    <meshStandardMaterial color="red" />
                </Box>
                <Box args={[2, 1, 4]} position={[0, 2.5, 1.5]}>
                    <meshStandardMaterial color="red" />
                </Box> 
                <Box args={[2, 1, 4]} position={[0, -2.5, 1.5]}>
                    <meshStandardMaterial color="red" />
                </Box> 
            </group>
            {/* Third letter L */}
            <group position={[0, 0, 10]}> 
                <Box args={[2, 6, 1]}> 
                    <meshStandardMaterial color="orange" />
                </Box> 
                <Box args={[2, 1, 4]} position={[0, -2.5, 1.5]}>
                    <meshStandardMaterial color="orange" />
                </Box> 
            </group>
            {/* Fourth letter L */}
            <group position={[0, 0, 15]}> 
                <Box args={[2, 6, 1]}> 
                    <meshStandardMaterial color="purple" />
                </Box> 
                <Box args={[2, 1, 4]} position={[0, -2.5, 1.5]}>
                    <meshStandardMaterial color="purple" />
                </Box> 
            </group>
            {/* Fifth letter O */}
            <group position={[0, 0, 20]}> 
                <Box args={[2, 6, 1]}>
                    <meshStandardMaterial color="pink" /> 
                </Box> 
                <Box args={[2, 6, 1]} position={[0, 0, 3]}>
                    <meshStandardMaterial color="pink" /> 
                </Box>
                <Box args={[2, 1, 4]} position={[0, 2.5, 1.5]}>
                    <meshStandardMaterial color="pink" /> 
                </Box>
                <Box args={[2, 1, 4]} position={[0, -2.5, 1.5]}>
                    <meshStandardMaterial color="pink" /> 
                </Box>
            </group>
            {/* Ground */}
            <group position={[0, -3.5, 11.5]}> 
                <Box args={[10, 1, 25]}> 
                    <meshStandardMaterial color="lightblue" />
                </Box> 
            </group> 
        </group>
        <OrbitControls target={[0, 0, -10]} />
    </Canvas>
  )
}
