import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Particles({ count = 350 }) {
    const mesh = useRef()
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20
        }
        return pos
    }, [count])

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.02
            mesh.current.rotation.x = state.clock.elapsedTime * 0.01
        }
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#6366f1"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    )
}

function FloatingGeometry() {
    const groupRef = useRef()

    useFrame((state) => {
        const t = state.clock.elapsedTime
        if (groupRef.current) {
            const children = groupRef.current.children
            // Torus
            children[0].rotation.x = t * 0.15
            children[0].rotation.y = t * 0.1
            children[0].position.y = Math.sin(t * 0.3) * 0.5
            // Icosahedron
            children[1].rotation.x = t * 0.08
            children[1].rotation.z = t * 0.12
            children[1].position.y = 1 + Math.sin(t * 0.25 + 1) * 0.4
            // Ring
            children[2].rotation.x = Math.PI / 2 + Math.sin(t * 0.2) * 0.3
            children[2].rotation.z = t * 0.1
        }
    })

    return (
        <group ref={groupRef}>
            <mesh position={[3, 0, -2]}>
                <torusGeometry args={[1.2, 0.02, 8, 32]} />
                <meshBasicMaterial color="#4F46E5" transparent opacity={0.3} />
            </mesh>
            <mesh position={[-2.5, 1, -3]}>
                <icosahedronGeometry args={[1.5, 1]} />
                <meshBasicMaterial color="#7C3AED" wireframe transparent opacity={0.15} />
            </mesh>
            <mesh position={[0, -1, -4]}>
                <ringGeometry args={[2.5, 2.55, 24]} />
                <meshBasicMaterial color="#818cf8" transparent opacity={0.2} side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

function GridFloor() {
    const gridRef = useRef()

    useFrame((state) => {
        if (gridRef.current) {
            gridRef.current.position.z = (state.clock.elapsedTime * 0.3) % 2
        }
    })

    return (
        <group ref={gridRef} position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <gridHelper args={[40, 20, '#1a1a2e', '#1a1a2e']} rotation={[Math.PI / 2, 0, 0]} />
        </group>
    )
}

export default function Scene3D() {
    return (
        <div className="canvas-container">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
                performance={{ min: 0.5 }}
                frameloop="always"
            >
                <color attach="background" args={['#050505']} />
                <fog attach="fog" args={['#050505', 5, 25]} />
                <Particles />
                <FloatingGeometry />
                <GridFloor />
            </Canvas>
        </div>
    )
}
