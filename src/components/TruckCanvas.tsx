import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Hotspot } from "../scene/Hotspot"
import { hotspots } from "../scene/hotspots"
import { CarModel } from "../scene/model/CarModel"

export function TruckCanvas() {

    return (
        <div className="h-dvh">
            <Canvas >
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} />

                <CarModel />
                {hotspots.map((hotspot) => (
                    <Hotspot
                        key={hotspot.id}
                        position={hotspot.position}
                        option={hotspot.option}
                    />
                ))}

                <OrbitControls minDistance={7} maxDistance={7} />
            </Canvas>
        </div>
    )
}