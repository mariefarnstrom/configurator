import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Hotspot } from "../scene/Hotspot"
import { hotspots } from "../scene/hotspots"
import { CarModel } from "../scene/model/CarModel"
import { useState } from "react"

export function TruckCanvas() {
    const [rotation, setRotation] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [lastX, setLastX] = useState(0)

    const handlePointerDown = (e: React.PointerEvent) => {
        setIsDragging(true)
        setLastX(e.clientX)
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return
        const deltaX = e.clientX - lastX
        setRotation((current) => current + deltaX * 0.01)
        setLastX(e.clientX)
    }

    const handlePointerUp = () => {
        setIsDragging(false)
    }

    return (
        <div className="h-dvh relative" onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}>
            <Canvas camera={{ position: [0, 4, 13], fov: 45 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} />

                <group
                    rotation={[0, rotation, 0]}
                    position={[0, -1, 0]}
                >
                    <CarModel />
                </group>
                {hotspots.map((hotspot) => (
                    <Hotspot
                        key={hotspot.id}
                        position={hotspot.position}
                        option={hotspot.option}
                    />
                ))}

                <OrbitControls
                    enableRotate={false}
                    minDistance={10}
                    maxDistance={10}
                />
            </Canvas>
        </div>
    )
}