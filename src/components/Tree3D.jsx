import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Stars } from '@react-three/drei';
import * as THREE from 'three';

const PeachTree = ({ scrollProgress }) => {
    const groupRef = useRef();

    // Generate random branches and blossoms only once
    const branches = useMemo(() => {
        const items = [];
        for (let i = 0; i < 70; i++) {
            const y = Math.random() * 12 - 2; // Spread branches along Y axis
            const angle = Math.random() * Math.PI * 2;
            const length = Math.random() * 2.5 + 1;
            
            const rotX = (Math.random() - 0.5) * Math.PI / 2;
            const rotZ = (Math.random() + 0.5) * (Math.PI / 4) * (Math.random() > 0.5 ? 1 : -1);
            
            items.push({ y, angle, length, rotX, rotZ, id: i });
        }
        return items;
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Smoothly rotate tree based on scroll or time
            groupRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <group ref={groupRef} position={[0, -5, 0]}>
            {/* Trunk */}
            <mesh position={[0, 3, 0]}>
                <cylinderGeometry args={[0.4, 0.7, 16, 8]} />
                <meshStandardMaterial color="#4a2c11" roughness={0.9} />
            </mesh>

            {/* Branches and Blossoms */}
            {branches.map((b) => (
                <group key={b.id} position={[0, b.y, 0]} rotation={[b.rotX, b.angle, b.rotZ]}>
                    <mesh position={[0, b.length / 2, 0]}>
                        <cylinderGeometry args={[0.05, 0.15, b.length, 5]} />
                        <meshStandardMaterial color="#3a220d" roughness={0.9} />
                    </mesh>

                    {/* Main blossom cluster at tip */}
                    <mesh position={[0, b.length, 0]} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
                        <icosahedronGeometry args={[Math.random() * 0.5 + 0.3, 1]} />
                        <meshStandardMaterial 
                            color={Math.random() > 0.5 ? '#ffb7b2' : '#ff94b4'} 
                            roughness={0.4}
                            emissive="#ffb7b2"
                            emissiveIntensity={0.2}
                        />
                    </mesh>

                    {/* Secondary blossoms */}
                    {Math.random() > 0.5 && (
                        <mesh position={[0, b.length / 1.5, Math.random() * 0.3]} rotation={[Math.random() * Math.PI, 0, 0]}>
                            <icosahedronGeometry args={[0.25, 1]} />
                            <meshStandardMaterial color="#fff0f5" roughness={0.5} emissive="#ffb7b2" emissiveIntensity={0.1}/>
                        </mesh>
                    )}
                </group>
            ))}
        </group>
    );
};

// Falling Petals Particle System
const FallingPetals = () => {
    const count = 150;
    const mesh = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                x: (Math.random() - 0.5) * 20,
                y: Math.random() * 20 - 10,
                z: (Math.random() - 0.5) * 20,
                speed: Math.random() * 0.05 + 0.02,
                spinX: Math.random() * 0.1,
                spinY: Math.random() * 0.1,
                spinZ: Math.random() * 0.1
            });
        }
        return temp;
    }, []);

    useFrame(() => {
        particles.forEach((p, i) => {
            p.y -= p.speed;
            p.x += Math.sin(p.y * 0.5) * 0.02; // Float sideways
            
            // Loop back to top
            if (p.y < -10) {
                p.y = 10;
                p.x = (Math.random() - 0.5) * 20;
            }

            dummy.position.set(p.x, p.y, p.z);
            dummy.rotation.x += p.spinX;
            dummy.rotation.y += p.spinY;
            dummy.rotation.z += p.spinZ;
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <circleGeometry args={[0.1, 5]} />
            <meshBasicMaterial color="#ffb7b2" side={THREE.DoubleSide} transparent opacity={0.8} />
        </instancedMesh>
    );
};

export const TreeCanvas = ({ scrollProgress }) => {
    return (
        <div className="sticky top-0 w-full h-screen z-0 -mt-20 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#fff8e7" />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffb7b2" />
                
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                    <PeachTree />
                </Float>
                
                <FallingPetals />
                
                <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={10} color="#8c5737" />
                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
};
