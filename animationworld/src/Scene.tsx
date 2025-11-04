import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'

function RotatingGroup() {
    const refs = {
        h: useRef<Group>(null),
        e: useRef<Group>(null),
        l1: useRef<Group>(null),
        l2: useRef<Group>(null),
        o: useRef<Group>(null),
    }

    useFrame((_, delta) => {
        Object.values(refs).forEach(ref => {
            if (!ref.current) return
            ref.current.rotation.x += 1 * delta
            ref.current.rotation.y += 0.5 * delta
        })
    })

    return (
        <group rotation={[0, Math.PI, 0]}> 
            {/* First letter H */}
            <group position={[0, 0, 0]} ref={refs.h}> 
                <Box args={[2, 6, 1]}>
                    <meshStandardMaterial color="white" />
                </Box> 
                <Box args={[2, 6, 1]} position={[0, 0, 3]}>
                    <meshStandardMaterial color="white" /> 
                </Box>
                <Box args={[2, 1, 4]} position={[0, 0, 1.5]}>
                    <meshStandardMaterial color="white" /> 
                </Box>
            </group> 
            {/* Second letter E */} 
            <group position={[0, 0, 5]} ref={refs.e}> 
                <Box args={[2, 6, 1]}> 
                    <meshStandardMaterial color="white" />
                </Box> 
                <Box args={[2, 1, 4]} position={[0, 0, 1.5]}>
                    <meshStandardMaterial color="white" />
                </Box>
                <Box args={[2, 1, 4]} position={[0, 2.5, 1.5]}>
                    <meshStandardMaterial color="white" />
                </Box> 
                <Box args={[2, 1, 4]} position={[0, -2.5, 1.5]}>
                    <meshStandardMaterial color="white" />
                </Box> 
            </group>
            {/* Third letter L */}
            <group position={[0, 0, 10]} ref={refs.l1}> 
                <Box args={[2, 6, 1]}> 
                    <meshStandardMaterial color="white" />
                </Box> 
                <Box args={[2, 1, 4]} position={[0, -2.5, 1.5]}>
                    <meshStandardMaterial color="white" />
                </Box> 
            </group>
            {/* Fourth letter L */}
            <group position={[0, 0, 15]} ref={refs.l2}> 
                <Box args={[2, 6, 1]}> 
                    <meshStandardMaterial color="white" />
                </Box> 
                <Box args={[2, 1, 4]} position={[0, -2.5, 1.5]}>
                    <meshStandardMaterial color="white" />
                </Box> 
            </group>
            {/* Fifth letter O */}
            <group position={[0, 0, 20]} ref={refs.o}> 
                <Box args={[2, 6, 1]}>
                    <meshStandardMaterial color="white" /> 
                </Box> 
                <Box args={[2, 6, 1]} position={[0, 0, 3]}>
                    <meshStandardMaterial color="white" /> 
                </Box>
                <Box args={[2, 1, 4]} position={[0, 2.5, 1.5]}>
                    <meshStandardMaterial color="white" /> 
                </Box>
                <Box args={[2, 1, 4]} position={[0, -2.5, 1.5]}>
                    <meshStandardMaterial color="white" /> 
                </Box>
            </group>
            {/* Ground */}
            <group position={[0, -3.5, 11.5]}> 
                <Box args={[10, 1, 25]}> 
                    <meshStandardMaterial color="lightblue" />
                </Box> 
            </group> 
        </group>
    )
}

 export default function Scene1() {
    return (
        <Canvas camera={{ position: [20, 5, -10], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <RotatingGroup/>
            <OrbitControls target={[0, 0, -10]} />
        </Canvas>
    )
}