import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Hotspot } from "../scene/Hotspot"
import { hotspots } from "../scene/hotspots"
import { CarModel } from "../scene/model/CarModel"
import { useDragRotation } from "../hooks/useDragRotation"

export function TruckCanvas() {

    const { handlePointerDown, handlePointerMove, handlePointerUp, rotation } = useDragRotation()

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
                    {hotspots.map((hotspot) => (
                        <Hotspot
                            key={hotspot.id}
                            position={hotspot.position}
                            option={hotspot.option}
                        />
                    ))}
                </group>

                <OrbitControls
                    enableRotate={false}
                    minDistance={10}
                    maxDistance={10}
                />
            </Canvas>
        </div>
    )
}